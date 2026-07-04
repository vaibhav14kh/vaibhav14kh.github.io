---
trigger: always_on
---

# universal_export.md — Document Export Standards

The definitive **document and report export** operational standards for the JLKCO Office Automation Hub. Apply to **every** export feature and generated document/report.

> **Scope split (single source of truth):** This file owns **export** rules. The UI/UX theme, layout density, components, table patterns, and status badges are owned by `UIUX_Consistency.md` — that file is canonical for those. Do not duplicate theme rules here.

---

## 1. UI/UX consistency — see `design-system.md`

Read that file for any frontend styling decision. The export buttons below (§2.3) inherit those same conventions.

---

## 2. Universal export rule

The system uses a **Hybrid Export Approach**:
1. **Client-side generation** — for simple views, single records, or dynamically generated text: generate locally in the browser with JavaScript (`jsPDF` + `autoTable` for PDFs, HTML injection for Print, Clipboard API for Copy).
2. **Backend processing** — for complex datasets, heavy Excel manipulation, or bulk outputs: generate via Python processors and return the file (e.g., `.xlsx` or `.zip`).

### 2.1 Hard formatting & print requirements
When generating documents (frontend or backend), these constraints strictly apply to ensure professional, auto-formatted outputs with proper headers, alignments, and tabular representations:
- **General Tabular Data:** All exported data must be presented in clear tabular formats with bold headers, distinct borders, and appropriate cell alignments (e.g., numbers right-aligned, text left-aligned, headers centered). Filter out any rows containing `.datatable-hidden` or empty/colspan table structures.
- **DOCX:** A4, 0.25" margin, horizontally centered, left-aligned text, fully formatted.
- **Excel:** Must be formatted as a native Excel Table (ListObject equivalent to Ctrl+T), including filter dropdowns on headers, banded rows, auto-expanded columns, and a configured Total Row. Route to a backend endpoint via a standard `<a>` tag. Page layout: A4, 0.25" margin, horizontally centered.
- **PDF (from grids/tables):** Force **Landscape** A4, horizontally centered. Document constraints: `orientation: 'landscape', unit: 'in', format: 'a4'`. Margins must be strictly set to `0.25` inches (`{ top: 0.25, right: 0.25, bottom: 0.25, left: 0.25 }`).
- **Bulk output:** Must be a `.zip` archive containing the individual files inside.

### 2.2 Functional implementation rules (client-side)
All client-side exports must implement these javascript behaviors consistently:
- **Copy:** Use `navigator.clipboard.writeText`. For data tables, aggregate headers and rows using tab-separated joins (`\t`) and newline joins (`\n`). For live document previews (e.g. `docWrap`), copy the `.innerText` of the live-merged container. **UI Feedback:** Temporarily swap the button's inner HTML to `<i class="fas fa-check mr-1 text-green-600"></i>Copied` for 2000ms upon success.
- **Print:** Open a new window (`window.open('', '_blank')`), inject the target HTML (data table or `docWrap.innerHTML`), and apply `@media print { body { font-family: 'Times New Roman', serif; margin: 0.25in; } .hidden { display: none !important; } }`. Trigger `window.print()` on load, followed by a 500ms timeout to `window.close()`.
- **PDF (.pdf):** 
  - **For Data Grids:** Use `window.jspdf.jsPDF` alongside the `autoTable` plugin (`theme: 'grid'`, `{ fontSize: 8, cellPadding: 0.05 }`).
  - **For Document Previews (A4):** Use `html2pdf.js` targeting a cloned `docWrap` element. Settings: `{ margin: 0.5, jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }, html2canvas: { scale: 2 } }`.
- **Excel (.xlsx):**
  - **Client-Side Generation:** Use `ExcelJS` (via CDN) to build and export workbooks containing properly formatted headers (bold, pattern fills) and auto-fitted columns.

### 2.3 Export button UI standard
Every view with export capabilities **must** use this **Unified Export Toolbar** wrapper (`flex items-center space-x-2`) for consistent styling and behavior. Buttons must utilize `h-8`, `px-3`, `shadow-sm`, and `rounded-md`.

```html
<div class="flex items-center space-x-2">
    <button type="button" id="copyToClipboardBtn" class="h-8 px-3 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none flex items-center" title="Copy to Clipboard">
        <i class="fas fa-copy mr-1 text-gray-600"></i>Copy
    </button>
    
    <button type="button" id="printBtn" class="h-8 px-3 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none flex items-center" title="Print">
        <i class="fas fa-print mr-1 text-gray-600"></i>Print
    </button>
    
    <a href="{{ url_for('your_backend_excel_route', **selected_filters) }}" class="h-8 px-3 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-green-50 hover:bg-green-100 focus:outline-none flex items-center" title="Export Excel">
        <i class="fas fa-file-excel mr-1 text-green-600"></i>Excel
    </a>
    
    <button id="exportClientPdfBtn" type="button" class="h-8 px-3 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-red-50 hover:bg-red-100 focus:outline-none flex items-center" title="Export PDF">
        <i class="fas fa-file-pdf mr-1 text-red-600"></i>PDF
    </button>
</div>