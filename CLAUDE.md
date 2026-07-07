# Law Office of Alex Craig Website - Project Notes

## Overview
Static website for the Law Office of Alex Craig, a law firm serving California's Central Coast and Central Valley. Two SEO practice verticals: employment law (since May 2026) and lemon law (since July 2026).

## Firm Facts (exact NAP strings; use identically everywhere)
- Name: Law Office of Alex Craig
- Attorney: Alex Craig, California State Bar #268949
- Address: 8769 Dyer Rd., Salinas, CA 93907
- Phone: 831-262-2847
- Email: Alex@AlexCraig.Law
- Bio facts allowed: JD McGeorge School of Law (tax concentration), BA Economics Pomona College, prior in-house counsel experience. Never invent case results, testimonials, or lemon-law-specific experience claims.
(NAP updated sitewide July 2026 from the old Alex Craig Law / Prunedale / (209) 470-6385 identity. If any directory or page still shows the old NAP, fix it.)

## Tech Stack
- Static HTML/CSS/JS
- Hosted on Netlify
- Domain: alexcraig.law (DNS managed by Netlify)
- Forms: Netlify Forms

## Important URLs
| Resource | URL |
|----------|-----|
| Live site | https://alexcraig.law |
| Netlify dashboard | https://app.netlify.com/projects/alexcraig-law |
| GitHub repo | https://github.com/fatbaby52/alexcraig-law |
| Form submissions | https://app.netlify.com/projects/alexcraig-law/forms |
| DNS management | https://app.netlify.com/projects/alexcraig-law/domain-management |

## Deployment
**IMPORTANT:** Limit deploys - user has finite Netlify build minutes across 5 projects. Batch changes and only deploy when explicitly asked.

From this folder, run:
```bash
netlify deploy --prod --dir=.
```

Or push to GitHub (master branch) - though automatic deploys are not configured yet.

## Email
Google Workspace email is configured. MX records are in Netlify DNS.

## SEO Status (as of Jan 2025)
**Completed:**
- Meta descriptions and keywords on all pages
- Open Graph and Twitter Card tags
- Schema.org structured data (Attorney type)
- robots.txt
- sitemap.xml
- Google Analytics (G-Q30ECFCSV6)
- Image optimization

**Completed June 2026:**
- FAQPage + BreadcrumbList schema on employment-law page (mirrors the visible FAQ — keep in sync when editing FAQs)
- llms.txt (LLM-readable firm summary; employment-law focus, no client-base language per the May 2026 reframe)
- robots.txt explicitly allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.)
- /CLAUDE.md blocked from being served via _redirects 404 rule

**Completed July 2026 (Lemon Law Phase 1):**
- /lemon-law/ content cluster: pillar, AB 1755 hub, 4 cluster pages, 6 geo pages, intake page
- Every lemon law page: Article or LegalService schema, BreadcrumbList, byline, visible "Last updated" date, statute deep links to leginfo.legislature.ca.gov, [ATTORNEY REVIEW REQUIRED] banner (publish gate; Alex removes it)
- GA4 events in script.js: phone_click, email_click, generate_lead (removed the stale injected FAQ schema that still described immigration/criminal defense)
- Netlify forms: lemon-law-intake (full, on /lemon-law/intake/), lemon-law-intake-mini (compact, embedded on content pages)
- See CONTENT-MAINTENANCE.md (refresh cadence + update triggers), TRACKING-PLAN.md (events + target keywords), LOCAL-SEO-CHECKLIST.md (GBP/citations for Alex)

**Lemon law content rules (apply to any edit under /lemon-law/):**
- No em-dashes in content. Question-phrased H2s; first sentence under each H2 is a self-contained direct answer; "The short version" box near the top
- Statutory facts carry "as of [date]" qualifiers; manufacturer opt-in status must be verified against the DCA's published list (https://www.dca.ca.gov/acp/accepted_manufacturers.shtml; JSON at /acp/webapplications/api/getSB26Accepted) before publish, never stated as permanent. Verified July 6, 2026: 59 manufacturers in, incl. GM, Ford, FCA US/Stellantis, Hyundai, Kia, Genesis, Nissan, Infiniti; Toyota/Lexus, Honda, Tesla not on the list.
- Nothing publishes with the [ATTORNEY REVIEW REQUIRED] banner still present; update visible dates + Article dateModified + sitemap lastmod only on material changes
- No outcome guarantees/testimonials/invented results (Cal. Rules of Prof. Conduct 7.1-7.3); ATTORNEY ADVERTISING footer disclaimer stays on all lemon law pages

