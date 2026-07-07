# Attorney Review Record: Lemon Law Section Launch

**Review date:** July 6, 2026
**Reviewed by:** Alex Craig (page-by-page approval via interactive review session)
**Scope:** All 28 pages under /lemon-law/, reviewed in 7 batches before first publication
**Published:** July 6, 2026, git commit `851303f`, Netlify deploy `6a4c8db55ef8fd25db4a5dc7`, live at https://alexcraig.law/lemon-law/
**Effect of approval:** the visible [ATTORNEY REVIEW REQUIRED] banner and all inline [ATTORNEY JUDGMENT] / [VERIFY BEFORE PUBLISH] / [DCA LIST VERIFIED] markers were removed from each page upon approval. This file is the durable record of what was approved and what those markers flagged.

Use this file to re-verify: each entry lists the load-bearing legal and factual claims that were approved as written on the review date. If a statute, the DCA opt-in list, or case law changes, re-check the affected claims (see CONTENT-MAINTENANCE.md for triggers and cadence).

---

## Standing facts approved for use across all pages

- Song-Beverly Consumer Warranty Act cited as Civ. Code §§ 1790-1795.8; refund-or-replace remedy at buyer's choice under § 1793.2(d)(2)
- "Reasonable number" of repair attempts has no fixed count; two attempts can suffice for a serious safety defect
- Tanner presumption (§ 1793.22): within 18 months / 18,000 miles; 2+ attempts for a defect likely to cause death or serious bodily injury; 4+ attempts for the same nonconformity; out of service for a cumulative total of more than 30 calendar days. Presumption shifts the burden; not a prerequisite to a claim.
- Mileage offset formula: (miles at first repair attempt ÷ 120,000) × price paid, § 1793.2(d)(2)(C)
- Civil penalty up to 2x actual damages for willful violations (§ 1794(c)); "willful does not require malice"
- Fee-shifting: manufacturer pays a prevailing consumer's reasonable attorney fees and costs (§ 1794(d))
- AB 1755 (Kalra, Stats. 2024, ch. 938), signed Sept 29, 2024; procedures at CCP §§ 871.20-871.30; phased in during 2025
- SB 26 (signed April 2, 2025): opt-in framework; DCA Arbitration Certification Program publishes the list; listing within 2 business days of a verified election; annual publication by December 15; an election binds the manufacturer for five years
- Opted-in track: suit within 1 year after express warranty expiration, capped at 6 years from original delivery; 30-day pre-suit notice required to preserve civil penalties; mandatory mediation within 150 days of the answer with discovery stay; standardized Song-Beverly release
- *Rodriguez v. FCA US, LLC* (Cal. 2024): used vehicle with only the remaining balance of the original factory warranty is not a "new motor vehicle"; dealer/CPO express-warranty coverage and other breach-of-warranty remedies survive
- Out-of-state purchases/leases generally excluded from the "new motor vehicle" definition for purchases after January 1, 2025 (AB 1755)

## DCA opt-in list verification (basis for all opt-in statements)

- **Source:** https://www.dca.ca.gov/acp/accepted_manufacturers.shtml (JSON API: https://www.dca.ca.gov/acp/webapplications/api/getSB26Accepted), pulled July 6, 2026
- **59 manufacturers on the list.** Major automakers with election dates: General Motors LLC (2025-04-23); Ford Motor Company (2025-04-25); FCA US LLC, i.e. Jeep/Ram/Dodge/Chrysler (2025-04-25); Hyundai Motor America (2025-04-28); Genesis Motor America (2025-04-28); Nissan North America (2025-04-28); Infiniti USA (2025-04-28); Kia America, Inc. (2025-05-01). Also on: Mercedes-Benz, Subaru, Mitsubishi, Isuzu, Jaguar Land Rover, Maserati, Lotus, VinFast, Ineos, Polaris, Indian Motorcycle, and dozens of RV manufacturers.
- **Not on the list as of July 6, 2026:** Toyota, Lexus, Honda, Tesla (older Song-Beverly procedural rules apply to them).
- All on-page statements carry "as of July 6, 2026" qualifiers. Re-verify the list on any content refresh; a manufacturer can elect in at any time and appears within 2 business days.

