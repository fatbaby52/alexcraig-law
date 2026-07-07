# Lemon Law Content Maintenance System

The refresh cadence is a ranking strategy, not housekeeping. AI answer engines and Google both favor pages with recent, real updates, and the top-cited competitor pages in this niche show same-day "last updated" dates. This file documents how to keep the lemon law section current.

## The two dates on every page

Every lemon law page displays, in the `article-meta` bar near the top:

- **Legally reviewed:** the date Alex last reviewed the page's legal statements against the statutes and the DCA list.
- **Last updated:** the date the page content last materially changed.

Each page also carries these in schema (`datePublished` / `dateModified` in the `Article` JSON-LD block, or the sitemap `lastmod` for non-article pages).

**Rule: update the visible date and `dateModified` ONLY when content actually changes.** Bumping dates without touching content is a manipulation signal and will eventually hurt. A "material touch" means fixing a statement, adding a section, refreshing an "as of" qualifier with re-verified facts, or updating an example. Fixing a typo does not count.

## How to update a page's dates (3 places)

1. In the page HTML, find the `article-meta` div and update `Legally reviewed:` and/or `Last updated:`.
2. In the same file, find the `Article` JSON-LD block and update `"dateModified"`.
3. In `sitemap.xml`, update that URL's `<lastmod>`.

## Quarterly refresh checklist (every page, at least every 3 months)

For each page under `/lemon-law/`:

- [ ] Re-verify every "as of [date]" statement and refresh the date after confirming it is still true
- [ ] Check the DCA opt-in list (https://www.dca.ca.gov/acp/accepted_manufacturers.shtml is the published list; https://www.dca.ca.gov/acp/new_lemon_law.shtml is the info page) and confirm any manufacturer status statements
- [ ] Click every statute link (leginfo.legislature.ca.gov) and confirm the section text still says what the page claims
- [ ] Confirm internal links resolve (no orphaned or renamed pages)
- [ ] Look for one substantive improvement: a new FAQ-style H2 answering a question clients actually asked that quarter, a refreshed example, a clearer sentence
- [ ] Update the visible dates and `dateModified` per the rule above
- [ ] Confirm NAP strings are exact: Law Office of Alex Craig / 8769 Dyer Rd., Salinas, CA 93907 / 831-262-2847 / Alex@AlexCraig.Law

Suggested schedule: first week of January, April, July, October. Calendar reminder recommended.

## Immediate update triggers (do not wait for the quarter)

Update affected pages within days when any of these happens:

1. **DCA opt-in list changes.** A manufacturer joins or drops off the list. Affects: `/lemon-law/ab-1755/manufacturer-opt-in-list/` first, then the AB 1755 hub, pillar, and any manufacturer page (Phase 2). The ACP republishes the list by December 15 each year; check it that week every year, and after any industry news about a manufacturer's election.
2. **Statutory amendments.** Any bill amending Civ. Code §§ 1790-1795.8 or CCP §§ 871.20-871.30. Watch the legislative session (bills signed September/October, effective January 1). Affects: potentially every page.
3. **Significant appellate decisions.** Published California Court of Appeal or Supreme Court decisions interpreting Song-Beverly or the AB 1755 procedures (the *Rodriguez v. FCA* used-car rule is the model: one case changed the answer to a top FAQ). Affects: pillar, FAQ, and whichever cluster page covers the issue.
4. **DCA procedural changes.** Changes to the opt-in webform, the standardized release template, or ACP guidance.

## Attorney review workflow (publish gate)

- Every draft page carries a visible yellow `[ATTORNEY REVIEW REQUIRED]` banner at the top of the `<body>`.
- Nothing deploys to production until Alex has verified the page's legal statements and **removed the banner div** (and the matching HTML comment above it).
- Pages with a `[VERIFY AGAINST CURRENT DCA LIST BEFORE PUBLISH]` or `[VERIFY BEFORE PUBLISH: ...]` inline marker need that specific fact checked and the marker removed before publish.
- Unsettled legal questions are flagged in drafts rather than answered; Alex resolves them.

## What to watch (monitoring sources)

- DCA ACP published opt-in list: https://www.dca.ca.gov/acp/accepted_manufacturers.shtml (the table loads from the JSON endpoint https://www.dca.ca.gov/acp/webapplications/api/getSB26Accepted, which is handy for a quick diff; 59 manufacturers as of July 6, 2026)
- DCA ACP lemon law info page: https://www.dca.ca.gov/acp/new_lemon_law.shtml
- Leginfo bill search for "Song-Beverly" each session: https://leginfo.legislature.ca.gov
- California Courts published opinions: https://www.courts.ca.gov/opinions.htm (search Song-Beverly)
- Quarterly: search "California lemon law" and note whether competitors have updated; our advantage is being current.

## Deploy note

Netlify build minutes are limited. Batch content refreshes and deploy once per batch (`netlify deploy --prod --dir=.` from the repo root), not per page.
