# CA Firm Automation Hub

Welcome to the **CA Firm Automation Hub** — an exclusive, privacy-first suite of web tools designed specifically for modern accounting firms. This platform provides zero-cost, locally hosted automation workflows that instantly transform raw, unstructured financial data into actionable intelligence.

**Website:** [ai.manidesigns.in](https://ai.manidesigns.in)

## 🛡️ Core Philosophy: Privacy-First Processing
All tools in this arsenal are built with a **strict local-processing architecture**. 
- Sensitive financial data and Permanent Account Numbers (PANs) never leave the user's hard drive.
- No backend server uploads are required for generating PDFs, processing spreadsheets, or manipulating data.
- Built using client-side technologies (HTML5, Tailwind CSS, Alpine.js, html2pdf.js) to ensure complete offline functionality.

---

## 🛠️ The Automation Arsenal

Below is a detailed breakdown of all the individual automation tools included in the Hub:

### 1. PDF Kit (`PDFKIT.html`)
A unified suite of essential PDF manipulation utilities engineered for secure, local processing on Windows machines.
- **Functionality**: Allows for batch merging of financial statements and splitting of large ledgers by page ranges without requiring cloud uploads.

### 2. CA Report Generator (`CA_Report_Generator_V2.html`)
Automates the creation of complex financial certificates for immigration and compliance.
- **Functionality**: Dynamically generates net worth and financial reports specifically formatted for Visa and Embassy submissions. Features live foreign exchange (Forex) rate fetching and automated asset/liability calculations. Exports to PDF and DOCX.

### 3. Partnership Deed Drafter (`Partnership_Deed_Drafter_V2.html`)
A smart legal drafting engine for partnership firms.
- **Functionality**: Automates the drafting of legal partnership deeds. It includes dynamic partner clauses, instant profit-sharing/capital calculations, and strict legal formatting.

### 4. Engagement Letter Generator (`V2Engagement_Letter_Generator.html`)
Standardizes client onboarding documentation.
- **Functionality**: Instantly generates clean, compliant audit engagement letters tailored for diverse firm structures (Proprietorships, Partnerships, Companies, etc.).

### 5. Board Resolution Generator (`Board_Resolution_Generator_V2.html`)
A drafting tool for corporate compliance.
- **Functionality**: Instantly drafts compliant Board Resolutions for common corporate actions, including modifying banking limits and processing director changes.

### 6. Directors' Report (`Directors_Report_V2.html`)
Automates the statutory reporting requirements for private limited companies.
- **Functionality**: Serves as a Companies Act, 2013 compliant Directors' Report Mail Merge Engine. Integrates financial figures directly into the statutory report format.

### 7. ESIC Challan Extractor (`ESIC_Challan_Extractor_V2.html`)
A data-mining tool for payroll compliance.
- **Functionality**: Batch extracts structured monthly contribution data directly from ESIC PDF Challans, parsing the data locally and exporting it into Excel for reconciliation.

### 8. TDS Challan Extractor (`TDS_Challan_Extractor_V2.html` / `V2Challan_Extractor.html`)
Local PDF processing engine for Direct Tax compliance.
- **Functionality**: Extracts precise payment details, BSR codes, and challan serial numbers from Form 281 TDS Challans, heavily reducing manual data entry for TDS return preparation.

### 9. Multi-Challan Extractor
A unified extraction engine for multiple compliance types.
- **Functionality**: Bulk upload PF, ESIC, and TDS challans. The tool automatically detects the document type and extracts structured payment data into a consolidated local Excel file.

### 10. Bank Statement Analyzer (`V2Bank_Statement_Analyzer.html`)
An analytical engine for financial audits and forensic accounting.
- **Functionality**: Transforms massive, unstructured Excel bank statements into visual Key Performance Indicators (KPIs) and cash flow trends. Categorizes transactions and spots anomalies instantly.

### 11. Tally DayBook Dashboard (`Tally_DayBook_Dashboard_V2.html`)
Business intelligence for traditional accounting software.
- **Functionality**: Turns raw Tally cash and bank book exports into interactive visual analytics and management dashboards, giving clients immediate insights into their daily operations.

### 12. Deferred Tax Calculator (`Deferred_Tax_Calculator_V2.html`)
A specialized tool for AS 22 compliance.
- **Functionality**: Provides instant computation of Current & Deferred Taxes, reconciling timing differences between Book Profit and Tax Profit, and automatically generates the required journal entries.

### 13. Conveyance Reimbursement (`Conveyance_Reimbursement_Form_V2.html`)
Internal firm management and HR tool.
- **Functionality**: A secure, digital employee reimbursement claim system that handles local receipt attachment and expense aggregation, generating a structured claim report.

## 🎨 Design System & Workspace Guidelines

To maintain a standardized UI/UX across the workspace, all tools and landing pages must adhere to the following design rules:

### 1. Typography (Fonts)
- **Primary Font**: `Inter` (Sans-serif) for all main UI components.
- **Headings**: Highly emphasized. Use `text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white` for section titles.
- **Degrees/Qualifications**: Specialized styling using `font-serif italic text-slate-500 dark:text-slate-400`.
- **Body Text**: Readable contrast using `text-sm text-slate-600 dark:text-slate-300 leading-relaxed`.

### 2. Layout & Theme Structure
- **Global Layout**: A modular "T-Shape" grid structure. Primary content spans full width, while secondary content sits in equal-width multi-column grids (e.g., `grid-cols-1 lg:grid-cols-3 gap-8`).
- **Main Containers (Outer)**: Use the custom `.glass-card` class with `p-6 md:p-8` and `h-full` to create floating, frosted-glass sections.

### 3. Inner Cards Style & Color Schema
When nesting cards inside glass containers, strictly alternate between these two color schemas to create visual hierarchy:

**A. Slate Schema (Default)**
- **Container**: `bg-slate-100 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700`
- **Inner Dividers**: `border-slate-200 dark:border-slate-600`
- **Pills/Badges**: `bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300`

**B. Blue Tint Schema (Accent)**
- **Container**: `bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800`
- **Inner Dividers**: `border-blue-100 dark:border-blue-800`
- **Pills/Badges**: `bg-blue-100 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300`

---

## 💻 Technical Stack
- **Structure**: HTML5
- **Styling**: Tailwind CSS (with Dark Mode integration)
- **Interactivity**: Alpine.js
- **Exports**: `html2pdf.js` (PDF), `docx.js` (Word), `exceljs` (Excel)
- **Icons**: FontAwesome 6

## 📜 License & Access
*Access to V2 tools is restricted to authorized personnel via an internal authentication system. All rights reserved by CA. Vaibhav Khanna.*