---

## Batch 1: Core legal pages

**1. /lemon-law/ (pillar)** — APPROVED as written.
Claims: all standing facts above, plus the worked offset example ($42,000 price, 9,000 mi at first repair = $3,150 offset) and the buyback components list (down payment, payments, loan payoff, official fees, incidentals, minus offset).

**2. /lemon-law/ab-1755/ (hub)** — APPROVED as written.
Claims: bill history and CCP cites; the "what older guides say vs. what the law requires now" comparison table (4-year framework vs. 1yr/6yr; no-notice vs. 30-day notice; direct discovery vs. mediation + stay; open releases vs. standardized release; uniform rules vs. opt-in split); named opted-in and absent manufacturers per the DCA verification above.

**3. /lemon-law/ab-1755/pre-suit-notice/** — APPROVED as written.
Claims: CCP § 871.24; notice at least 30 days pre-filing to preserve civil penalties; required contents (name, VIN, problem summary, repurchase/replacement request); delivery by certified mail or email per the owner's manual/warranty booklet; manufacturer 30 days to respond, 60 days to complete an agreed remedy; defective notice forfeits penalties only, buyback claim survives.

**4. /lemon-law/ab-1755/deadlines/** — APPROVED as written.
Claims: 1-year/6-year rule for opted-in manufacturers; pre-AB 1755 framework characterized as "generally four years"; worked examples (warranty expires 6/1/2026 → file by 6/1/2027; delivery 1/15/2021 with live powertrain warranty → capped 1/15/2027; non-opted-in → older rules); act 60-90 days before any deadline.

## Batch 2: Process pages and tools

**5. /lemon-law/ab-1755/mediation/** — APPROVED as written, **including the CCP § 871.26 cite** for the mediation provision (drafter had flagged the specific section number; approved without softening).
Claims: schedule within 90 days of answer, complete within 150; discovery stay with limited early exchange (consumer: repair orders + purchase contract; manufacturer: warranty claim records; pre-mediation vehicle inspection); stay lifts if mediation fails; standardized release only.

**6. /lemon-law/ab-1755/manufacturer-opt-in-list/** — APPROVED with the [DCA LIST VERIFIED] marker removed (verified and deployed same day).
Claims: the full DCA verification block above; list mechanics (2-business-day listing, Dec 15 publication, 5-year election, check the warrantor entity, screenshot the list as of the filing date).

**7. /lemon-law/calculator/** — APPROVED as written.
Compliance design: conditional "if the vehicle qualifies" framing; visible arithmetic; results labeled estimate-not-case-value; civil penalties and incidental damages excluded and said so; client-side only (no data transmitted); no outcome prediction. Legal claims limited to the § 1793.2(d)(2)(C) formula and the § 1794(c) up-to-2x mention.

**8. /lemon-law/faq/** — ALL 20 Q&As APPROVED; banner and all five inline flags removed from visible text and FAQPage schema (mirror re-verified 20/20 after removal). The five formerly-flagged answers, approved as written:
- Q14 opt-in list: states the verified list (see DCA block above)
- Q15 arbitration: "generally no, you may go to court, but a state-certified arbitration program can be a prerequisite to using the Tanner presumption in court" (§ 1793.22(c) framing)
- Q16 cash-and-keep: "sometimes; manufacturers do resolve claims this way; whether it beats a buyback depends on the numbers and the defect"
- Q17 out-of-state: post-1/1/2025 exclusion, plus the hedged Armed Forces sentence ("California law has separately protected certain members of the Armed Forces stationed in or residents of California who bought elsewhere; ask at a consultation")
- Q19 motorcycles/RVs: motorcycles excluded from the refund-or-replace remedy; motorhomes covered as to chassis, chassis cab, drivetrain; other Song-Beverly consumer-goods protections may still apply to a warrantied motorcycle
Also note: two edits made during pre-approval review and included in the approval: Q10 now opens "Yes, if it is safe to drive" with a do-not-drive-dangerous-defects caveat; Q17 gained the Armed Forces sentence.

## Batch 3: Manufacturer pages (GM, Ford, Stellantis, Tesla)

**9. /lemon-law/gm/** — APPROVED. Claims: 8L45/8L90 eight-speed shudder in 2015-2019 vehicles described via GM TSBs and class litigation (certified 2023, decertified on appeal 2025); Chevy Bolt 2017-2022 battery fire recalls with pack replacement remedy (NHTSA-verified); GM opt-in 2025-04-23; new-track buyback procedure.

**10. /lemon-law/ford/** — APPROVED. Claims: 10R80 harsh shifting with quoted TSB language, multi-court class litigation, no global settlement; PowerShift DPS6 history via its concluded nationwide class settlement; SYNC freezes as "commonly reported"; Ford opt-in 2025-04-25 (covers Lincoln).

**11. /lemon-law/stellantis/** — APPROVED. Claims: Jeep death wobble via the public class settlement (8-yr/90k damper coverage); Uconnect failures; 2021 Ram eTorque stall recall (~131,700 units); Wrangler 4xe loss-of-propulsion recall; FCA US opt-in 2025-04-25 covering all four brands.

**12. /lemon-law/tesla/** — APPROVED, **including the arbitration section**: Tesla's Motor Vehicle Order Agreement contains an arbitration provision with a 30-day opt-out, and California courts have compelled arbitration under it; presented as document-by-document (bring your agreement to a consultation). Other claims: NHTSA phantom-braking investigation (~695k Model 3/Y, opened 2022, closed 2026); Dec 2023 ~2M-vehicle Autopilot OTA recall; range loss/build quality as "commonly reported"; direct-sales service model and how service-center visits count as repair attempts; **Tesla not on the DCA list** → older rules, with can-change caution.

## Batch 4: Manufacturer pages (Toyota, Hyundai/Kia, Nissan) + intake

**13. /lemon-law/toyota/** — APPROVED. Claims: V35A engine machining-debris recall (~100k 2022-2023 Tundra/LX, engine replacement remedy); ~591k infotainment display recall; "fewer defects does not mean no lemons" framing; Toyota and Honda not on the DCA list → older rules.

**14. /lemon-law/hyundai-kia/** — APPROVED. Claims: ICCU charging failures (Ioniq 5/6, EV6, Genesis EVs; 2024 recall later expanded; reported class action alleging replacement-unit failures; warranty extension); Theta II engine failures (knocking/stalling/seizure/fires; ~$1.3B class settlement; KSDS software; 15-yr/150k short-block coverage); statement that an extended warranty or settlement remedy does not erase a Song-Beverly claim; all three entities opted in individually (dates above).

**15. /lemon-law/nissan/** — APPROVED. Claims: CVT complaint pattern across Altima/Sentra/Versa/Juke/Rogue/Murano/Maxima; ~$277.7M Murano/Maxima class settlement; 84-mo/84k warranty extensions; the "does a class settlement block my claim" question answered as release-specific and vehicle-specific (not resolved on-page); Nissan North America and Infiniti USA each opted in 2025-04-28.

**16. /lemon-law/intake/** — APPROVED, including the operational claim "You will get a direct response from Alex Craig, the attorney, not a call center," and the confirmation disclaimers (no attorney-client relationship; no deadline protected until written engagement).

## Batch 5: EV/engine defect deep-dives

**17. /lemon-law/tesla/battery-degradation/** — APPROVED with three flags stripped; the hedged text stands on its own:
- Tesla battery warranty described as 8 years, 70% retention floor, model-dependent mileage caps, hedged "varies by model" (flag had said: verify exact caps/percentages per model year before citing to a client or in a demand — still do this per-client)
- OTA-update-as-repair-attempt presented as an open question, both framings given (house position still to be chosen for demand letters)
- Above-threshold degradation vs. substantial impairment presented as fact-dependent, not answered

**18. /lemon-law/tesla/adas-malfunctions/** — APPROVED; OTA open-question framing (same as above); phantom braking as safety defect eligible for the 2-attempt Tanner threshold; NHTSA investigation history as on the Tesla hub.

**19. /lemon-law/hyundai-kia/charging-system-failures/** — APPROVED; no recall campaign numbers asserted in text; population figures hedged as "reporting as of mid-2026"; recall-fix-didn't-cure-it can still be a lemon claim.

**20. /lemon-law/hyundai-kia/engine-defects/** — APPROVED **with one deletion**: the unverified sentence "Similar complaint patterns have been reported in other Hyundai and Kia engine families as well" was CUT (with its verify flag) rather than published. Theta II content published on verified ground.

## Batch 6: Last defect pages + first geo pages

**21. /lemon-law/gm/transmission-shudder/** — APPROVED **with one alignment edit**: class-litigation status updated from "certified in 2023" to "certified in 2023 and later decertified on appeal in 2025," matching the verified GM hub. Other claims: TSB 18-NA-355 fluid-exchange remedy (Mobil 1 LV ATF HP), hygroscopic-fluid theory, repeated flushes count as repair attempts, "normal characteristic of the vehicle" is a defense argument not a fact.

**22. /lemon-law/stellantis/infotainment-software-faults/** — APPROVED; backup-camera blackout framed as safety defect (2-attempt threshold); OTA question open (consistent house treatment); no campaign numbers asserted (2024 ~1.03M radio-software recall and Wagoneer RVCM recall described without campaign IDs).

**23. /lemon-law/monterey-county/** — APPROVED. Venue: civil at Monterey courthouse, 1200 Aguajito Rd; Salinas courthouse (240 Church St) primarily criminal/juvenile (verified via monterey.courts.ca.gov). Local-attorney-vs-statewide-volume-firm section critiques the volume model generically; no firms named.

**24. /lemon-law/salinas/** — APPROVED **with one deletion**: the "¿Ofrecen ayuda en español?" section (promising written Spanish responses) was CUT per the decision that Spanish intake capacity does not yet exist. Approved claims: firm based in Salinas (8769 Dyer Rd.); worked offset math on a $78,000 HD diesel ($5,200 at 8,000 mi vs $19,500 at 30,000 mi; arithmetic verified); business-vehicle coverage limits under § 1793.22(e)(2); Salinas Auto Mall purchases pursued against the manufacturer.

## Batch 7: Remaining geo pages

**25. /lemon-law/santa-cruz-county/** — APPROVED. Venue: civil at 701 Ocean St, Santa Cruz; Watsonville branch handles small claims/family/traffic (verified via santacruz.courts.ca.gov). EV angle with OTA open framing; Highway 17 commuter statement conservative ("thousands") vs reported 17,000+.

**26. /lemon-law/watsonville/** — APPROVED **with the Spanish-help section CUT** (same decision as Salinas; the Spanish CTA tagline was also removed). Approved claims: 30-days-out-of-service presumption framed around berry-season downtime; split repair histories across Salinas/Capitola dealer corridors count toward the same claim.

**27. /lemon-law/san-benito-county/** — APPROVED. Venue: 450 Fourth St, Hollister (verified via sanbenito.courts.ca.gov); Highway 25 commuter mileage accelerates the 18,000-mile presumption window and mileage-based warranty expiration (AB 1755 deadline interplay); out-of-county repair visits count.

**28. /lemon-law/gilroy/** — APPROVED. Auto Mall purchases: defendant is the manufacturer, not the dealer; Santa Clara County civil venue at the downtown San Jose courthouse (verified via santaclara.courts.ca.gov); Salinas attorney serving Gilroy addressed directly.

---

## Open items deliberately NOT resolved on the site (for future judgment)

1. **OTA-as-repair-attempt house position.** All pages present it as an open question. Choose a consistent position before asserting it in any demand letter or pleading.
2. **Tesla battery warranty specifics.** Confirm exact retention percentage and mileage cap for the specific model/year before citing in any client matter.
3. **Class settlement releases (Nissan CVT, Theta II).** Whether a given client's claim is affected is release-specific and vehicle-specific; check per client.
4. **Armed Forces out-of-state exception (FAQ Q17).** Stated in hedged form; confirm current statutory status when it first matters in a real intake.
5. **Spanish intake capacity.** Spanish-help promises removed sitewide; restore (and build Phase 3, /es/ley-limon/) only when written or spoken Spanish response capacity actually exists.

## Re-verification quick links

- Statutes: https://leginfo.legislature.ca.gov (Civ. Code 1790-1795.8; CCP 871.20-871.30)
- DCA opt-in list: https://www.dca.ca.gov/acp/accepted_manufacturers.shtml (JSON: /acp/webapplications/api/getSB26Accepted)
- Refresh cadence and update triggers: CONTENT-MAINTENANCE.md (quarterly; next review first week of October 2026)

---

## Amendments: July 6, 2026 (post-launch outside legal review)

A second attorney review of this record produced precision corrections, applied to the live pages the same day. Where an entry above conflicts with this list, this list controls. Overall reviewer verdict: nothing fatal; "approved subject to maintenance edits," now applied.

**Statutory precision (sitewide):**
1. Tanner 30-day prong reworded everywhere from "30+ / more than 30 cumulative days" to "a cumulative total of more than 30 calendar days" (20 files).
2. Pillar Tanner section now notes that some presumption requirements (e.g., direct manufacturer notice) apply only if clearly disclosed in the warranty/owner's manual.

**Pre-suit notice page (largest cleanup):**
3. Delivery methods corrected: email to the address the manufacturer prominently displays on its website for this purpose, OR certified/registered mail, return receipt requested, to the manual/warranty-booklet address. (Old phrasing "certified mail or email per the owner's manual" was imprecise.)
4. Operative date added: notice provisions operative July 1, 2025 (not April 1).
5. "Defective notice forfeits penalties" softened everywhere (pillar, notice page, FAQ Q13 text + schema): filing without a compliant notice generally means no civil penalties on the opted-in track, but the statute says minor deviations do not disqualify the consumer, and suit may proceed without notice where penalties are not sought.
6. Added possession/resale trap: penalties tied to continued ownership/possession; selling after notice carries additional notice obligations.

**Other statutory mechanics:**
7. Deadlines page: new tolling section per CCP sec. 871.21 (out-of-service repair time, Tanner-certified arbitration, up to 60 days after pre-suit notice).
8. Mediation page: "pre-mediation vehicle inspection" reframed as common practice arranged by agreement, not a statutory AB 1755 step (not found in sec. 871.26).
9. AB 1755 hub: added that an election is not a permanent blanket status; procedures can depend on the manufacturer's status for the period covering the vehicle's sale.
10. Calculator: now states it estimates the BASE statutory mileage offset only; CCP sec. 871.27 restitution adjustments for opted-in manufacturers (third-party add-ons, negative equity, manufacturer rebates, lease residual/extension rules) are called out in the disclaimer and the "what it leaves out" section.

**Manufacturer-page factual refreshes:**
11. GM (hub + shudder page): class litigation timing corrected to "certified in 2024, decertified by the Sixth Circuit in June 2025" (was "certified 2023").
12. Toyota: V35A recall updated and verified against NHTSA reporting: May 2024 recall 24V-381 (~102k, 2022-2023 Tundra/LX600, engine replacement) expanded November 2025 by 25V-767 (~127k more; 2022-2024 Tundra, 2024 LX600, 2024 GX550; inspect-then-replace remedy). Display/rear-camera recall follow-ons noted.
13. Tesla hub: NHTSA phantom-braking closure (July 2026) now framed as ending the federal inquiry without deciding whether any particular vehicle is defective (ADAS page already had this framing).
14. Stellantis infotainment: recall population figures qualified as U.S. figures.

**Venue and intake:**
15. Monterey County: Salinas courthouse description softened (handles broad court business including filings; civil cases generally heard at the Monterey courthouse; confirm current assignments when filing).
16. Intake form: days-out-of-service bucket relabeled "More than 30 days" to match the statutory threshold.

**Reviewer items noted but deliberately not acted on:**
- Ford page: no change needed; "commonly reported" hedges stay.
- Stellantis page: adding Jeep 4xe fire/park-outside recall content flagged as an optional future enhancement for the quarterly refresh.
- Intake "direct response from Alex" promise: fine while operationally true; revisit if intake volume changes.
