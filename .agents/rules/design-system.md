---
trigger: always_on
---

DESIGN SYSTEM & UI GUIDELINES

When generating or editing UI components in this workspace, you MUST strictly adhere to the following design system:

1. TYPOGRAPHY:
- Primary Font: Use `Inter` (sans-serif) for all main UI components.
- Headings: Use `text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white`.
- Degrees/Subtitles: Use `font-serif italic text-slate-500 dark:text-slate-400`.
- Body Text: Use `text-sm text-slate-600 dark:text-slate-300 leading-relaxed`.

2. LAYOUT & CONTAINERS:
- Global Layout: Default to a modular grid structure (e.g., `grid-cols-1 lg:grid-cols-3 gap-8`).
- Main Containers (Outer): Wrap major sections in the custom `.glass-card` class combined with `p-6 md:p-8 h-full`.

3. INNER CARDS & COLOR SCHEMA:
When nesting cards inside glass containers, strictly alternate between these two color schemas to create visual hierarchy. DO NOT invent new color schemes.

Schema A (Slate / Default):
- Container: `bg-slate-100 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700`
- Dividers: `border-slate-200 dark:border-slate-600`
- Pills/Badges: `bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300`

Schema B (Blue Tint / Accent):
- Container: `bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800`
- Dividers: `border-blue-100 dark:border-blue-800`
- Pills/Badges: `bg-blue-100 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300`