**Pending:**
- [ ] Deploy lemon law Phase 1 after Alex's attorney review (banners removed)
- [ ] Netlify form notifications for the two lemon-law forms (dashboard > Forms)
- [ ] Google Search Console verification and sitemap submission
- [ ] Google Business Profile setup (see LOCAL-SEO-CHECKLIST.md)
- [x] Lemon law Phase 2 (built July 2026, same review gate): 7 manufacturer pages (/lemon-law/gm|ford|stellantis|tesla|toyota|hyundai-kia|nissan/), 6 defect deep-dives (EV battery, ADAS, EV charging, engine, transmission shudder, infotainment), client-side buyback calculator at /lemon-law/calculator/ (conservative compliance framing: estimate range, conditional language, excludes penalties; calculator_complete GA event), FAQ at /lemon-law/faq/ with FAQPage schema mirroring visible text
- [ ] Lemon law Phase 3 (deferred until Spanish intake capacity exists): /es/ley-limon/ native-Spanish pillar/hub/Salinas/FAQ with hreflang pairing

## File Structure
```
├── index.html              # Homepage
├── 404.html                # Custom 404 error page
├── practice-areas/
│   ├── employment-law.html
│   ├── estate-planning.html
│   ├── personal-injury.html
│   ├── immigration.html        # delisted (not linked)
│   └── criminal-defense.html   # delisted (not linked)
├── lemon-law/              # Lemon law SEO cluster (all pages use /dir/index.html for pretty URLs)
│   ├── index.html          # Pillar: California Lemon Law Guide
│   ├── ab-1755/            # Hub: 2025 procedural changes
│   │   ├── index.html
│   │   ├── pre-suit-notice/index.html
│   │   ├── manufacturer-opt-in-list/index.html
│   │   ├── deadlines/index.html
│   │   └── mediation/index.html
│   ├── monterey-county/ salinas/ santa-cruz-county/ watsonville/ san-benito-county/ gilroy/   # geo pages
│   └── intake/index.html   # Qualification form (Netlify form: lemon-law-intake)
├── privacy-policy.html
├── thank-you.html          # Form confirmation (includes no-attorney-client-relationship notice)
├── styles.css              # Includes lemon law components (review-banner, article-meta, comparison-table, mini-intake)
├── script.js               # Menu, validation, GA4 events (phone_click, email_click, generate_lead)
├── sitemap.xml
├── robots.txt
├── llms.txt
├── CONTENT-MAINTENANCE.md  # Refresh cadence + update triggers (ranking strategy)
├── TRACKING-PLAN.md        # GA4 events + target keywords per page
├── LOCAL-SEO-CHECKLIST.md  # GBP, citations, reviews (for Alex)
└── Various favicon/image files
```

## Accessibility (March 2025 Audit)
**Completed:**
- Skip navigation link on all pages
- ARIA expanded states on mobile menu
- Focus trapping in mobile menu
- :focus-visible styles for keyboard navigation
- Reduced motion support (@prefers-reduced-motion)
- Inline form validation (replaced alert() dialogs)
- <main> landmark on all pages
- Image lazy loading and explicit dimensions
- Increased mobile touch targets (44px minimum)
- Custom 404 page

## Netlify Configuration
- Site ID: c4e4317e-4a36-49a3-8278-a3f774db3f37
- DNS Zone ID: 6975d2dd6178e3e9a5431756
- Forms: Enabled (contact form)
- Pretty URLs: Enabled

## Contact
- Phone: 831-262-2847
- Email: Alex@AlexCraig.Law
- Office: 8769 Dyer Rd., Salinas, CA 93907
