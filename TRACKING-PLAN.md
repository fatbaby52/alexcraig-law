# Lemon Law Tracking Plan

## Analytics events (implemented in script.js, GA4 property G-Q30ECFCSV6)

| Event | Fires when | Where |
|---|---|---|
| `phone_click` | Any tel: link is tapped/clicked | Sitewide (param: `link_location` = page path) |
| `email_click` | Any mailto: link is clicked | Sitewide |
| `generate_lead` | A Netlify form is submitted past validation | Sitewide (param: `form_name` = `contact`, `lemon-law-intake`, or `lemon-law-intake-mini`) |
| `calculator_complete` | Buyback calculator produces a result | Phase 2 (reserved; wire when calculator ships) |
| Spanish page engagement | Standard GA4 page_view filtered by path prefix `/es/` | Phase 3 (no custom event needed) |

Recommended GA4 setup steps (one time, in the GA4 admin UI):
- Mark `generate_lead` and `phone_click` as key events (conversions)
- Create a comparison/segment for pages starting with `/lemon-law/` to watch the section in isolation

Netlify forms note: enable email notifications for form `lemon-law-intake` and `lemon-law-intake-mini` at https://app.netlify.com/projects/alexcraig-law/forms (Settings > Forms > Form notifications). Speed to first response is the conversion bottleneck in this practice area; for SMS alerts, add a Zapier/Twilio hook on "New form submission" later.

## Target keywords per page (for rank tracking configuration)

Primary target first; secondary targets after. Track weekly for the first 90 days, then monthly.

| Page | Target queries |
|---|---|
| /lemon-law/ | california lemon law guide; song-beverly consumer warranty act explained; california lemon law mileage offset; lemon law buyback california |
| /lemon-law/ab-1755/ | ab 1755 lemon law; california lemon law changes 2025; california lemon law 2026; new lemon law rules california |
| /lemon-law/ab-1755/pre-suit-notice/ | lemon law pre-suit notice; ab 1755 notice requirement; letter to manufacturer before lemon law lawsuit |
| /lemon-law/ab-1755/manufacturer-opt-in-list/ | lemon law manufacturer opt-in list; which manufacturers opted in ab 1755; sb 26 opt in list |
| /lemon-law/ab-1755/deadlines/ | lemon law deadline california; lemon law statute of limitations california; how long to file lemon law claim |
| /lemon-law/ab-1755/mediation/ | lemon law mediation california; mandatory mediation ab 1755; what happens at lemon law mediation |
| /lemon-law/monterey-county/ | lemon law attorney monterey county; monterey lemon law lawyer |
| /lemon-law/salinas/ | lemon law attorney salinas; salinas lemon law lawyer; abogado ley limon salinas (Phase 3 will capture this in Spanish) |
| /lemon-law/santa-cruz-county/ | lemon law attorney santa cruz; santa cruz county lemon law lawyer |
| /lemon-law/watsonville/ | lemon law attorney watsonville; watsonville lemon law lawyer |
| /lemon-law/san-benito-county/ | lemon law attorney hollister; san benito county lemon law lawyer |
| /lemon-law/gilroy/ | lemon law attorney gilroy; gilroy auto mall lemon law |
| /lemon-law/intake/ | (conversion page, not a ranking target; watch generate_lead volume) |
| /lemon-law/faq/ | california lemon law faq; does lemon law cover used cars california; lemon law leased car; how long does lemon law take |
| /lemon-law/calculator/ | lemon law calculator california; lemon law buyback calculator; mileage offset calculator |
| /lemon-law/gm/ | gm lemon law california; chevy lemon law buyback; gmc lemon law attorney |
| /lemon-law/ford/ | ford lemon law california; ford buyback california |
| /lemon-law/stellantis/ | jeep lemon law california; ram lemon law buyback; dodge chrysler lemon law |
| /lemon-law/tesla/ | tesla lemon law california; tesla buyback california |
| /lemon-law/toyota/ | toyota lemon law california; lexus lemon law |
| /lemon-law/hyundai-kia/ | hyundai lemon law california; kia lemon law buyback |
| /lemon-law/nissan/ | nissan lemon law california; nissan cvt lemon law |
| /lemon-law/tesla/battery-degradation/ | ev battery degradation lemon law; tesla range loss warranty claim |
| /lemon-law/tesla/adas-malfunctions/ | phantom braking lemon law; tesla autopilot defect claim |
| /lemon-law/hyundai-kia/charging-system-failures/ | ioniq 5 iccu failure lemon law; ev6 charging failure |
| /lemon-law/hyundai-kia/engine-defects/ | hyundai engine failure lemon law; theta 2 engine buyback |
| /lemon-law/gm/transmission-shudder/ | chevy silverado transmission shudder lemon law; gm 8 speed shudder |
| /lemon-law/stellantis/infotainment-software-faults/ | uconnect problems lemon law; jeep screen failure warranty |

Note: `calculator_complete` GA4 event is now live on /lemon-law/calculator/ (fires on each completed estimate); mark it as a key event alongside generate_lead and phone_click.

## AI traffic: indexing and monitoring

**IndexNow (push indexing for Bing / ChatGPT search / Copilot):** after every production deploy, run `python tools/indexnow.py` from the repo root. It reads sitemap.xml and pings api.indexnow.org so Bing's index (which ChatGPT search and Copilot draw from) picks up changes within hours instead of weeks. The verification key file lives in the site root; do not delete the `.txt` key file or `.indexnow-key`.

**Monitoring AI referrals in GA4:** AI assistants that send visitors show up as ordinary referral traffic. Monthly, open Reports > Acquisition > Traffic acquisition and filter "Session source" for: `chatgpt.com`, `perplexity.ai`, `copilot.microsoft.com`, `gemini.google.com`, `claude.ai`, `you.com`. Watch two things: (1) which of these grow over time, and (2) which landing pages they hit (Engagement > Landing page, same source filter). AI-referred visitors typically arrive deep on a specific answer page, so a defect page or FAQ receiving chatgpt.com referrals is direct evidence the citation strategy is working. Note: some AI tools send no referrer at all, so this undercounts; treat it as a floor, not a total.

## Measurement rhythm

- Weekly (5 min): GA4 > Reports > check `generate_lead` and `phone_click` counts; Netlify forms inbox zero
- Monthly: Search Console queries report filtered to /lemon-law/; note new question-phrased queries and add them as H2s during the quarterly refresh (see CONTENT-MAINTENANCE.md)
- Quarterly: rank-tracker review of the table above; retire targets that won, promote runners-up
