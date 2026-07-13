# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Glasgow ECG Program** — a Next.js 14 site for the University of Glasgow Electrocardiology Section. This is a **hybrid research-group + flagship software website**, presenting both the academic research unit (over 50 years of electrocardiology research) and its primary output, the Glasgow ECG Analysis Program.

### Site Identity

The Electrocardiology Section is part of the Robertson Centre for Biostatistics within the School of Health & Wellbeing at the University of Glasgow. Based at Glasgow Royal Infirmary, the Section has been advancing computerised ECG interpretation for over 50 years under the leadership of Professor Peter Macfarlane CBE.

**Key positioning (program-first — updated 2026-07-10):**
- Lead with the Glasgow Program (a.k.a. "Uni-G") as the primary story; the research group and Professor Macfarlane's legacy are the credibility *behind* the program, not the headline
- Present the Program as mature, validated, internationally licensed software — grounded in 50+ years of research, not a startup product
- Make the licensing/integration pathway easy to find (it is the primary visitor goal); route research collaboration separately and keep it secondary but credible
- Maintain academic credibility; avoid startup buzzwords and pure B2B/SaaS marketing tone

### Design Philosophy

The maintainer has senior design engineering experience (Vercel, Linear) combined with UK academic background. The site should be:
- **Beautiful and polished** — Linear/Vercel-quality UI/UX
- **Fast and responsive** — performance-first, minimal JavaScript
- **Academically credible** — proper institutional affiliations, PubMed links, ISO certifications
- **Content-rich** — history, publications, validation studies, not just marketing copy

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint with next/core-web-vitals
```

## Architecture

### Tech Stack
- Next.js 14 with App Router
- TypeScript (strict mode)
- Tailwind CSS 3.4 with CSS variables for theming
- Radix UI primitives (Dialog, NavigationMenu, Tabs)
- Framer Motion for animations
- clsx + tailwind-merge via `cn()` utility

### Directory Structure
```
app/
  ├── page.tsx              # Home — research group overview + program preview
  ├── research/             # Electrocardiology Section history and focus
  ├── program/              # Glasgow Program technical details
  ├── publications/         # Key publications with PubMed links
  ├── training/             # ECG recording resources, electrode placement
  ├── team/                 # Team members, Professor Macfarlane profile
  ├── contact/              # Contact form and details
  └── services/
      ├── core-lab/         # ECG Core Laboratory & Clinical Trials (merged)
      └── licensing/        # Commercial licensing hub
components/
  ├── layout/               # NavBar, Footer (with UofG logo)
  ├── sections/             # Page sections (Hero, ResearchAreas, etc.)
  ├── theme/                # ThemeProvider (single UofG theme)
  ├── seo/                  # JSON-LD structured data
  └── ui/                   # Reusable components (Button, Card, etc.)
lib/
  ├── constants.ts          # Site config, navigation, all content data
  ├── themes.ts             # Single UofG Glasgow theme definition
  └── utils.ts              # cn() helper
public/
  └── images/
      └── uofg-logo.svg     # Official University of Glasgow Gaelic logo
styles/
  └── globals.css           # Tailwind layers + CSS variables
```

### Site Navigation

```
Glasgow Program   → /program (features, validation, diagnostic capabilities)
Licensing         → /services/licensing (commercial hub — promoted to top level)
Services          → (dropdown)
  ├── ECG Core Lab & Trials → /services/core-lab
  └── Training              → /training
Research          → /research (history, focus areas, certifications)
Publications      → /publications
Team              → /team
Contact           → /contact
```

Redirects (`next.config.mjs`): `/services` and `/services/clinical-trials` → `/services/core-lab` (Clinical Trials merged into the Core Lab page; the Services hub was removed).

### Color System

Single color scheme based on the official University of Glasgow brand guidelines (no theme switching):

**Primary:** University Blue `#011451`

**Secondary Light Palette** (for accents, status colors, backgrounds):
- Light purple: `#A5A1CE`
- Light pink: `#E98BAF` (used for critical/warning states)
- Light green: `#81C071` (used for success states)
- Light blue: `#4DBBC6` (accent color)
- Light yellow: `#F2D25C` (used for warning states)

**Backgrounds:** Subtle pale blue tints derived from the secondary palette
- Background: `#F8FBFC` (very pale blue)
- Background Alt: `#EEF5F6` (subtle light blue undertone)

**Accessibility:**
- White text on dark backgrounds
- University Blue text on light backgrounds

Colors defined in `lib/themes.ts` as `glasgowTheme`, applied via CSS variables in `:root` (see `styles/globals.css`). Tailwind config maps semantic color names (e.g., `bg-primary`, `text-foreground`) to these CSS variables.

### Component Patterns

- All UI components accept `className` prop and merge with `cn()`
- Barrel exports via `index.ts` in each component folder
- Use `@/` path alias for imports (maps to project root)
- SEO components generate JSON-LD for Organization and SoftwareApplication schemas
- Escape apostrophes in JSX with `&apos;` to satisfy ESLint
- Footer includes official UofG Gaelic logo (large, h-32) linking to university website

### Content Data Model

All content is centralized in `lib/constants.ts`:

```typescript
// Site identity
siteConfig        // Institution, department, address, links
navigation        // Main nav (includes "About" → footer), services dropdown, footer links

// Research group
researchGroup     // Focus areas, certifications, established date
history           // Timeline of key milestones
teamMembers       // Professor Macfarlane + team with bios

// Glasgow Program
glasgowProgram    // Intro, key features, compliance, validation studies
diagnosticCapabilities  // Categorized diagnostic statements

// Publications
keyPublications   // Selected papers with PubMed links
books             // "Comprehensive Electrocardiology" textbook
publicationStats  // 424 publications, 77 h-index, 53,757 citations (Scopus)

// Services
coreLabServices   // Core lab intro, services list, current studies
trainingResources // ECG recording guide, electrode placement videos
licensingInfo     // Contact, current licensees

// Supporting
languages         // 30+ supported languages
externalResources // Links to UofG, PubMed, AHA guidelines
```

### Publication Statistics

Based on Professor Macfarlane's Scopus profile (Author ID: 56689458300):
- **424** peer-reviewed publications
- **77** h-index
- **53,757** citations

These stats appear on the Publications page and Publications Preview section.

## Content Sources

The site content is cross-referenced against legacy UofG pages:
- https://www.gla.ac.uk/schools/healthwellbeing/research/robertsoncentreforbiostatistics/electrocardiology/
- History of Cardiology at GRI (Professor T.D.V. Lawrie origins)
- Glasgow electrode placement training videos
- Key validation publications (PubMed indexed)
- Scopus author profile for publication metrics

## Writing Guidelines

**Tone:** Academic credibility with clear communication. Not startup marketing.

**Do:**
- Say "over 50 years" instead of "since 1964"
- Say "internationally" instead of "worldwide"
- Say "research studies" instead of "clinical trials" in general intro text
- Reference specific study names, publication counts
- Include proper institutional affiliations
- Link to PubMed for publications
- Mention ISO 9001:2015 certification where relevant
- Use "the Section" or "the Electrocardiology Section" as shorthand

**Avoid:**
- Startup buzzwords ("revolutionize", "disrupt", "cutting-edge")
- Vague marketing claims without evidence
- Pure B2B sales language
- Treating the Glasgow Program as divorced from the 50+ years of research that backs it — research credibility is the foundation, not the headline
- References to Minnesota Code (not part of this program)

## Repository

GitHub: https://github.com/queries-swivel/the-glasgow-program-website
