# Alex Craig Law Website - Project Notes

## Overview
Static website for Alex Craig Law, a law firm serving California's Central Coast and Central Valley.

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

**Pending:**
- [ ] Google Search Console verification and sitemap submission
- [ ] Google Business Profile setup
- [ ] Consider adding FAQ schema to practice area pages
- [ ] Consider location-specific landing pages for better local SEO

## File Structure
```
├── index.html              # Homepage
├── 404.html                # Custom 404 error page
├── practice-areas/
│   ├── estate-planning.html
│   ├── immigration.html
│   ├── criminal-defense.html
│   └── personal-injury.html
├── privacy-policy.html
├── thank-you.html          # Form submission confirmation
├── styles.css
├── script.js
├── sitemap.xml
├── robots.txt
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
- Phone: (209) 470-6385
- Location: Prunedale, California
