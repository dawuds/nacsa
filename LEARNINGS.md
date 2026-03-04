# LEARNINGS.md — NACSA (Cyber Security Act 2024, Act 854)

## Summary

A GRC audit of this repo found **32 findings** across 35 files — the highest count of the three compliance repos. The most critical issues were fabricated gazette numbers, a fabricated 11th NCII sector, systematic section number offsets, and 21 files with false status labels claiming AI-constructed content was "in-force" or "published."

**Key metrics:** 7 fix commits, 35 files modified, 8 of 10 critical findings fixed correctly, 2 regressions introduced (oscillation, incomplete propagation).

---

## Repo-Specific Lessons

### 1. Fabricated Gazette Numbers — 40+ Instances

P.U.(A) gazette numbers were invented: 291-294/2024 instead of the real 219-222/2024. These followed the correct format (P.U.(A) xxx/2024) and fell within a plausible numbering range, making them pass casual review. The same pattern appeared in RMiT clause references (10.58-10.63, nonexistent) and NIST CSF subcategories (PR.AC-01, doesn't exist in CSF 2.0 — correct: PR.AA-01).

**Lesson:** Every gazette reference, framework mapping code, and external identifier must be verified against the official source. Format-plausible fabrications are the hardest to detect.

### 2. Fabricated 11th NCII Sector — "Education"

The AI invented an 11th NCII sector called "Education." Act 854's Schedule lists exactly 10 sectors. The fabricated sector had a plausible name, realistic description, and consistent JSON structure — making it indistinguishable from real sectors without checking the source Act.

**Lesson:** When the authoritative source defines a closed set (e.g., "10 sectors in the Schedule"), validate that the data contains exactly that count. An off-by-one in a closed enumeration is a strong signal of fabrication.

### 3. Systematic Section Offset — s23 vs s26 (28 Occurrences)

All 11 Codes of Practice cited `s23` for incident notification obligations. The correct section is `s26` — a consistent +3 offset across 28 occurrences. This suggests the AI memorized a wrong section number from training data and applied it uniformly.

**Lesson:** When the same section reference appears in many files, verify it once against the Act and then do a repo-wide check. A systematic offset is a single root cause, not 28 independent errors.

### 4. False Status Labels — 21 Instances

10 directives were marked `"status": "in-force"` when they were actually AI-constructed indicative content that was never gazetted. The Banking CoP was marked `"status": "published"` while its own `sourceType` field said `"constructed-indicative"`. A compliance practitioner relying on these labels would treat AI speculation as binding law.

**Lesson:** Add a validation rule: if `sourceType` contains "constructed" or "indicative," then `status` must not be "in-force" or "published." These contradictions are mechanically detectable.

### 5. Internal Contradiction — RM5K vs RM10K Daily Fine

The notification-of-incident regulation cited a daily continuing fine of RM10,000 while penalties/index.json said RM5,000 for the same offence. Both figures existed simultaneously with no reconciliation.

**Lesson:** Penalty amounts must have a single source of truth. When the same offence appears in multiple files, a validation script should assert the amounts match.

### 6. Sector ID Format Mismatch

ncii-sector-mappings.json used abbreviated IDs (`banking-finance`) while sectors/index.json used full IDs (`banking-and-finance`). Six mismatches meant cross-reference lookups would silently fail — no error, just empty results.

**Lesson:** Define a canonical ID format and validate all references resolve. Silent lookup failures are worse than crashes because they produce plausible-looking empty results.

---

## Common Patterns (Shared Across All 3 Compliance Repos)

### Pattern 1: AI Confabulation

AI generates structurally correct, plausible-sounding legal/regulatory data that has no basis in the actual source material. The output is confident, internally consistent, and correctly formatted — making it extremely difficult to detect without checking the authoritative source. The most dangerous fabrications are the most plausible ones.

### Pattern 2: Cascading Errors

Derivatives inherit base fabrications. A fabricated gazette number cascades to every file that references it. A fabricated sector cascades to sector mappings, controls, cross-references, and the UI. Each layer is internally consistent with the fabricated base but wrong relative to reality.

### Pattern 3: Incomplete Remediation

Fixing the source but not all derivatives. When sector IDs were corrected in sectors/index.json, the cross-reference mapping file still used the old abbreviated format. When JSON data was corrected, README counts were left stale.

### Pattern 4: Distributed State

The same fact stored in multiple places drifts. The daily fine amount appeared in both penalties/index.json and notification-of-incident.json with different values. Sector names appeared in sectors/index.json, ncii-sector-mappings.json, and controls/library.json with different formats.

### Pattern 5: Fix Oscillation

Fixes that correct one error while introducing another. The bulk s23-to-s26 replacement changed some s23 references that were not about incident notification. Blanket find-and-replace operates on pattern rather than semantics.

### Pattern 6: Status Misrepresentation

AI defaults to the most authoritative-sounding label. "In-force" is the most "complete" value for a status field. The AI optimizes for appearing comprehensive rather than accurately representing its confidence level. This is the most operationally dangerous pattern — it causes practitioners to act on fabricated obligations.

### Pattern 7: Premature Productization

A full SPA with sector explorer was built before the underlying data was verified. The polished UI displayed the fabricated 11th sector with the same visual treatment as the 10 real sectors, making the fabrication invisible to users who trust the presentation layer.

---

## Prevention Checklist

For any future AI-generated compliance data in this repo:

- [ ] Verify every fact against the authoritative source (Act 854 text, official Gazette) before publishing
- [ ] Use extraction (from documents) not generation (from memory) for legal text
- [ ] Label AI-generated content explicitly at the field level (`sourceType`, `verificationStatus`)
- [ ] Track dependency graphs between fields — know what breaks when a base field changes
- [ ] Run validation script (`validate.py`) after every change
- [ ] Never use blanket merge resolution (`git checkout --ours`) on data files
- [ ] Check README/app.js counts match actual JSON data array lengths
- [ ] Test cross-references resolve in both directions
- [ ] Validate closed enumerations: if the Act says "10 sectors," assert exactly 10 in data
- [ ] Add contradiction detection: `sourceType: "constructed"` must not have `status: "in-force"`
- [ ] Standardize ID formats across all files — validate all lookups resolve to non-empty results
- [ ] Never symlink to files outside the repo — GitHub Pages (Jekyll) fails on broken symlinks with `No such file or directory @ rb_check_realpath_internal`
- [ ] Keep shared tooling (e.g., cross-repo validation scripts) in a parent directory or separate repo, not symlinked into each sub-repo
