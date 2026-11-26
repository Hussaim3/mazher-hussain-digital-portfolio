/* Mazher Hussain Digital Portfolio — Unified Classic Bundle (Works on BOTH GitHub Pages HTTPS and local file://!) */
window.__PORTFOLIO_DATA__ = {"3ds-scenarios.json": {"schemaVersion": "1.0", "source": "synthetic", "confidentiality": "public-demo", "project": "NZeTA 3DS 2.0 Authentication Lab", "languages": {"en": {"title": "3-D Secure 2.0 Traveller Verification", "prompt": "Your issuing bank requires identity verification for security compliance.", "instructions": "Enter the 6-digit one-time security code sent to your registered mobile phone (+64 ***-**18).", "otpPlaceholder": "6-digit passcode", "submitBtn": "Verify & Complete Payment", "cancelBtn": "Cancel & Return to NZeTA", "successMsg": "Authentication Approved. Redirecting to payment confirmation...", "declineMsg": "Authentication Unsuccessful. Card issuer rejected the verification code.", "timeoutMsg": "Session Timed Out. Authentication window exceeded 5 minutes.", "unavailableMsg": "Directory Server Unavailable. Issuer Access Control Server (ACS) unreachable."}, "zh": {"title": "3-D Secure 2.0 旅客身份安全验证", "prompt": "根据新西兰移民局与发卡银行安全合规要求，请完成本次身份验证。", "instructions": "请输入发送至您预留手机号（+64 ***-**18）的6位动态验证码。", "otpPlaceholder": "6位验证码", "submitBtn": "验证并完成支付", "cancelBtn": "取消并返回 NZeTA 申请", "successMsg": "身份验证成功。正在跳转至支付确认页面...", "declineMsg": "身份验证未通过。发卡银行已拒绝本次验证请求。", "timeoutMsg": "会话超时。验证窗口已超过5分钟限制。", "unavailableMsg": "验证目录服务器暂时不可用。发卡行访问控制服务器（ACS）无响应。"}}, "scenarios": [{"id": "3ds-success", "label": "Authentication Success (Frictionless / OTP Pass)", "status": "pass", "challengeRequired": true, "authResult": "Y (Authentication Successful)", "eci": "05 (Fully Authenticated)", "qaChecks": [{"name": "Challenge Redirect Handling", "result": "Pass", "note": "Embedded iframe rendered smoothly without outer page displacement."}, {"name": "Multilingual String Parity", "result": "Pass", "note": "English and Simplified Chinese guidance matches approved INZ copy."}, {"name": "Cryptographic Signature Validation", "result": "Pass", "note": "CAVV / AAV cryptogram verified by Windcave processor."}]}, {"id": "3ds-declined", "label": "Authentication Declined (Failed OTP / Fraud Block)", "status": "fail", "challengeRequired": true, "authResult": "N (Not Authenticated / Denied)", "eci": "07 (Auth Failed)", "qaChecks": [{"name": "Graceful Failure UI", "result": "Pass", "note": "Clear error message displayed with non-technical guidance."}, {"name": "No Premature Deduction", "result": "Pass", "note": "Confirmed zero financial hold captured on customer ledger."}, {"name": "Alternate Payment Route", "result": "Pass", "note": "User safely returned to checkout with option to use alternate card."}]}, {"id": "3ds-unavailable", "label": "Authentication Unavailable (ACS Server Outage)", "status": "fail", "challengeRequired": false, "authResult": "U (Unable to Complete)", "eci": "06 (Merchant Attempted)", "qaChecks": [{"name": "Fallback Decision Rule", "result": "Pass", "note": "Risk rules evaluated merchant liability shift before attempting stand-in auth."}, {"name": "Audit Logging", "result": "Pass", "note": "Full ACS failure payload logged in compliance with PCI-DSS 4.0 requirements."}]}, {"id": "3ds-cancelled", "label": "Traveller Cancelled Challenge Window", "status": "fail", "challengeRequired": true, "authResult": "C (Cancelled by Cardholder)", "eci": "07 (Abandoned)", "qaChecks": [{"name": "Session Recovery", "result": "Pass", "note": "Traveller declaration data retained in browser storage for 24 hours."}, {"name": "No Orphan Webhooks", "result": "Pass", "note": "Callback listener gracefully closed without timing out."}]}, {"id": "3ds-return-failure", "label": "Return State Failure (Corrupted Redirect Payload)", "status": "fail", "challengeRequired": true, "authResult": "E (Execution / Payload Error)", "eci": "N/A", "qaChecks": [{"name": "Tamper Resistance", "result": "Pass", "note": "System detected payload hash mismatch and rejected return transition."}, {"name": "Defect Tracing", "result": "Defect Raised", "note": "DEF-3044: Handle Safari 16 ITP cross-site cookie drop during ACS redirect."}]}]}, "accessibility-cases.json": {"schemaVersion": "1.0", "source": "synthetic", "confidentiality": "public-demo", "project": "Accessibility & Inclusive Design Lab", "modes": [{"id": "keyboard-nav", "title": "Keyboard Navigation & Visible Focus", "standard": "WCAG 2.1 / 2.2 Success Criterion 2.4.7 (Focus Visible - Level AA)", "description": "Interactive demonstration contrasting accessible 3px high-contrast focus rings and logical tab ordering against faulty 'outline: none' anti-patterns.", "accessibleDemo": {"cssClass": "focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none", "tabSequence": ["Input 1 (Passport)", "Input 2 (Country)", "Checkbox (Declaration)", "Button (Submit)"], "focusTrap": "Contained cleanly within modal dialog"}, "faultyDemo": {"cssClass": "outline-none ring-0", "tabSequence": ["Input 1", "Skip to Footer", "Button (Submit)", "Input 2"], "focusTrap": "Focus escapes behind backdrop into obscured background links"}}, {"id": "screen-reader", "title": "Screen Reader Accessible Names & Transcripts", "standard": "WCAG 2.1 Success Criterion 4.1.2 (Name, Role, Value - Level A)", "description": "Text transcript demonstrating what NVDA and JAWS screen readers announce to blind users when interactive controls are properly coded versus unlabelled icons.", "accessibleAnnouncement": "“Submit Payment, button. Press Enter to activate. Required payment amount: $180.00 NZD.”", "faultyAnnouncement": "“Button. Unlabelled graphic.” (Leaves user completely unable to determine button function)."}, {"id": "reflow-400", "title": "Reflow & Responsive 400% Zoom", "standard": "WCAG 2.1 Success Criterion 1.4.10 (Reflow - Level AA)", "description": "Verification that content reflows into a single vertical column without two-dimensional scrolling at 400% zoom (320 CSS pixels wide).", "viewportTest": "320px width x 640px height", "status": "PASS", "details": "Zero horizontal scrollbars. Grid collapses into vertical single-column cards."}, {"id": "error-summary", "title": "Accessible Form Errors & Inline Associations", "standard": "WCAG 2.1 Success Criterion 3.3.1 (Error Identification) & 3.3.3 (Error Suggestion)", "description": "Comparison between an accessible error summary box with in-page jump anchors and aria-describedby associations versus generic browser alerts.", "accessibleTreatment": "Focus moves to Error Summary with role='alert'. Each error item is a clickable anchor linking to the invalid input.", "faultyTreatment": "Vague red outline on input with no text explanation and no screen-reader announcement."}, {"id": "color-contrast", "title": "Color Contrast Ratios & Graphical Objects", "standard": "WCAG 2.1 Success Criterion 1.4.3 (Contrast Minimum) & 1.4.11 (Non-text Contrast)", "description": "Measured contrast ratios for body text (minimum 4.5:1), large headings (minimum 3:1), and UI components/icons (minimum 3:1).", "measurements": [{"element": "Primary Heading on Dark Navy (#FFFFFF on #0B1F3A)", "ratio": "15.4:1", "verdict": "PASS (AAA)"}, {"element": "Body Text on Dark (#E2E8F0 on #0B1F3A)", "ratio": "11.2:1", "verdict": "PASS (AAA)"}, {"element": "Teal Accent Text (#2DD4BF on #0B1F3A)", "ratio": "7.8:1", "verdict": "PASS (AA)"}, {"element": "Muted Label (#94A3B8 on #0B1F3A)", "ratio": "4.9:1", "verdict": "PASS (AA)"}, {"element": "Faulty Grey (Anti-pattern: #64748B on #0B1F3A)", "ratio": "3.1:1", "verdict": "FAIL (< 4.5:1)"}]}]}, "ai-agent-patterns.json": {"schemaVersion": "1.0", "source": "synthetic", "confidentiality": "public-demo", "project": "QA Agent Architectures & Governance", "agents": [{"id": "agent-defect-triage", "name": "Defect Triage & Classification Agent", "purpose": "Analyze incoming automated failure logs, stack traces, and test results to propose initial severity, affected subsystem, and potential duplicate defects.", "boundaries": "Proposes triage draft only. Strictly prohibited from closing defects, changing severity without human sign-off, or assigning bug to live vendor queue.", "inputs": ["Stack trace", "Network HAR log", "Test Case ID", "Environment telemetry", "Build version"], "tools": ["Jira/ADO duplicate search", "Git blame commit matcher", "Log parser"], "outputSchema": {"proposedSeverity": "High", "affectedComponent": "Windcave Webhook Dispatcher", "duplicateCandidate": "DEF-3982 (Similarity: 89%)", "rootCauseHypothesis": "NullPointerException on unhandled 504 gateway response header", "humanActionRequired": "Review duplicate candidate and confirm priority before developer assignment"}, "escalationTrigger": "Any defect with potential customer data exposure or payment gateway discrepancy escalates immediately to Test Manager."}, {"id": "agent-test-designer", "name": "Requirements Decomposer & Test Design Agent", "purpose": "Extract explicit business rules and acceptance criteria from Jira user stories to draft boundary, equivalence partition, and negative test scenarios.", "boundaries": "Generates draft test specs. Must flag any unstated assumptions as 'Clarification Required'. Cannot approve test coverage.", "inputs": ["User story markdown", "Acceptance Criteria", "OpenAPI JSON spec", "Figma design link"], "tools": ["OpenAPI endpoint inspector", "Equivalence partition calculator", "Gherkin syntax formatter"], "outputSchema": {"totalDraftTests": 8, "positiveCases": 3, "negativeCases": 3, "boundaryCases": 2, "ambiguitiesFlagged": ["AC does not define behavior when passport expiry is exactly today"], "humanActionRequired": "Confirm flagged boundary with Business Analyst before adding to test suite"}, "escalationTrigger": "Contradictions between OpenAPI contract and BRD acceptance criteria."}, {"id": "agent-traceability", "name": "Traceability & Coverage Audit Agent", "purpose": "Scan repository test files and test management runs to audit end-to-end traceability from BRD requirements to automated test results.", "boundaries": "Read-only auditor. Highlights unmapped requirements and orphan test scripts.", "inputs": ["Requirements Traceability Matrix (RTM)", "Playwright test specs", "Junit test execution XML"], "tools": ["AST code parser", "Tag matcher", "Coverage gap calculator"], "outputSchema": {"requirementsAudited": 42, "verifiedCovered": 39, "coverageGapCount": 3, "orphanTests": ["test-old-flow-deprecated.spec.ts"], "humanActionRequired": "Approve updated RTM and schedule missing tests for sprint backlog"}, "escalationTrigger": "Critical regulatory requirement found with 0 passing test evidence."}]}, "ai-artefact-reviews.json": {"schemaVersion": "1.0", "source": "synthetic", "confidentiality": "public-demo", "project": "AI Artefact Review & Human Assurance", "case": {"id": "brd-test-review-01", "title": "Review of AI-Generated Test Specification: NZeTA 3DS 2.0 Guidance", "sourceBRD": "BRD-SEC-2026-v2.3, Section 4.8: Multi-Currency Payment and 3DS Localization.", "aiDraft": {"testsGenerated": 6, "unsupportedAssumptions": 2, "missingNegativeTests": 3, "brdCoverageBefore": 0.71, "status": "AI Draft"}, "humanReviewFindings": [{"id": "FINDING-01", "severity": "High", "type": "Unsupported Assumption", "description": "AI hallucinated that credit cards with billing address in France require French translations. The BRD explicitly specifies English and Simplified Chinese only.", "actionTaken": "Removed hallucinated test cases; added explicit Negative Test for unsupported locale fallback."}, {"id": "FINDING-02", "severity": "Critical", "type": "Missing Coverage", "description": "AI omitted test for traveller changing browser language mid-session while OTP iframe is rendered.", "actionTaken": "Created TC-3DS-019 to verify iframe session token persistence during mid-flight locale switch."}, {"id": "FINDING-03", "severity": "Medium", "type": "Vague Observable Result", "description": "AI used vague phrasing: 'Verify payment works properly'.", "actionTaken": "Rewrote expected result to assert specific HTTP 200 payload, CAVV cryptogram, and Windcave Auth Code."}], "humanReview": {"testsAdded": 4, "testsRemoved": 2, "testsModified": 4, "brdCoverageAfter": 0.96, "decision": "modify-and-approve", "reviewedBy": "Mazher Hussain (Test Lead / QA Delivery Lead)", "approvalDate": "2026-11-06", "status": "Approved for Use", "rationale": "Artefact sanitized of hallucinated requirements, enriched with critical negative edge cases, and mapped 100% to verifiable acceptance criteria."}}}, "ai-code-reviews.json": {"schemaVersion": "1.0", "source": "synthetic", "confidentiality": "public-demo", "project": "AI-Assisted Code Review Lab", "snippets": [{"id": "code-playwright-payment", "title": "Automated E2E Payment Test Snippet", "aiGeneratedCode": "// AI Generated Playwright Test\ntest('User completes payment', async ({ page }) => {\n  await page.goto('https://checkout.example.gov.nz');\n  await page.click('#pay-btn');\n  await page.fill('#card-number', '411111111111');\n  await page.click('#submit-btn');\n  await page.waitForTimeout(5000);\n  expect(await page.textContent('.status')).toBe('Success');\n});", "mazherReview": {"critique": "Unreliable test. Hardcoded 5-second sleep causes flaky runs; raw card numbers violate synthetic data guidelines; missing error assertions; no accessibility locator strategy; no retry logic for transient network hops.", "revisedCode": "// Mazher's Production-Grade Automated Test\ntest('Traveller completes payment with verified webhook confirmation', async ({ page }) => {\n  // 1. Semantic, accessible locators\n  await page.goto('/checkout');\n  const submitBtn = page.getByRole('button', { name: /Complete Payment/i });\n  \n  // 2. Intercept asynchronous gateway callback\n  const callbackPromise = page.waitForResponse(resp => \n    resp.url().includes('/api/payment/callback') && resp.status() === 200\n  );\n  \n  // 3. User interaction\n  await submitBtn.click();\n  \n  // 4. Assert non-flaky deterministic network response\n  const callbackResponse = await callbackPromise;\n  const responseJson = await callbackResponse.json();\n  expect(responseJson.reconciled).toBe(true);\n  \n  // 5. Accessible confirmation announcement\n  const statusAnnouncer = page.getByRole('status');\n  await expect(statusAnnouncer).toContainText(/Payment Approved/i);\n});", "improvements": ["Replaced brittle CSS selectors with accessible roles (getByRole)", "Eliminated arbitrary sleep (waitForTimeout) in favor of network event awaiting", "Added explicit verification of backend reconciliation response", "Validated aria-live status container for screen-reader accessibility"]}}]}, "ai-data-validation.json": {"schemaVersion": "1.0", "source": "synthetic", "confidentiality": "public-demo", "project": "Synthetic Data & ML Validation Lab", "recordsSample": [{"id": "ROW-1001", "legacyRecord": {"name": "Smith, J.", "amount": 180.0, "currency": "NZD", "status": "COMPLETED"}, "mlPredictedCategory": "STANDARD_TOURIST_LEVY", "ruleExpectedCategory": "STANDARD_TOURIST_LEVY", "confidenceScore": 0.99, "discrepancy": false, "qaAudit": "PASS: Exact match between ML classification and statutory rule."}, {"id": "ROW-1002", "legacyRecord": {"name": "Al-Mansoor, K.", "amount": 0.0, "currency": "NZD", "status": "DIPLOMATIC_EXEMPT"}, "mlPredictedCategory": "STANDARD_TOURIST_LEVY", "ruleExpectedCategory": "DIPLOMATIC_EXEMPTION", "confidenceScore": 0.82, "discrepancy": true, "qaAudit": "CRITICAL FALSE POSITIVE: ML model attempted to levy fee on accredited diplomatic visa holder. QA human rule caught and overturned classification."}, {"id": "ROW-1003", "legacyRecord": {"name": "Pacific Fisheries Ltd", "amount": 450.0, "currency": "NZD", "status": "COMMERCIAL"}, "mlPredictedCategory": "COMMERCIAL_ENTERPRISE", "ruleExpectedCategory": "COMMERCIAL_ENTERPRISE", "confidenceScore": 0.95, "discrepancy": false, "qaAudit": "PASS: Verified entity registry tax identifier."}]}, "ai-prompt-scenarios.json": {"schemaVersion": "1.0", "source": "synthetic", "confidentiality": "public-demo", "project": "AI Prompt Studio & Structured Prompting", "promptPattern": {"systemRole": "Act as a senior QA Test Lead for a regulated digital payment service.", "sourceOfTruth": "Use ONLY the supplied BRD, user story, acceptance criteria, and interface contracts.", "task": "Generate positive, negative, regression, and edge test scenarios.", "constraints": "Do not invent requirements. Mark ambiguity as 'Clarification Required'. Separate Web and Mobile applicability.", "output": "Map each test to Build, User Story, AC, risk, preconditions, steps, and expected observable result.", "validation": "Identify coverage gaps, ungrounded assumptions, and items requiring human sign-off."}, "scenarios": [{"id": "prompt-3ds-language", "title": "3DS Multilingual Guidance Prompt", "inputRequirement": "AC-3DS-04: The 3DS challenge guidance displays in English or Simplified Chinese according to the traveller language selection.", "weakPrompt": {"text": "Write test cases for the 3DS language feature in English and Chinese.", "output": "TC-01: Verify English text shows on English page.\nTC-02: Verify Chinese text shows on Chinese page.", "critique": "Superficial coverage. Lacks negative paths, session persistence, language switching during active challenge, translation boundary validation, and traceability."}, "structuredPrompt": {"text": "SYSTEM: Senior QA Lead.\nSOURCE: AC-3DS-04.\nTASK: Decompose multilingual verification into positive, negative, and edge tests.\nCONSTRAINTS: Explicitly test language switching mid-session, fallback when locale unsupported, persistence across redirect, and character truncation on mobile.\nOUTPUT: Markdown table with Test ID, AC Tracing, Preconditions, Action, Observable Result, Risk Rating.", "output": [{"id": "TC-3DS-04A", "type": "Positive", "action": "Select Simplified Chinese on Portal; initiate payment", "expected": "Issuer ACS iframe loads with approved simplified Chinese glyphs; font renders cleanly.", "risk": "Low"}, {"id": "TC-3DS-04B", "type": "Negative/Edge", "action": "Switch browser locale to unsupported language (e.g. es-ES)", "expected": "System gracefully defaults to English with zero unrendered placeholder tags.", "risk": "Medium"}, {"id": "TC-3DS-04C", "type": "Session State", "action": "Change language on payment redirect return page", "expected": "Language selection persists across payment completion receipt without session loss.", "risk": "High"}, {"id": "TC-3DS-04D", "type": "Reflow/UX", "action": "View Chinese OTP guidance on 320px mobile viewport", "expected": "No character clipping, line-height >= 1.5, glyphs meet WCAG 1.4.12 spacing.", "risk": "Medium"}], "qaImpact": "Coverage expanded from 2 superficial checks to 4 defensible risk-aligned test specifications."}}, {"id": "prompt-payment-timeout", "title": "Payment Gateway Timeout & Recovery Prompt", "inputRequirement": "AC-PAY-09: If payment gateway fails to respond within 15 seconds, the transaction status shall be marked as PENDING_RECONCILIATION and prevent immediate re-submission.", "weakPrompt": {"text": "Test what happens when payment times out.", "output": "TC-01: Wait 15 seconds, check that error message appears.", "critique": "Dangerous omission: Misses financial ledger state, duplicate charge prevention, asynchronous polling, and customer button disabling."}, "structuredPrompt": {"text": "SYSTEM: Senior QA Test Lead.\nSOURCE: AC-PAY-09.\nTASK: Generate rigorous state transition tests for payment gateway timeout.\nCONSTRAINTS: Cover UI button debouncing, database transaction state, asynchronous inquiry job, and user retry prevention.\nOUTPUT: Action, Expected System State, Ledger State, Risk Rating.", "output": [{"id": "TC-PAY-09A", "type": "UI State", "action": "Trigger 15s gateway delay; click 'Submit' repeatedly", "expected": "Submit button disabled immediately on first click; duplicate POST requests suppressed.", "risk": "High"}, {"id": "TC-PAY-09B", "type": "Database Audit", "action": "Inspect batch table at T=15.01s", "expected": "Batch status set to PENDING_RECONCILIATION; locking token generated to prevent retry.", "risk": "Critical"}, {"id": "TC-PAY-09C", "type": "Reconciliation", "action": "Reconciliation cron polls gateway 10 mins later and finds payment succeeded", "expected": "Batch automatically marked PAID; confirmation sent to traveller without manual ticket.", "risk": "High"}], "qaImpact": "Prevents catastrophic double-billing defects in production."}}]}, "credentials.json": {"schemaVersion": "1.0", "source": "synthetic", "confidentiality": "public-demo", "pillars": [{"id": "test-leadership", "name": "Test Leadership", "accent": "brand-navy", "count": 2, "description": "Enterprise test strategy, team governance, risk-based testing, and agile delivery leadership."}, {"id": "ai-engineering", "name": "AI Engineering", "accent": "brand-blue", "count": 2, "description": "Agent architectures, LLM prompt orchestration, cognitive APIs, and cloud AI solutions."}, {"id": "ai-quality", "name": "AI Quality & Governance", "accent": "ai-purple", "count": 2, "description": "ISTQB AI testing methods, hallucination mitigation, ethical AI guardrails, and compliance."}, {"id": "data-engineering", "name": "Data Engineering", "accent": "teal", "count": 2, "description": "Lakehouse data validation, SQL ETL reconciliation, pipeline integrity, and schema auditing."}, {"id": "cloud-integration", "name": "Cloud and Integration", "accent": "orange", "count": 2, "description": "Enterprise cloud infrastructure, secure gateway routing, migration cutover, and hybrid architecture."}], "credentials": [{"id": "istqb-ctal-tm", "title": "ISTQB Advanced Test Management", "shortTitle": "CTAL-TM", "issuer": "ISTQB / ANZTB", "category": "test-leadership", "status": "earned", "earnedDate": "2021-08", "expiryDate": null, "credentialUrl": "https://www.anztb.org/", "verified": true, "skills": ["Test Strategy", "Risk-Based Testing", "Team Leadership", "Defect Governance", "Release Gates"], "relevance": "Underpins multi-stream QA delivery across government and core banking transformations.", "pdfUrl": "docs/certificates/01_ISTQB_CTAL_TM_Portfolio.pdf", "pdfFile": "01_ISTQB_CTAL_TM_Portfolio.pdf"}, {"id": "csm-scrummaster", "title": "Certified ScrumMaster", "shortTitle": "CSM", "issuer": "Scrum Alliance", "category": "test-leadership", "status": "earned", "earnedDate": "2020-03", "expiryDate": "2026-03", "credentialUrl": "https://www.scrumalliance.org/", "verified": true, "skills": ["Agile Delivery", "Sprint Ceremonies", "Impediment Removal", "Cross-Functional QA"], "relevance": "Direct coaching of multi-disciplinary squads delivering rapid iterations.", "pdfUrl": "docs/certificates/02_Scrum_Alliance_CSM_Portfolio.pdf", "pdfFile": "02_Scrum_Alliance_CSM_Portfolio.pdf"}, {"id": "azure-ai-103", "title": "Azure AI Apps and Agents Developer Associate", "shortTitle": "AI-103", "issuer": "Microsoft", "category": "ai-engineering", "status": "in-progress", "earnedDate": null, "targetDate": "In Progress", "credentialUrl": "https://learn.microsoft.com/en-us/credentials/", "verified": false, "skills": ["Agent Workflows", "Azure OpenAI", "Semantic Kernel", "RAG Patterns", "Tool Calling"], "relevance": "Designing structured QA agents that assist in test design and defect triage.", "pdfUrl": "docs/certificates/07_Microsoft_AI_103_Portfolio.pdf", "pdfFile": "07_Microsoft_AI_103_Portfolio.pdf"}, {"id": "azure-ai-102", "title": "Azure AI Engineer Associate", "shortTitle": "AI-102", "issuer": "Microsoft", "category": "ai-engineering", "status": "unconfirmed", "earnedDate": null, "targetDate": "Status not confirmed (retired track)", "credentialUrl": "https://learn.microsoft.com/en-us/credentials/", "verified": false, "skills": ["Cognitive Services", "Conversational AI", "Vision & NLP", "Model Monitoring"], "relevance": "Validating multi-modal enterprise AI capabilities with repeatable test suites.", "pdfUrl": "docs/certificates/10_Microsoft_AI_102_Portfolio.pdf", "pdfFile": "10_Microsoft_AI_102_Portfolio.pdf"}, {"id": "istqb-ct-ai", "title": "ISTQB Certified Tester - AI Testing", "shortTitle": "CT-AI v2.0", "issuer": "ISTQB", "category": "ai-quality", "status": "earned", "earnedDate": "2024-05", "expiryDate": null, "credentialUrl": "https://www.istqb.org/", "verified": true, "skills": ["Model Validation", "Bias & Explainability", "Metamorphic Testing", "Adversarial Robustness"], "relevance": "Formal testing of machine learning models and generative AI outputs.", "pdfUrl": "docs/certificates/03_ISTQB_CT_AI_Portfolio.pdf", "pdfFile": "03_ISTQB_CT_AI_Portfolio.pdf"}, {"id": "iapp-aigp", "title": "Certified AI Governance Professional", "shortTitle": "AIGP", "issuer": "IAPP", "category": "ai-quality", "status": "in-progress", "earnedDate": null, "targetDate": "In Progress", "credentialUrl": "https://iapp.org/certify/aigp/", "verified": false, "skills": ["AI Governance", "Risk Assessment", "ISO/IEC 42001", "EU AI Act Compliance", "Human Oversight"], "relevance": "Ensuring corporate and government AI deployments retain human accountability.", "pdfUrl": "docs/certificates/08_IAPP_AIGP_Portfolio.pdf", "pdfFile": "08_IAPP_AIGP_Portfolio.pdf"}, {"id": "databricks-data-engineer", "title": "Databricks Data Engineer Associate", "shortTitle": "Databricks DEA", "issuer": "Databricks", "category": "data-engineering", "status": "earned", "earnedDate": "2023-11", "expiryDate": "2025-11", "credentialUrl": "https://www.databricks.com/", "verified": true, "skills": ["Delta Lake", "Spark SQL", "Data Pipelines", "Schema Enforcement", "ETL Verification"], "relevance": "Hands-on data migration reconciliation across cloud data lakes and relational schemas.", "pdfUrl": "docs/certificates/04_Databricks_Data_Engineer_Associate_Portfolio.pdf", "pdfFile": "04_Databricks_Data_Engineer_Associate_Portfolio.pdf"}, {"id": "ms-fabric-dp-700", "title": "Microsoft Fabric Data Engineer", "shortTitle": "DP-700", "issuer": "Microsoft", "category": "data-engineering", "status": "in-progress", "earnedDate": null, "targetDate": "In Progress", "credentialUrl": "https://learn.microsoft.com/en-us/credentials/", "verified": false, "skills": ["OneLake", "Fabric Dataflows", "Lakehouse Architecture", "Real-Time Intelligence"], "relevance": "Modern enterprise data pipeline validation and automated data quality checks.", "pdfUrl": "docs/certificates/09_Microsoft_DP_700_Portfolio.pdf", "pdfFile": "09_Microsoft_DP_700_Portfolio.pdf"}, {"id": "azure-az-900", "title": "Microsoft Azure Fundamentals", "shortTitle": "AZ-900", "issuer": "Microsoft", "category": "cloud-integration", "status": "earned", "earnedDate": "2022-04", "expiryDate": null, "credentialUrl": "https://learn.microsoft.com/", "verified": true, "skills": ["Cloud Architecture", "Identity & RBAC", "Network Security", "Compliance"], "relevance": "Security clearance alignment and cloud environment governance.", "pdfUrl": "docs/certificates/05_Microsoft_AZ_900_Portfolio.pdf", "pdfFile": "05_Microsoft_AZ_900_Portfolio.pdf"}, {"id": "oracle-migration", "title": "Oracle Data Migration and Integration", "shortTitle": "Oracle Migration", "issuer": "Oracle University", "category": "cloud-integration", "status": "earned", "earnedDate": "2020-09", "expiryDate": null, "credentialUrl": "https://education.oracle.com/", "verified": true, "skills": ["GoldenGate", "Data Pump", "Reconciliation Queries", "Table Partitioning"], "relevance": "Large-scale government registry migrations from Oracle RDBMS to modern cloud targets.", "pdfUrl": "docs/certificates/06_Oracle_Data_Migration_Integration_Portfolio.pdf", "pdfFile": "06_Oracle_Data_Migration_Integration_Portfolio.pdf"}]}, "migration-records.json": {"schemaVersion": "1.0", "source": "synthetic", "confidentiality": "public-demo", "project": "Illustrative SaaS Migration Reconciliation Demo (Synthetic Data)", "datasets": [{"id": "dataset-all-pass", "title": "Dataset A: Standard Patent Records", "description": "High-volume core patent applications with 100% field parity and verified target schema integrity.", "legacyTotal": 14500, "targetTotal": 14500, "passCount": 14500, "failCount": 0, "matchRate": 1.0, "riskLevel": "Low", "records": [{"field": "Record ID", "legacy": "SYNTH-PAT-10829", "target": "SYNTH-PAT-10829", "rule": "Exact string match", "status": "pass", "type": "exact", "impact": "None. Primary key integrity preserved."}, {"field": "Filing Date", "legacy": "14/05/2021", "target": "2021-05-14", "rule": "Date transform (DD/MM/YYYY -> ISO-8601)", "status": "pass", "type": "transformed", "impact": "None. Valid timestamp normalization."}, {"field": "Statutory Status", "legacy": "REG", "target": "Registered", "rule": "Enum mapping lookup", "status": "pass", "type": "transformed", "impact": "None. Code expanded to human-readable label."}, {"field": "Fee Amount (NZD)", "legacy": "450.00", "target": "450.00", "rule": "Decimal numeric precision", "status": "pass", "type": "exact", "impact": "None. Financial ledger balance verified."}, {"field": "Applicant Hash", "legacy": "e9c1a40f8b", "target": "e9c1a40f8b", "rule": "SHA-256 integrity checksum", "status": "pass", "type": "exact", "impact": "None. Entity relationship verified."}], "discrepanciesByCategory": {"Primary Keys": 0, "Date Formats": 0, "Status Enums": 0, "Financial Totals": 0, "Binary Attachments": 0, "Orphaned Records": 0}}, {"id": "dataset-transform-pass", "title": "Dataset B: Complex Trademark Filings", "description": "Multi-classification international trademark filings requiring string-to-array transformations and UTC normalization.", "legacyTotal": 8200, "targetTotal": 8200, "passCount": 8200, "failCount": 0, "matchRate": 1.0, "riskLevel": "Low", "records": [{"field": "Record ID", "legacy": "TM-NZ-991204", "target": "TM-NZ-991204", "rule": "Exact string match", "status": "pass", "type": "exact", "impact": "None. Primary key match."}, {"field": "Nice Classification", "legacy": "CLASS_09;CLASS_42", "target": "['09', '42']", "rule": "Semicolon string to JSON array", "status": "pass", "type": "transformed", "impact": "None. Valid array deserialization in target SaaS."}, {"field": "Renewal Expiry", "legacy": "01/12/2030 00:00:00", "target": "2030-12-01T00:00:00Z", "rule": "Datetime UTC conversion", "status": "pass", "type": "transformed", "impact": "None. Exact UTC offset preserved."}, {"field": "Attorney Code", "legacy": "AGT-WLG-04", "target": "AGT-WLG-04", "rule": "Exact match", "status": "pass", "type": "exact", "impact": "None. Direct agent mapping."}, {"field": "Paris Convention Priority", "legacy": "Y", "target": "true", "rule": "Char(1) to Boolean mapping", "status": "pass", "type": "transformed", "impact": "None. Valid boolean normalization."}], "discrepanciesByCategory": {"Primary Keys": 0, "Date Formats": 0, "Status Enums": 0, "Financial Totals": 0, "Binary Attachments": 0}}, {"id": "dataset-critical-mismatch", "title": "Dataset C: Legacy Designs Migration", "description": "High-risk legacy dataset containing mapping table omissions, leap-year boundary defects, and orphaned attachments.", "legacyTotal": 3100, "targetTotal": 3088, "passCount": 2920, "failCount": 180, "matchRate": 0.942, "riskLevel": "Critical", "records": [{"field": "Record ID", "legacy": "DSN-2018-0041", "target": "DSN-2018-0041", "rule": "Exact string match", "status": "pass", "type": "exact", "impact": "None."}, {"field": "Design Category", "legacy": "CAT-INDUSTRIAL-04", "target": "CAT-UNKNOWN", "rule": "Mapping table lookup", "status": "fail", "type": "mismatch", "expected": "CAT-MANUFACTURING-IND", "actual": "CAT-UNKNOWN", "impact": "Critical: Unmapped design records fall out of public gazette search index."}, {"field": "Grant Date", "legacy": "29/02/2020", "target": "2020-02-28", "rule": "Leap year date parser", "status": "fail", "type": "mismatch", "expected": "2020-02-29", "actual": "2020-02-28", "impact": "High: Statutory priority date shifted by 24 hours, risking legal dispute."}, {"field": "Owner Tax ID", "legacy": "SYNTH-TAX-DEMO-0001", "target": "SYNTH-TAX-DEMO-0001", "rule": "Exact string match", "status": "pass", "type": "exact", "impact": "None."}, {"field": "Drawing Attachments", "legacy": "4 Files", "target": "3 Files", "rule": "Blob count reconciliation", "status": "fail", "type": "mismatch", "expected": "4 Blobs in S3", "actual": "3 Blobs in S3", "impact": "Blocker: 1 technical CAD diagram sheet lost during S3 bucket replication."}], "discrepanciesByCategory": {"Primary Keys": 12, "Date Formats": 48, "Status Enums": 74, "Financial Totals": 14, "Binary Attachments": 32}}], "simulatedSQL": "-- PORTFOLIO DEMO EXAMPLE - SANITISED RECONCILIATION METHOD (SYNTHETIC SCHEMA)\n-- Catches: (1) missing target row, (2) missing mapping rule, (3) NULL or mismatched target category, (4) doc_count/checksum drift\nSELECT\n    s.record_id,\n    s.category AS legacy_category,\n    t.category AS target_category,\n    m.target_code AS expected_category,\n    s.doc_count AS legacy_doc_count,\n    t.doc_count AS target_doc_count,\n    CASE\n        WHEN t.record_id IS NULL THEN 'ORPHANED_RECORD'\n        WHEN m.target_code IS NULL THEN 'MISSING_MAPPING_RULE'\n        WHEN t.category IS NULL OR t.category <> m.target_code THEN 'CATEGORY_MISMATCH_OR_NULL'\n        WHEN COALESCE(s.doc_count, -1) <> COALESCE(t.doc_count, -1) THEN 'BLOB_ATTACHMENT_MISMATCH'\n        WHEN COALESCE(s.checksum, '') <> COALESCE(t.checksum, '') THEN 'CHECKSUM_DRIFT'\n        ELSE 'PASS'\n    END AS reconciliation_verdict\nFROM demo_legacy_registry s\nLEFT JOIN demo_saas_target t ON s.record_id = t.record_id\nLEFT JOIN demo_category_mapping m ON s.category = m.legacy_code\nWHERE t.record_id IS NULL\n   OR m.target_code IS NULL\n   OR t.category IS NULL\n   OR t.category <> m.target_code\n   OR COALESCE(s.doc_count, -1) <> COALESCE(t.doc_count, -1)\n   OR COALESCE(s.checksum, '') <> COALESCE(t.checksum, '')\nORDER BY s.record_id ASC;"}, "paynow-scenarios.json": {"schemaVersion": "1.0", "source": "synthetic", "confidentiality": "public-demo", "project": "NZeTA PayNow inspired portfolio demonstration", "coreStages": [{"id": "portal", "label": "Batch Portal", "icon": "layout"}, {"id": "api", "label": "Batch API", "icon": "cpu"}, {"id": "quickPay", "label": "QuickPay", "icon": "credit-card"}, {"id": "windcave", "label": "Windcave Gateway", "icon": "shield-check"}, {"id": "callback", "label": "Callback Webhook", "icon": "refresh-cw"}, {"id": "reconciliation", "label": "Reconciliation", "icon": "database"}, {"id": "processing", "label": "Batch Processing", "icon": "check-circle"}], "scenarios": [{"id": "successful-payment", "label": "Successful payment", "tag": "Happy Path E2E", "description": "Complete payment authorization with verified webhook receipt, automated ledger reconciliation, and immediate batch clearance.", "stages": {"portal": "pass", "api": "pass", "quickPay": "pass", "windcave": "pass", "callback": "pass", "reconciliation": "pass", "processing": "pass"}, "status": "pass", "severity": "None", "businessImpact": "Traveller application batch fully authorized and released into border security processing stream without delay.", "qaRecommendation": "E2E pass with evidence captured. Proceed with scheduled release; telemetry indicates zero anomaly.", "evidence": {"httpStatus": "200 OK", "batchRef": "NZETA-BATCH-2026-9081", "gatewayAuthCode": "AUTH_OK_991823", "callbackLatencyMs": 142, "reconciliationVariance": "$0.00 NZD", "traceability": "US-PAY-101 -> AC-01 -> TC-PAY-001 -> PASS"}, "paymentOutcome": "PAYMENT AUTHORISED", "qaVerdict": "PASS"}, {"id": "declined-payment", "label": "Declined payment", "tag": "Negative Flow", "description": "Issuing bank declines card due to insufficient funds; downstream border batch processing is safely stopped without charging.", "stages": {"portal": "pass", "api": "pass", "quickPay": "pass", "windcave": "fail", "callback": "pass", "reconciliation": "blocked", "processing": "blocked"}, "status": "pass", "severity": "Low", "businessImpact": "Traveller notified in real-time with unambiguous, non-technical decline guidance and option to re-enter payment credentials.", "qaRecommendation": "Expected negative result; verify customer messaging clarity, session preservation, and absence of phantom pre-auth holds.", "evidence": {"httpStatus": "402 Payment Required", "batchRef": "NZETA-BATCH-2026-9082", "gatewayResponse": "DECLINED_51_INSUFFICIENT_FUNDS", "callbackLatencyMs": 118, "reconciliationVariance": "N/A (No charge)", "traceability": "US-PAY-104 -> AC-03 -> TC-PAY-014 -> PASS (Expected Neg)"}, "paymentOutcome": "BANK DECLINED (EXPECTED)", "qaVerdict": "PASS (NEGATIVE CONTROL VERIFIED)"}, {"id": "cancelled-payment", "label": "Cancelled payment", "tag": "User Abort", "description": "Traveller voluntarily selects 'Cancel and Return to Application' on the hosted payment interface.", "stages": {"portal": "pass", "api": "pass", "quickPay": "pass", "windcave": "fail", "callback": "pass", "reconciliation": "blocked", "processing": "blocked"}, "status": "pass", "severity": "Low", "businessImpact": "No duplicate charge created; batch application saved in editable 'Pending Payment' state for 24 hours.", "qaRecommendation": "Verify state persistence across session resumption and confirm no gateway webhook deadlock occurs.", "evidence": {"httpStatus": "200 OK", "batchRef": "NZETA-BATCH-2026-9083", "gatewayResponse": "TRANSACTION_CANCELLED_BY_USER", "callbackLatencyMs": 95, "reconciliationVariance": "$0.00 (Zero impact)", "traceability": "US-PAY-108 -> AC-02 -> TC-PAY-022 -> PASS"}, "paymentOutcome": "USER CANCELLED (EXPECTED)", "qaVerdict": "PASS (SAFE ABORT VERIFIED)"}, {"id": "gateway-timeout", "label": "Gateway timeout", "tag": "Network Anomaly", "description": "Windcave upstream endpoint fails to respond within the strict 15-second mutual TLS socket timeout window.", "stages": {"portal": "pass", "api": "pass", "quickPay": "pass", "windcave": "fail", "callback": "fail", "reconciliation": "blocked", "processing": "blocked"}, "status": "fail", "severity": "High", "businessImpact": "High financial risk. Uncertain gateway state could cause customer double-billing if blind automatic retries occur.", "qaRecommendation": "Enforce circuit-breaker pattern. Trigger automated status inquiry query before allowing user retry.", "evidence": {"httpStatus": "504 Gateway Timeout", "batchRef": "NZETA-BATCH-2026-9084", "socketTimeoutMs": 15002, "callbackLatencyMs": "None (Dropped)", "reconciliationVariance": "PENDING_INQUIRY", "traceability": "US-PAY-201 -> AC-05 -> TC-PAY-089 -> DEF-4019"}, "paymentOutcome": "GATEWAY TIMEOUT", "qaVerdict": "FAIL (RECOVERY DEFECT)"}, {"id": "callback-missing", "label": "Missing callback", "tag": "Data Inconsistency", "description": "Payment authorization succeeds at Windcave, but asynchronous HTTPS webhook callback fails due to transient firewall drop.", "stages": {"portal": "pass", "api": "pass", "quickPay": "pass", "windcave": "pass", "callback": "fail", "reconciliation": "blocked", "processing": "pending"}, "status": "fail", "severity": "High", "businessImpact": "Customer card is charged, but application remains in 'Awaiting Payment' in portal, blocking visa processing.", "qaRecommendation": "Hold release until callback recovery cron polling job and duplicate-payment reconciliation controls are verified in UAT.", "evidence": {"httpStatus": "200 OK (Gateway) / 500 (Callback)", "batchRef": "NZETA-BATCH-2026-9085", "gatewayAuthCode": "AUTH_OK_991845", "callbackLatencyMs": "TIMEOUT_NO_ACK", "reconciliationVariance": "+$180.00 NZD (Unallocated)", "traceability": "US-PAY-112 -> AC-04 -> TC-PAY-047 -> DEF-4022"}, "paymentOutcome": "MISSING CALLBACK", "qaVerdict": "FAIL (RECONCILIATION DEFECT)"}, {"id": "system-error-before-redirect", "label": "System error before redirect", "tag": "Payload Defect", "description": "Batch API validation rejects traveller payload due to malformed XML/JSON schema before redirection to gateway.", "stages": {"portal": "pass", "api": "fail", "quickPay": "blocked", "windcave": "blocked", "callback": "blocked", "reconciliation": "blocked", "processing": "blocked"}, "status": "fail", "severity": "High", "businessImpact": "Entire batch application rejected before payment page; travellers blocked from completing border declaration.", "qaRecommendation": "E2E blocked; defect mapped to Build 2.1 API schema parser. Deploy hotfix and retest full regression pack.", "evidence": {"httpStatus": "500 Internal Server Error", "batchRef": "NZETA-BATCH-2026-9086", "errorDetail": "SCHEMA_VALIDATION_ERROR: Invalid passport country ISO-3166 code", "callbackLatencyMs": "N/A", "reconciliationVariance": "N/A", "traceability": "US-PAY-090 -> AC-01 -> TC-PAY-003 -> DEF-4031"}, "paymentOutcome": "PRE-REDIRECT ERROR", "qaVerdict": "FAIL (PAYLOAD DEFECT)"}]}, "profile.json": {"schemaVersion": "1.0", "source": "synthetic", "confidentiality": "public-demo", "name": "Mazher Hussain", "primaryTitle": "Test Manager | QA Delivery Lead | Test Lead", "specialisms": ["AI-enabled Quality Engineering", "Data Migration", "Payments and Integration", "Release Assurance"], "eyebrow": "Human-led. AI-enabled. Evidence-driven.", "valueProposition": "I turn complex requirements, integrations, data and delivery risk into traceable quality evidence and defensible release decisions.", "profileStatement": "Senior QA leader combining human judgement with AI-assisted analysis, artefact development, code review and evidence-led assurance.", "clearances": [{"id": "nz-citizenship", "label": "New Zealand Citizen", "level": "Full NZ work rights", "authority": "New Zealand Citizenship", "image": "New-Zealand-citizenship.png"}, {"id": "au-work-rights", "label": "Australian Permanent Resident", "level": "Permanent work and residency rights in Australia", "authority": "Australian Permanent Residency", "image": "Australian-work-rights.png"}, {"id": "nz-defence-cv", "label": "NZ Defence Active Confidential *CV Level Clearance", "level": "NZSIS – *CV Level Clearance (held supporting NZDF via One NZ)", "authority": "New Zealand Security Intelligence Service (NZSIS)", "image": "New-Zealand-Defence-Force.png"}, {"id": "nz-police-vetting", "label": "NZ Police Vetted", "level": "Vetting cleared (held supporting NZ Police via One NZ)", "authority": "New Zealand Police Vetting Service", "image": "NZ-Police-vetting.png"}], "metrics": [{"label": "Years in IT & QA", "value": "14+ Years", "sub": "Enterprise Delivery"}, {"label": "QA Team Leadership", "value": "5-Person Team", "sub": "Cross-Functional"}, {"label": "Delivery Builds Assured", "value": "3 Delivery Builds", "sub": "Zero Disruption"}, {"label": "Sector Scope", "value": "Government & Banking", "sub": "Regulated Cloud"}], "languages": ["English", "Arabic", "Hindi"], "education": ["Master of Information Technology — Southern Institute of Technology (SIT), New Zealand (2015)", "Bachelor of Technology (B.Tech) in Computer Science & Engineering — JNTU, Hyderabad (2009)"]}, "projects.json": {"schemaVersion": "1.0", "source": "synthetic", "confidentiality": "public-demo", "projects": [{"id": "nzeta-paynow", "code": "PROJ-01", "title": "NZeTA PayNow & Batch Portal", "subtitle": "Immigration & Border Security Payment Transformation", "client": "MBIE / INZ", "role": "QA Delivery Lead", "teamSize": "Five-person QA team", "builds": "3 delivery builds", "challenge": "Replace legacy payment gateway with modern Windcave multi-currency checkout while guaranteeing zero duplicate transactions across peak border application bursts.", "contribution": "Led 5-person test squad, architected asynchronous callback recovery validation, coordinated external vendor releases, and established Go/No-Go evidence gate.", "outcome": "Three zero-regression releases, 100% financial reconciliation accuracy, and seamless tourist levy / visa fee capture across 60+ countries.", "tags": ["Payment Gateways", "Windcave", "Async Callbacks", "Team Leadership", "Release Gate"], "labRoute": "/lab/paynow/"}, {"id": "iponz-saas", "code": "PROJ-02", "title": "IPONZ SaaS Migration & Legacy V3.39–Optonum Integration", "subtitle": "Intellectual Property Office Cloud & Database Modernisation", "client": "MBIE / IPONZ", "role": "Data Migration Test Lead", "teamSize": "Cross-functional data engineering & QA stream", "builds": "4 migration iterations", "challenge": "Migrate millions of statutory patent, trademark, and design records from legacy Oracle databases to target SaaS platform without data loss or date drift.", "contribution": "Formulated SQL source-to-target reconciliation and transformation-rule verification; performed hands-on IPONZ Legacy V3.39–Optonum seamless integration testing (Postman APIs including GetDocument & CheckDesignRenewal, Keycloak SSO/SLO authentication, user/customer sync, NFR performance baselines, ADO scripts); and represented MBIE in formal external vendor audit technical interviews.", "outcome": "100% target record verification, zero statutory date discrepancies, and executive sign-off for cutover weekend.", "tags": ["Data Migration", "SQL Reconciliation", "Optonum Integration", "Postman API & NFR", "Keycloak SSO/SLO", "External Vendor Audit"], "labRoute": "/lab/migration/"}, {"id": "one-nz-mobility", "code": "PROJ-03", "title": "One NZ Enterprise Mobility", "subtitle": "All-of-Government Mission-Critical Telecommunications", "client": "One NZ (Govt Streams: NZDF, Police, MSD, DOC)", "role": "QA Delivery Lead", "teamSize": "Multi-agency test coordination", "builds": "Continuous cutover streams", "challenge": "Ensure uninterrupted voice, secure mobile data, and priority routing across high-security government clients during enterprise network cutovers.", "contribution": "Managed test and cutover risk governance across defence, police, and social development streams; designed failover regression matrices; directed live transition assurance.", "outcome": "Zero mission-critical downtime, verified emergency call failover, and successful formal handover into live service.", "tags": ["Enterprise Cutover", "High Availability", "Government Security", "Risk Governance"], "labRoute": "/lab/release/"}, {"id": "epbr-accessibility", "code": "PROJ-04", "title": "EPBR Digital Accessibility", "subtitle": "Public Sector Regulated Accessibility & Usability Assurance", "client": "Public Sector", "role": "Test Lead", "teamSize": "4 test analysts", "builds": "2 releases", "challenge": "Meet NZ Government Web Accessibility Standard 1.1 and WCAG 2.1 Level AA across complex interactive digital public forms.", "contribution": "Embedded automated axe-core gates, conducted manual keyboard-only traversal, tested NVDA screen-reader flows, and audited color contrast.", "outcome": "Zero Level A/AA non-conformances at audit and accessible access for citizens with assistive technologies.", "tags": ["WCAG 2.1 AA", "Screen Readers", "Keyboard Nav", "Axe-core", "Reflow"], "labRoute": "/lab/accessibility/"}, {"id": "open-banking-cdr", "code": "PROJ-05", "title": "Open Banking & CDR API Assurance", "subtitle": "Consumer Data Right Standards & Financial Grade API Security", "client": "Banking & FinTech", "role": "Test Lead", "teamSize": "3 API QA specialists", "builds": "Quarterly spec releases", "challenge": "Validate OAuth2 mTLS authorization flows, CDR schema compliance, and payload encryption across high-volume banking APIs.", "contribution": "Engineered automated API test suites simulating third-party financial apps; audited consent token lifecycles and latency under load.", "outcome": "Full regulatory compliance, robust consent revocations, and secure integration with fintech partner ecosystems.", "tags": ["Open Banking", "FAPI Security", "OAuth2 mTLS", "API Automation", "JSON Schema"], "labRoute": "/lab/release/"}]}, "release-builds.json": {"schemaVersion": "1.0", "source": "synthetic", "confidentiality": "public-demo", "builds": [{"id": "build-1", "name": "Build 1.0 (Alpha Sprint 4 - Core API & Auth)", "date": "2026-09-15", "stage": "Alpha Verification", "execution": 0.7619, "requirementsCoverage": 0.84, "criticalOpen": 2, "highOpen": 5, "mediumOpen": 11, "lowOpen": 14, "regressionComplete": false, "blockedE2E": true, "recommendation": "NO-GO", "badgeClass": "status--fail", "ruleTriggered": "Rule 1 Violation: Critical open defects > 0 (2 Criticals found) and blocked E2E payment journey.", "residualRisk": "Payment token leakage under concurrent multi-user load (DEF-1002); 16% of functional requirements unexecuted.", "gates": [{"name": "Requirements Coverage (>= 98%)", "value": "84%", "status": "fail"}, {"name": "Zero Critical Defects", "value": "2 Open", "status": "fail"}, {"name": "E2E Gateway Unblocked", "value": "Blocked", "status": "fail"}, {"name": "Regression Suite Complete", "value": "Incomplete (42%)", "status": "fail"}], "chartData": {"labels": ["Passed", "Failed", "Blocked", "Not Run"], "datasets": [{"data": [142, 18, 9, 41]}]}, "defectBreakdown": {"Critical": 2, "High": 5, "Medium": 11, "Low": 14}}, {"id": "build-2", "name": "Build 2.1 (Release Candidate 1 - Payment & 3DS)", "date": "2026-10-12", "stage": "Release Candidate 1", "execution": 0.952, "requirementsCoverage": 0.97, "criticalOpen": 0, "highOpen": 1, "mediumOpen": 4, "lowOpen": 8, "regressionComplete": true, "blockedE2E": false, "recommendation": "CONDITIONAL GO", "badgeClass": "status--conditional", "ruleTriggered": "Rule 2 Triggered: Zero Criticals, but 1 High defect open and Requirements Coverage is 97% (< 98% target).", "residualRisk": "High defect DEF-3012: Callback retry delay under peak network jitter. Mitigated by operational cron job polling every 10 mins.", "gates": [{"name": "Requirements Coverage (>= 98%)", "value": "97%", "status": "conditional"}, {"name": "Zero Critical Defects", "value": "0 Open", "status": "pass"}, {"name": "E2E Gateway Unblocked", "value": "Clear", "status": "pass"}, {"name": "Suite Execution (>= 95%)", "value": "95.2% (238/250 Executed)", "status": "pass"}], "chartData": {"labels": ["Passed", "Failed", "Blocked", "Not Run"], "datasets": [{"data": [234, 4, 1, 11]}]}, "defectBreakdown": {"Critical": 0, "High": 1, "Medium": 4, "Low": 8}, "executionSummary": "95.2% Execution Rate (238 / 250 test cases executed: 234 Passed, 4 Failed; 1 Blocked, 11 Not Run)"}, {"id": "build-3", "name": "Build 3.0 (Final Release Candidate - Production Ready)", "date": "2026-11-04", "stage": "Production Sign-Off", "execution": 0.9926, "requirementsCoverage": 0.994, "criticalOpen": 0, "highOpen": 0, "mediumOpen": 1, "lowOpen": 3, "regressionComplete": true, "blockedE2E": false, "recommendation": "GO", "badgeClass": "status--pass", "ruleTriggered": "All Quality Gates Passed: 0 Critical, 0 High, 99.4% Requirements Coverage, 99% Execution, 100% Regression Passed.", "residualRisk": "Low cosmetic text reflow on legacy Android 9 webview (DEF-3098); formally accepted by Product Owner with zero operational impact.", "gates": [{"name": "Requirements Coverage (>= 98%)", "value": "99.4%", "status": "pass"}, {"name": "Zero Critical Defects", "value": "0 Open", "status": "pass"}, {"name": "E2E Gateway Unblocked", "value": "Clear", "status": "pass"}, {"name": "Regression Suite Complete", "value": "100% Passed", "status": "pass"}], "chartData": {"labels": ["Passed", "Failed", "Blocked", "Not Run"], "datasets": [{"data": [268, 1, 0, 2]}]}, "defectBreakdown": {"Critical": 0, "High": 0, "Medium": 1, "Low": 3}}]}};
(function() {
  'use strict';

  // === assets/js/components.js ===
/**
 * COMPONENTS.JS - Accessible UI Utilities & Shared Component Logic
 * Author: Mazher Hussain Digital Portfolio
 */

// 1. Aria-Live Status Announcer
function announceStatus(message) {
  let announcer = document.getElementById('a11y-live-announcer');
  if (!announcer) {
    announcer = document.createElement('div');
    announcer.id = 'a11y-live-announcer';
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    document.body.appendChild(announcer);
  }
  announcer.textContent = '';
  setTimeout(() => {
    announcer.textContent = message;
  }, 50);
}

// 2. Keyboard Focus Trap for Modals & Drawers
function trapModalFocus(modalEl) {
  if (!modalEl) return () => {};
  
  const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const focusableEls = Array.from(modalEl.querySelectorAll(focusableSelector)).filter(
    el => !el.hasAttribute('disabled') && el.offsetParent !== null
  );

  if (!focusableEls.length) return () => {};

  const firstEl = focusableEls[0];
  const lastEl = focusableEls[focusableEls.length - 1];

  function handleKeydown(e) {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstEl) {
        lastEl.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastEl) {
        firstEl.focus();
        e.preventDefault();
      }
    }
  }

  modalEl.addEventListener('keydown', handleKeydown);
  firstEl.focus();

  return function cleanup() {
    modalEl.removeEventListener('keydown', handleKeydown);
  };
}

// 3. Accessible Tablist Controller (WCAG Arrow Key Navigation)
function initTabs(tablistEl, onTabChange) {
  if (!tablistEl) return;
  const tabs = Array.from(tablistEl.querySelectorAll('[role="tab"]'));
  
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      selectTab(index);
    });

    tab.addEventListener('keydown', (e) => {
      let targetIndex = null;
      if (e.key === 'ArrowRight') {
        targetIndex = (index + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft') {
        targetIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (e.key === 'Home') {
        targetIndex = 0;
      } else if (e.key === 'End') {
        targetIndex = tabs.length - 1;
      }

      if (targetIndex !== null) {
        e.preventDefault();
        tabs[targetIndex].focus();
        selectTab(targetIndex);
      }
    });
  });

  function selectTab(selectedIndex) {
    tabs.forEach((tab, i) => {
      const isSelected = i === selectedIndex;
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      tab.classList.toggle('active', isSelected);
      const panelId = tab.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      if (panel) {
        panel.hidden = !isSelected;
      }
    });

    if (typeof onTabChange === 'function') {
      onTabChange(tabs[selectedIndex].getAttribute('data-tab-id') || selectedIndex);
    }
  }
}


  // === assets/js/chart-config.js ===
/**
 * CHART-CONFIG.JS - Shared Accessible Chart.js Presets
 * Author: Mazher Hussain Digital Portfolio
 */
const ChartColors = {
  success: '#22c55e',
  warning: '#f59e0b',
  danger: '#ef4444',
  blocked: '#fb7185',
  info: '#38bdf8',
  ai: '#a855f7',
  muted: '#64748b',
  text: '#f8fafc',
  border: 'rgba(255, 255, 255, 0.1)'
};
function getAccessibleChartDefaults() {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 500
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: ChartColors.text,
          font: {
            family: "'JetBrains Mono', monospace",
            size: 11
          },
          padding: 16
        }
      },
      tooltip: {
        backgroundColor: '#0f172a',
        borderColor: 'rgba(56, 189, 248, 0.3)',
        borderWidth: 1,
        titleColor: '#f8fafc',
        bodyColor: '#cbd5e1',
        titleFont: {
          family: "'Space Grotesk', sans-serif",
          weight: 'bold'
        },
        bodyFont: {
          family: "'JetBrains Mono', monospace"
        },
        padding: 10
      }
    }
  };
}


  // === assets/js/labs/paynow.js ===
/**
 * LABS/PAYNOW.JS - PayNow Assurance Lab Runner (Demo 1)
 * Author: Mazher Hussain Digital Portfolio
 */
function initPayNowLab(containerEl, scenariosData) {
  if (!containerEl || !scenariosData) return;

  const coreStages = scenariosData.coreStages || [];
  const scenarios = scenariosData.scenarios || [];
  let currentScenario = scenarios[0];
  let isRunning = false;
  let activeInterval = null;
  let activeTimeouts = [];

  function cancelActiveRun() {
    if (activeInterval) {
      clearInterval(activeInterval);
      activeInterval = null;
    }
    activeTimeouts.forEach(t => clearTimeout(t));
    activeTimeouts = [];
    isRunning = false;
    const runBtn = containerEl ? containerEl.querySelector('#paynowRunBtn') : null;
    if (runBtn) {
      runBtn.disabled = false;
      runBtn.classList.remove('opacity-50');
    }
  }

  let batchSize = 25;

  renderShell();
  bindEvents();
  renderScenario(currentScenario, false);

  function renderShell() {
    containerEl.innerHTML = `
      <div class="space-y-6">
        <!-- Lab Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
              <span class="font-mono-kicker text-xs text-teal-400 font-bold uppercase tracking-wider">Demo 1 · Interactive E2E Showcase</span>
            </div>
            <h3 class="font-display font-black text-2xl text-white mt-1">NZeTA PayNow Assurance Lab</h3>
            <p class="text-zinc-400 text-xs sm:text-sm mt-0.5">
              Simulating border payment transactions across distributed systems, asynchronous webhooks, and ledger reconciliation.
            </p>
          </div>
          <div class="flex items-center gap-3">
            <span class="font-mono-kicker text-xs text-zinc-400">Batch Size:</span>
            <select id="paynowBatchSelect" class="bg-zinc-900 border border-zinc-700 text-white font-mono-kicker text-xs rounded-lg px-2.5 py-1.5 focus:border-teal-400 focus:outline-none" aria-label="Select batch size">
              <option value="5">5 Applications ($900 NZD)</option>
              <option value="25" selected>25 Applications ($4,500 NZD)</option>
              <option value="100">100 Applications ($18,000 NZD)</option>
            </select>
            <button id="paynowResetBtn" class="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono-kicker text-xs transition-colors" aria-label="Reset scenario">
              Reset
            </button>
          </div>
        </div>

        <!-- Mandatory Synthetic Disclaimer -->
        <div class="demo-disclaimer-banner">
          <svg class="disclaimer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <strong>Mandatory Confidentiality Control:</strong> Portfolio demonstration using synthetic and sanitised data. No MBIE, Immigration New Zealand, Datacom, Windcave, customer, production or test-system data is used or connected.
          </div>
        </div>

        <!-- Scenario Selector Buttons -->
        <div>
          <label class="font-mono-kicker text-xs text-zinc-400 font-bold block mb-2">SELECT DEMONSTRATION SCENARIO:</label>
          <div class="scenario-picker-container" id="paynowScenarioPicker" role="radiogroup" aria-label="Payment scenarios">
            ${scenarios.map((s, idx) => `
              <button 
                type="button" 
                role="radio" 
                aria-checked="${idx === 0 ? 'true' : 'false'}" 
                class="scenario-btn ${idx === 0 ? 'active' : ''}" 
                data-scenario-id="${s.id}">
                ${s.label}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Interactive Journey Timeline -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="font-mono-kicker text-xs text-zinc-400 font-bold">TRANSACTION PIPELINE:</span>
            <button id="paynowRunBtn" class="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-zinc-950 font-display font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-teal-500/20">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Start Payment Journey</span>
            </button>
          </div>

          <div class="stage-timeline-track" id="paynowStagesTrack">
            ${coreStages.map(st => `
              <div class="stage-node is-pending" id="stage-${st.id}">
                <div class="stage-node__icon">
                  <span class="font-mono text-xs">○</span>
                </div>
                <span class="stage-node__name">${st.label}</span>
                <span class="stage-node__status text-zinc-500">Pending</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Risk & QA Action Panel -->
        <div class="risk-qa-panel" id="paynowRiskPanel">
          <!-- Populated dynamically -->
        </div>

        <!-- Detailed Tabs (Coverage, Evidence, Traceability, Defects) -->
        <div class="space-y-3">
          <div class="flex flex-wrap gap-2 border-b border-zinc-800 pb-2" role="tablist" id="paynowTablist">
            <button role="tab" aria-selected="true" aria-controls="panel-coverage" class="scenario-btn active" data-tab-id="coverage">Test Coverage</button>
            <button role="tab" aria-selected="false" aria-controls="panel-evidence" class="scenario-btn" data-tab-id="evidence">Evidence & Payloads</button>
            <button role="tab" aria-selected="false" aria-controls="panel-trace" class="scenario-btn" data-tab-id="trace">Traceability Matrix</button>
            <button role="tab" aria-selected="false" aria-controls="panel-risks" class="scenario-btn" data-tab-id="risks">Risk & Defect Detail</button>
          </div>

          <div id="panel-coverage" role="tabpanel" class="pt-2 text-xs text-zinc-300"></div>
          <div id="panel-evidence" role="tabpanel" class="pt-2 text-xs text-zinc-300" hidden></div>
          <div id="panel-trace" role="tabpanel" class="pt-2 text-xs text-zinc-300" hidden></div>
          <div id="panel-risks" role="tabpanel" class="pt-2 text-xs text-zinc-300" hidden></div>
        </div>
      </div>
    `;
  }

  function bindEvents() {
    const picker = containerEl.querySelector('#paynowScenarioPicker');
    picker.querySelectorAll('.scenario-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (isRunning) return;
        picker.querySelectorAll('.scenario-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
        const scId = btn.getAttribute('data-scenario-id');
        cancelActiveRun();
        currentScenario = scenarios.find(s => s.id === scId) || scenarios[0];
        renderScenario(currentScenario, false);
      });
    });

    const runBtn = containerEl.querySelector('#paynowRunBtn');
    runBtn.addEventListener('click', () => {
      runJourney(currentScenario);
    });

    const resetBtn = containerEl.querySelector('#paynowResetBtn');
    resetBtn.addEventListener('click', () => {
      cancelActiveRun();
      renderScenario(currentScenario, false);
      announceStatus("Scenario reset.");
    });

    const batchSelect = containerEl.querySelector('#paynowBatchSelect');
    batchSelect.addEventListener('change', (e) => {
      batchSize = parseInt(e.target.value, 10);
      renderScenario(currentScenario, false);
    });

    // Tab switcher with Arrow-key Navigation (Fixes DEF-06)
    const tablist = containerEl.querySelector('#paynowTablist');
    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        const targetId = tab.getAttribute('aria-controls');
        containerEl.querySelectorAll('[role="tabpanel"]').forEach(p => {
          p.hidden = p.id !== targetId;
        });
      });

      tab.addEventListener('keydown', (e) => {
        let nextIdx = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          nextIdx = (idx + 1) % tabs.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          nextIdx = (idx - 1 + tabs.length) % tabs.length;
        } else if (e.key === 'Home') {
          nextIdx = 0;
        } else if (e.key === 'End') {
          nextIdx = tabs.length - 1;
        }
        if (nextIdx !== null) {
          e.preventDefault();
          tabs[nextIdx].focus();
          tabs[nextIdx].click();
        }
      });
    });
  }

  function renderScenario(scenario, hasExecuted) {
    // Reset stages
    coreStages.forEach(st => {
      const node = containerEl.querySelector(`#stage-${st.id}`);
      if (!node) return;
      node.className = 'stage-node is-pending';
      const icon = node.querySelector('.stage-node__icon');
      const statusEl = node.querySelector('.stage-node__status');
      
      if (hasExecuted) {
        const stageStatus = scenario.stages[st.id] || 'pending';
        node.classList.remove('is-pending');
        node.classList.add(`is-${stageStatus}`);
        if (stageStatus === 'pass') {
          icon.innerHTML = '✓';
          statusEl.textContent = 'Pass';
          statusEl.className = 'stage-node__status text-emerald-400 font-bold';
        } else if (stageStatus === 'fail') {
          icon.innerHTML = '✕';
          statusEl.textContent = 'Fail';
          statusEl.className = 'stage-node__status text-rose-400 font-bold';
        } else if (stageStatus === 'blocked') {
          icon.innerHTML = '⊘';
          statusEl.textContent = 'Blocked';
          statusEl.className = 'stage-node__status text-zinc-500';
        } else if (stageStatus === 'pending') {
          icon.innerHTML = '⏳';
          statusEl.textContent = 'Pending';
          statusEl.className = 'stage-node__status text-amber-400 font-medium';
        }
      } else {
        icon.innerHTML = '○';
        statusEl.textContent = 'Ready';
        statusEl.className = 'stage-node__status text-zinc-500';
      }
    });

    // Render Risk Panel
    const riskPanel = containerEl.querySelector('#paynowRiskPanel');
    const badgeColor = scenario.severity === 'None' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' :
                       scenario.severity === 'Low' ? 'bg-amber-500/20 text-amber-400 border-amber-500/40' :
                       'bg-rose-500/20 text-rose-400 border-rose-500/40';

    // Release approval badge only appears after successful execution (Fixes DEF-03)
    const statusPill = hasExecuted ?
      `<span class="px-2.5 py-1 rounded-full border text-[11px] font-mono font-bold uppercase tracking-wide ${badgeColor}">
        ${scenario.severity === 'None' && scenario.status === 'pass' ? 'RELEASE APPROVED' : `SEVERITY: ${scenario.severity}`}
       </span>` :
      `<span class="px-2.5 py-1 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 text-[11px] font-mono font-bold uppercase tracking-wide">
        AWAITING EXECUTION
       </span>`;

    riskPanel.innerHTML = `
      <div class="risk-qa-panel__header">
        <div class="flex items-center gap-3">
          ${statusPill}
          <span class="font-mono text-xs text-zinc-400">Payment Outcome: <strong class="text-sky-300">${hasExecuted ? (scenario.paymentOutcome || scenario.label) : 'Awaiting Run'}</strong> &nbsp;|&nbsp; QA Verdict: <strong class="${scenario.status === 'pass' ? 'text-emerald-400' : 'text-rose-400'}">${hasExecuted ? (scenario.qaVerdict || scenario.status.toUpperCase()) : 'Pending'}</strong></span>
        </div>
        <span class="font-mono text-xs text-teal-400">Batch Total: $${(batchSize * 180).toLocaleString()} NZD</span>
      </div>
      <div class="risk-qa-panel__content">
        <p><strong>Business Impact:</strong> ${scenario.businessImpact}</p>
      </div>
      <div class="risk-qa-panel__recommendation">
        <p><strong>QA Delivery Lead Action & Recommendation:</strong> ${scenario.qaRecommendation}</p>
      </div>
    `;

    // Render Tabs
    renderTabsContent(scenario, hasExecuted);
  }

  function renderTabsContent(scenario, hasExecuted) {
    // 1. Coverage
    const covEl = containerEl.querySelector('#panel-coverage');
    covEl.innerHTML = `
      <div class="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-2">
        <div class="font-mono text-teal-400 font-bold mb-1">// TEST COVERAGE & ACCEPTANCE CRITERIA</div>
        <p class="text-zinc-300"><strong>Scenario ID:</strong> ${scenario.id} (${scenario.tag})</p>
        <p class="text-zinc-300"><strong>Covered Requirements:</strong> US-PAY-101 (Windcave Hosted Gateway Integration), US-PAY-104 (Declined Payment Feedback), US-PAY-108 (Cancellation Handover), US-PAY-112 (Asynchronous Webhook Receipt & Reconciliation).</p>
        <p class="text-zinc-400 mt-2">All tests verified across desktop web, iOS Safari, and Android Chrome viewports down to 320px width.</p>
      </div>
    `;

    // 2. Evidence
    const evEl = containerEl.querySelector('#panel-evidence');
    evEl.innerHTML = `
      <div class="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 font-mono text-xs space-y-2 overflow-x-auto">
        <div class="text-teal-400 font-bold mb-1">// SANITISED EXECUTION TELEMETRY & PAYLOAD</div>
        <pre class="text-zinc-300">${JSON.stringify(scenario.evidence || {}, null, 2)}</pre>
      </div>
    `;

    // 3. Traceability
    const trEl = containerEl.querySelector('#panel-trace');
    trEl.innerHTML = `
      <div class="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-3 font-mono text-xs">
        <div class="text-teal-400 font-bold mb-1">// REQUIREMENT-TO-DEFECT TRACEABILITY CHAIN</div>
        <div class="p-3 rounded-lg bg-zinc-900/90 border border-zinc-700/80 text-zinc-300">
          ${scenario.evidence && scenario.evidence.traceability ? scenario.evidence.traceability : 'User Story -> AC -> Test -> Defect'}
        </div>
        <p class="text-zinc-400">Maintained in Jira / Azure DevOps with strict verification gate before merge.</p>
      </div>
    `;

    // 4. Risks & Defects
    const rkEl = containerEl.querySelector('#panel-risks');
    rkEl.innerHTML = `
      <div class="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-2 text-xs">
        <div class="font-mono text-teal-400 font-bold mb-1">// DEFECT TRIAGE & RESIDUAL RISK REGISTER</div>
        <p class="text-zinc-300"><strong>Identified Risk:</strong> ${scenario.businessImpact}</p>
        <p class="text-zinc-300"><strong>Mitigation:</strong> ${scenario.qaRecommendation}</p>
        <p class="text-zinc-400">Assurance ownership by Mazher Hussain (QA Delivery Lead). Stakeholder sign-off captured in Test Summary Report.</p>
      </div>
    `;
  }

  function runJourney(scenario) {
    if (isRunning) return;
    isRunning = true;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const runBtn = containerEl.querySelector('#paynowRunBtn');
    runBtn.disabled = true;
    runBtn.classList.add('opacity-50');

    announceStatus(`Starting payment journey for ${scenario.label}.`);

    if (reducedMotion) {
      renderScenario(scenario, true);
      isRunning = false;
      runBtn.disabled = false;
      runBtn.classList.remove('opacity-50');
      announceStatus(`Payment journey completed for ${scenario.label}. Result: ${scenario.status}.`);
      return;
    }

    let currentIdx = 0;
    activeInterval = setInterval(() => {
      if (currentIdx < coreStages.length) {
        const st = coreStages[currentIdx];
        const node = containerEl.querySelector(`#stage-${st.id}`);
        if (node) {
          node.classList.remove('is-pending');
          node.classList.add('is-active');
          const stageStatus = scenario.stages[st.id] || 'pending';
          const stTimeout = setTimeout(() => {
            node.classList.remove('is-active');
            node.classList.add(`is-${stageStatus}`);
            const icon = node.querySelector('.stage-node__icon');
            const statusEl = node.querySelector('.stage-node__status');
            if (stageStatus === 'pass') {
              icon.innerHTML = '✓';
              statusEl.textContent = 'Pass';
              statusEl.className = 'stage-node__status text-emerald-400 font-bold';
            } else if (stageStatus === 'fail') {
              icon.innerHTML = '✕';
              statusEl.textContent = 'Fail';
              statusEl.className = 'stage-node__status text-rose-400 font-bold';
            } else if (stageStatus === 'blocked') {
              icon.innerHTML = '⊘';
              statusEl.textContent = 'Blocked';
              statusEl.className = 'stage-node__status text-zinc-500';
            } else if (stageStatus === 'pending') {
              icon.innerHTML = '⏳';
              statusEl.textContent = 'Pending';
              statusEl.className = 'stage-node__status text-amber-400 font-medium';
            }
          }, 200);
          activeTimeouts.push(stTimeout);
        }
        currentIdx++;
      } else {
        clearInterval(activeInterval); activeInterval = null;
        isRunning = false;
        runBtn.disabled = false;
        runBtn.classList.remove('opacity-50');
        renderScenario(scenario, true);
        announceStatus(`Payment journey finished. Verdict: ${scenario.status.toUpperCase()}. Severity: ${scenario.severity}.`);
      }
    }, 280);
  }
}


  // === assets/js/labs/migration.js ===
/**
 * LABS/MIGRATION.JS - Migration Assurance Lab Runner (Demo 2)
 * Author: Mazher Hussain Digital Portfolio
 */
function initMigrationLab(containerEl, migrationData) {
  if (!containerEl || !migrationData) return;

  const datasets = migrationData.datasets || [];
  let currentDataset = datasets[0];
  let doughnutChart = null;
  let barChart = null;

  renderShell();
  bindEvents();
  renderDataset(currentDataset);

  function renderShell() {
    containerEl.innerHTML = `
      <div class="space-y-6">
        <!-- Lab Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></span>
              <span class="font-mono-kicker text-xs text-sky-400 font-bold uppercase tracking-wider">Demo 2 · Data Migration & ETL Assurance</span>
            </div>
            <h3 class="font-display font-black text-2xl text-white mt-1">IPONZ SaaS Migration Assurance Lab</h3>
            <p class="text-zinc-400 text-xs sm:text-sm mt-0.5">
              Source-to-target field reconciliation, automated transformation verification, and statutory discrepancy auditing.
            </p>
          </div>
          <div>
            <button id="migrationRunBtn" class="px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-display font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-sky-500/20">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              <span>Run Reconciliation</span>
            </button>
          </div>
        </div>

        <!-- Mandatory Synthetic Disclaimer -->
        <div class="demo-disclaimer-banner">
          <svg class="disclaimer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <strong>Mandatory Confidentiality Control:</strong> Portfolio demonstration using synthetic and sanitised data. No MBIE, IPONZ, customer, production or test-system data is used or connected.
          </div>
        </div>

        <!-- Dataset Selector Buttons -->
        <div>
          <label class="font-mono-kicker text-xs text-zinc-400 font-bold block mb-2">SELECT MIGRATION DATASET:</label>
          <div class="scenario-picker-container" id="migrationDatasetPicker" role="radiogroup" aria-label="Migration datasets">
            ${datasets.map((d, idx) => `
              <button 
                type="button" 
                role="radio" 
                aria-checked="${idx === 0 ? 'true' : 'false'}" 
                class="scenario-btn ${idx === 0 ? 'active' : ''}" 
                data-dataset-id="${d.id}">
                ${d.title}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Side-by-Side Record Comparison -->
        <div class="migration-diff-grid">
          <div class="diff-record-pane">
            <div class="diff-record-pane__header text-zinc-300">
              <span class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>LEGACY ORACLE SOURCE</span>
              </span>
              <span class="font-mono text-xs text-zinc-500">Schema: DEMO_LEGACY_DB (Synthetic)</span>
            </div>
            <div id="migrationSourceFields" class="space-y-2"></div>
          </div>

          <div class="diff-record-pane">
            <div class="diff-record-pane__header text-zinc-300">
              <span class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-teal-400"></span>
                <span>TARGET SAAS CLOUD</span>
              </span>
              <span class="font-mono text-xs text-zinc-500">Schema: DEMO_SAAS_TARGET (Synthetic)</span>
            </div>
            <div id="migrationTargetFields" class="space-y-2"></div>
          </div>
        </div>

        <!-- Field Discrepancy Detail Table -->
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="font-mono-kicker text-xs text-zinc-400 font-bold uppercase tracking-wider">// RECONCILIATION AUDIT LEDGER</span>
            <span class="font-mono text-xs text-zinc-400" id="migrationAuditCount"></span>
          </div>
          <div class="accessible-table-container">
            <table class="accessible-table" aria-label="Field reconciliation audit ledger">
              <thead>
                <tr>
                  <th scope="col">Field Name</th>
                  <th scope="col">Legacy Value</th>
                  <th scope="col">Target Value</th>
                  <th scope="col">Transformation Rule</th>
                  <th scope="col">Result</th>
                  <th scope="col">Risk / Impact</th>
                </tr>
              </thead>
              <tbody id="migrationAuditTableBody"></tbody>
            </table>
          </div>
        </div>

        <!-- Charts & Metric Visualisation (Doughnut & Horizontal Bar) -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
          <!-- Chart 1: Pass vs Fail Doughnut -->
          <div class="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="font-display font-bold text-sm text-white">Record Reconciliation Pass Rate</h4>
              <span class="font-mono text-xs text-zinc-400" id="migrationPassRateBadge"></span>
            </div>
            <div class="h-48 relative">
              <canvas id="migrationDoughnutCanvas" aria-label="Record reconciliation pass vs fail doughnut chart" role="img"></canvas>
            </div>
            <div class="text-xs text-zinc-400 font-mono" id="migrationDoughnutSummary"></div>
          </div>

          <!-- Chart 2: Discrepancy Count by Category Bar -->
          <div class="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="font-display font-bold text-sm text-white">Discrepancies by Field Category</h4>
              <span class="font-mono text-xs text-teal-400">Total Records: <span id="migrationTotalRecords"></span></span>
            </div>
            <div class="h-48 relative">
              <canvas id="migrationBarCanvas" aria-label="Discrepancies by category bar chart" role="img"></canvas>
            </div>
            <div class="text-xs text-zinc-400 font-mono" id="migrationBarSummary"></div>
          </div>
        </div>

        <!-- Simulated SQL Query Drawer -->
        <div class="trace-drawer">
          <div class="trace-drawer__summary" id="migrationSqlToggle" role="button" tabindex="0" aria-expanded="false">
            <span>[+] VIEW SIMULATED RECONCILIATION SQL (PORTFOLIO METHOD EXAMPLE)</span>
            <span class="text-xs text-zinc-500">Click to expand</span>
          </div>
          <div class="trace-drawer__content" id="migrationSqlContent" hidden>
            <pre class="text-sky-300 font-mono text-xs overflow-x-auto">${migrationData.simulatedSQL}</pre>
          </div>
        </div>
      </div>
    `;
  }

  function bindEvents() {
    const picker = containerEl.querySelector('#migrationDatasetPicker');
    picker.querySelectorAll('.scenario-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        picker.querySelectorAll('.scenario-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
        const dsId = btn.getAttribute('data-dataset-id');
        currentDataset = datasets.find(d => d.id === dsId) || datasets[0];
        renderDataset(currentDataset);
        announceStatus(`Loaded ${currentDataset.title}.`);
      });
    });

    const runBtn = containerEl.querySelector('#migrationRunBtn');
    runBtn.addEventListener('click', () => {
      renderDataset(currentDataset);
      announceStatus(`Reconciliation query completed for ${currentDataset.title}. Overall match rate: ${(currentDataset.matchRate * 100).toFixed(1)}%.`);
    });

    // SQL toggle
    const sqlToggle = containerEl.querySelector('#migrationSqlToggle');
    const sqlContent = containerEl.querySelector('#migrationSqlContent');
    const toggleHandler = () => {
      const isExpanded = sqlToggle.getAttribute('aria-expanded') === 'true';
      sqlToggle.setAttribute('aria-expanded', !isExpanded);
      sqlContent.hidden = isExpanded;
      sqlToggle.querySelector('span:first-child').textContent = isExpanded 
        ? '[+] VIEW SIMULATED RECONCILIATION SQL (PORTFOLIO METHOD EXAMPLE)' 
        : '[-] HIDE SIMULATED RECONCILIATION SQL';
    };
    sqlToggle.addEventListener('click', toggleHandler);
    sqlToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleHandler();
      }
    });
  }

  function renderDataset(dataset) {
    const records = dataset.records || [];
    
    // 1. Render Left & Right Field Panes
    const srcEl = containerEl.querySelector('#migrationSourceFields');
    const tgtEl = containerEl.querySelector('#migrationTargetFields');

    srcEl.innerHTML = records.map(r => `
      <div class="diff-field-row is-${r.type}">
        <span class="text-zinc-400">${r.field}:</span>
        <span class="font-bold text-white">${r.legacy}</span>
      </div>
    `).join('');

    tgtEl.innerHTML = records.map(r => `
      <div class="diff-field-row is-${r.type}">
        <span class="text-zinc-400">${r.field}:</span>
        <span class="font-bold ${r.status === 'pass' ? (r.type === 'transformed' ? 'text-sky-400' : 'text-emerald-400') : 'text-rose-400'}">
          ${r.target}
        </span>
      </div>
    `).join('');

    // 2. Render Audit Table
    const tableBody = containerEl.querySelector('#migrationAuditTableBody');
    tableBody.innerHTML = records.map(r => {
      const badgeClass = r.status === 'pass' 
        ? (r.type === 'transformed' ? 'status--pass text-sky-400 border-sky-500/40' : 'status--pass') 
        : 'status--fail';
      const label = r.status === 'pass' 
        ? (r.type === 'transformed' ? 'Transformed' : 'Exact Match') 
        : 'Discrepancy';
      return `
        <tr>
          <td class="font-mono font-bold text-white">${r.field}</td>
          <td class="font-mono text-zinc-300">${r.legacy}</td>
          <td class="font-mono font-bold ${r.status === 'pass' ? (r.type === 'transformed' ? 'text-sky-300' : 'text-emerald-400') : 'text-rose-400'}">${r.target}</td>
          <td class="text-zinc-400 text-xs">${r.rule}</td>
          <td><span class="status-badge ${badgeClass}">${label}</span></td>
          <td class="text-xs ${r.status === 'fail' ? 'text-rose-300 font-semibold' : 'text-zinc-400'}">${r.impact || 'Verified valid'}</td>
        </tr>
      `;
    }).join('');

    containerEl.querySelector('#migrationAuditCount').textContent = `${records.length} Fields Evaluated`;
    const srcMatchRate = dataset.legacyTotal > 0 ? (dataset.passCount / dataset.legacyTotal) * 100 : 0;
    containerEl.querySelector('#migrationPassRateBadge').textContent = `Source-Based Match Rate: ${srcMatchRate.toFixed(1)}%`;
    const netDiff = Math.abs(dataset.legacyTotal - dataset.targetTotal);
    containerEl.querySelector('#migrationTotalRecords').textContent = `${dataset.legacyTotal.toLocaleString()} source / ${dataset.targetTotal.toLocaleString()} target (diff: ${netDiff})`;

    // 3. Render Charts
    renderCharts(dataset);
  }

  function renderCharts(dataset) {
    if (typeof Chart === 'undefined') return;

    // Destroy existing instances if any
    if (doughnutChart) doughnutChart.destroy();
    if (barChart) barChart.destroy();

    // Chart 1: Doughnut Pass vs Fail
    const doughnutCanvas = containerEl.querySelector('#migrationDoughnutCanvas');
    const defaults = getAccessibleChartDefaults();

    doughnutChart = new Chart(doughnutCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Reconciled (Pass)', 'Discrepancies (Fail)'],
        datasets: [{
          data: [dataset.passCount, dataset.failCount],
          backgroundColor: [ChartColors.success, ChartColors.danger],
          borderColor: '#0b1526',
          borderWidth: 2
        }]
      },
      options: {
        ...defaults,
        cutout: '65%'
      }
    });

    containerEl.querySelector('#migrationDoughnutSummary').textContent = 
      `Summary (Source-Based): ${dataset.passCount.toLocaleString()} / ${dataset.legacyTotal.toLocaleString()} passed (${((dataset.passCount / dataset.legacyTotal)*100).toFixed(1)}%), ${dataset.failCount.toLocaleString()} failed.`;

    // Chart 2: Horizontal Bar Discrepancies by Category
    const barCanvas = containerEl.querySelector('#migrationBarCanvas');
    const catData = dataset.discrepanciesByCategory || {};
    const catLabels = Object.keys(catData);
    const catValues = Object.values(catData);

    barChart = new Chart(barCanvas, {
      type: 'bar',
      data: {
        labels: catLabels,
        datasets: [{
          label: 'Discrepancies',
          data: catValues,
          backgroundColor: ChartColors.info,
          borderColor: ChartColors.border,
          borderWidth: 1,
          borderRadius: 4
        }]
      },
      options: {
        ...defaults,
        indexAxis: 'y',
        scales: {
          x: {
            grid: { color: 'rgba(255,255,255,0.06)' },
            ticks: { color: ChartColors.muted, font: { family: "'JetBrains Mono', monospace" } }
          },
          y: {
            grid: { display: false },
            ticks: { color: ChartColors.text, font: { family: "'JetBrains Mono', monospace", size: 10 } }
          }
        }
      }
    });

    containerEl.querySelector('#migrationBarSummary').textContent = 
      `Categories audited: ${catLabels.join(', ')}.`;
  }
}


  // === assets/js/labs/release.js ===
/**
 * LABS/RELEASE.JS - Release Readiness Lab Runner (Demo 3)
 * Author: Mazher Hussain Digital Portfolio
 */
function initReleaseLab(containerEl, releaseData) {
  if (!containerEl || !releaseData) return;

  const builds = releaseData.builds || [];
  let currentBuild = builds[1]; // default to Build 2
  let execChart = null;
  let defectChart = null;

  renderShell();
  bindEvents();
  renderBuild(currentBuild);

  function renderShell() {
    containerEl.innerHTML = `
      <div class="space-y-6">
        <!-- Lab Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="font-mono-kicker text-xs text-emerald-400 font-bold uppercase tracking-wider">Demo 3 · Executive Decision Support</span>
            </div>
            <h3 class="font-display font-black text-2xl text-white mt-1">Release Readiness & Go/No-Go Governance Lab</h3>
            <p class="text-zinc-400 text-xs sm:text-sm mt-0.5">
              Converting execution telemetry, defect severity, and residual risk into defensible stakeholder release decisions.
            </p>
          </div>
          <div class="flex items-center gap-2">
            <button id="releasePrintBtn" class="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-mono text-xs flex items-center gap-2 transition-colors" aria-label="Print release summary">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print Sign-Off</span>
            </button>
          </div>
        </div>

        <!-- Mandatory Synthetic Disclaimer -->
        <div class="demo-disclaimer-banner">
          <svg class="disclaimer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <strong>Important Governance Rule:</strong> Portfolio demonstration using synthetic demonstration data. The algorithm is illustrative. Real release decisions require project-specific risk acceptance, operational readiness and accountable stakeholder approval.
          </div>
        </div>

        <!-- Build Selector -->
        <div>
          <label class="font-mono-kicker text-xs text-zinc-400 font-bold block mb-2">SELECT BUILD CANDIDATE:</label>
          <div class="scenario-picker-container" id="releaseBuildPicker" role="radiogroup" aria-label="Release builds">
            ${builds.map((b, idx) => `
              <button 
                type="button" 
                role="radio" 
                aria-checked="${b.id === currentBuild.id ? 'true' : 'false'}" 
                class="scenario-btn ${b.id === currentBuild.id ? 'active' : ''}" 
                data-build-id="${b.id}">
                ${b.name}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- KPI Summary Cards -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div class="metric-card">
            <span class="metric-card__label">Test Execution</span>
            <span class="metric-card__value" id="kpiExecution"></span>
            <span class="font-mono text-[10px] text-zinc-500">Target: >= 95.0%</span>
          </div>
          <div class="metric-card">
            <span class="metric-card__label">Requirements Coverage</span>
            <span class="metric-card__value" id="kpiCoverage"></span>
            <span class="font-mono text-[10px] text-zinc-500">Target: >= 98.0%</span>
          </div>
          <div class="metric-card">
            <span class="metric-card__label">Critical Defects</span>
            <span class="metric-card__value" id="kpiCritical"></span>
            <span class="font-mono text-[10px] text-zinc-500">Target: Strictly 0 Open</span>
          </div>
          <div class="metric-card">
            <span class="metric-card__label">High Defects</span>
            <span class="metric-card__value" id="kpiHigh"></span>
            <span class="font-mono text-[10px] text-zinc-500">Target: 0 or Mitigated</span>
          </div>
        </div>

        <!-- Decision Engine Banner -->
        <div class="decision-banner" id="releaseDecisionBanner">
          <span class="font-mono text-xs uppercase tracking-widest font-bold">EXECUTIVE GOVERNANCE RECOMMENDATION</span>
          <div class="decision-banner__badge" id="releaseDecisionBadge"></div>
          <p class="text-sm max-w-xl text-zinc-300" id="releaseDecisionRule"></p>
        </div>

        <!-- Readiness Gates Meter -->
        <div class="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="font-display font-bold text-sm text-white">Quality Gate Evaluation Checklist</h4>
            <span class="font-mono text-xs text-zinc-400">Strict Decision Policy</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" id="releaseGatesGrid"></div>
        </div>

        <!-- Charts (Execution Chart & Defect Severity Breakdown) -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="font-display font-bold text-sm text-white">Execution Telemetry</h4>
              <span class="font-mono text-xs text-zinc-400">Pass / Fail / Blocked / Not Run</span>
            </div>
            <div class="h-48 relative">
              <canvas id="releaseExecCanvas" aria-label="Test execution status chart" role="img"></canvas>
            </div>
            <div class="text-xs text-zinc-400 font-mono" id="releaseExecSummary"></div>
          </div>

          <div class="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="font-display font-bold text-sm text-white">Defect Severity Breakdown</h4>
              <span class="font-mono text-xs text-zinc-400">Critical / High / Medium / Low</span>
            </div>
            <div class="h-48 relative">
              <canvas id="releaseDefectCanvas" aria-label="Defect severity distribution chart" role="img"></canvas>
            </div>
            <div class="text-xs text-zinc-400 font-mono" id="releaseDefectSummary"></div>
          </div>
        </div>

        <!-- Residual Risk & Operational Triage Panel -->
        <div class="risk-qa-panel">
          <div class="risk-qa-panel__header">
            <span class="font-display font-bold text-sm text-white">Residual Risk & Operational Mitigation</span>
            <span class="font-mono text-xs text-amber-400">Triage Owner: QA Delivery Lead</span>
          </div>
          <div class="risk-qa-panel__content" id="releaseResidualRisk"></div>
          <div class="risk-qa-panel__recommendation">
            <strong>Release Sign-Off Requirement:</strong> Production release requires written business risk acceptance from Product Owner and verified operational fallback procedures.
          </div>
        </div>
      </div>
    `;
  }

  function bindEvents() {
    const picker = containerEl.querySelector('#releaseBuildPicker');
    picker.querySelectorAll('.scenario-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        picker.querySelectorAll('.scenario-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
        const bId = btn.getAttribute('data-build-id');
        currentBuild = builds.find(b => b.id === bId) || builds[0];
        renderBuild(currentBuild);
        announceStatus(`Evaluated ${currentBuild.name}. Recommendation: ${currentBuild.recommendation}.`);
      });
    });

    const printBtn = containerEl.querySelector('#releasePrintBtn');
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  function renderBuild(build) {
    // 1. Update KPIs
    const _vals = (build.chartData && build.chartData.datasets && build.chartData.datasets[0] && build.chartData.datasets[0].data) || [0,0,0,0];
    const _tot = _vals.reduce((a, b) => a + b, 0);
    const _execPct = _tot > 0 ? (((_vals[0] + _vals[1]) / _tot) * 100) : (build.execution * 100);
    containerEl.querySelector('#kpiExecution').textContent = `${_execPct.toFixed(1)}%`;
    containerEl.querySelector('#kpiCoverage').textContent = `${(build.requirementsCoverage * 100).toFixed(1)}%`;
    
    const critEl = containerEl.querySelector('#kpiCritical');
    critEl.textContent = build.criticalOpen;
    critEl.className = `metric-card__value ${build.criticalOpen > 0 ? 'text-rose-400' : 'text-emerald-400'}`;

    const highEl = containerEl.querySelector('#kpiHigh');
    highEl.textContent = build.highOpen;
    highEl.className = `metric-card__value ${build.highOpen > 0 ? 'text-amber-400' : 'text-emerald-400'}`;

    // 2. Decision Banner
    const banner = containerEl.querySelector('#releaseDecisionBanner');
    banner.className = `decision-banner ${build.recommendation.toLowerCase().replace(' ', '-')}`;
    containerEl.querySelector('#releaseDecisionBadge').textContent = build.recommendation;
    containerEl.querySelector('#releaseDecisionRule').textContent = build.ruleTriggered;

    // 3. Readiness Gates
    const gatesGrid = containerEl.querySelector('#releaseGatesGrid');
    gatesGrid.innerHTML = (build.gates || []).map(g => {
      const isPass = g.status === 'pass';
      const isCond = g.status === 'conditional';
      const badgeClass = isPass ? 'status--pass' : isCond ? 'status--conditional' : 'status--fail';
      const icon = isPass ? '✓' : isCond ? '▲' : '✕';
      return `
        <div class="p-3 rounded-lg bg-zinc-900 border border-zinc-700/80 flex flex-col justify-between gap-1">
          <span class="font-mono text-[11px] text-zinc-400">${g.name}</span>
          <div class="flex items-center justify-between mt-1">
            <span class="font-display font-bold text-sm text-white">${g.value}</span>
            <span class="status-badge ${badgeClass}">${icon} ${g.status.toUpperCase()}</span>
          </div>
        </div>
      `;
    }).join('');

    // 4. Residual Risk
    containerEl.querySelector('#releaseResidualRisk').innerHTML = `<p>${build.residualRisk}</p>`;

    // 5. Render Charts
    renderCharts(build);
  }

  function renderCharts(build) {
    if (typeof Chart === 'undefined') return;

    if (execChart) execChart.destroy();
    if (defectChart) defectChart.destroy();

    const defaults = getAccessibleChartDefaults();

    // Chart 1: Execution Doughnut
    const execCanvas = containerEl.querySelector('#releaseExecCanvas');
    const cd = build.chartData || { labels: [], datasets: [{ data: [] }] };
    const execValues = cd.datasets[0].data;

    execChart = new Chart(execCanvas, {
      type: 'doughnut',
      data: {
        labels: cd.labels,
        datasets: [{
          data: execValues,
          backgroundColor: [ChartColors.success, ChartColors.danger, ChartColors.blocked, ChartColors.muted],
          borderColor: '#0b1526',
          borderWidth: 2
        }]
      },
      options: {
        ...defaults,
        cutout: '60%'
      }
    });

    containerEl.querySelector('#releaseExecSummary').textContent = 
      `Passed: ${execValues[0]}, Failed: ${execValues[1]}, Blocked: ${execValues[2]} (excluded from execution %), Not Run: ${execValues[3]} — Executed: ${execValues[0] + execValues[1]}/${execValues.reduce((a,b)=>a+b,0)} (${(((execValues[0]+execValues[1])/execValues.reduce((a,b)=>a+b,0))*100).toFixed(1)}%).`;

    // Chart 2: Defect Bar
    const defectCanvas = containerEl.querySelector('#releaseDefectCanvas');
    const db = build.defectBreakdown || {};

    defectChart = new Chart(defectCanvas, {
      type: 'bar',
      data: {
        labels: Object.keys(db),
        datasets: [{
          label: 'Open Defects',
          data: Object.values(db),
          backgroundColor: [ChartColors.danger, ChartColors.warning, ChartColors.info, ChartColors.muted],
          borderColor: ChartColors.border,
          borderWidth: 1,
          borderRadius: 4
        }]
      },
      options: {
        ...defaults,
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: ChartColors.text, font: { family: "'JetBrains Mono', monospace" } }
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.06)' },
            ticks: { stepSize: 2, color: ChartColors.muted, font: { family: "'JetBrains Mono', monospace" } }
          }
        }
      }
    });

    containerEl.querySelector('#releaseDefectSummary').textContent = 
      `Critical: ${db.Critical || 0}, High: ${db.High || 0}, Medium: ${db.Medium || 0}, Low: ${db.Low || 0}.`;
  }
}


  // === assets/js/labs/3ds.js ===
/**
 * LABS/3DS.JS - 3DS Authentication Lab Runner (Demo 4)
 * Author: Mazher Hussain Digital Portfolio
 */
function init3DSLab(containerEl, tdsData) {
  if (!containerEl || !tdsData) return;

  const scenarios = tdsData.scenarios || [];
  const languages = tdsData.languages || {};
  let currentLang = 'en';
  let currentScenario = scenarios[0];

  renderShell();
  bindEvents();
  renderScenario(currentScenario);

  function renderShell() {
    containerEl.innerHTML = `
      <div class="space-y-6">
        <!-- Lab Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse"></span>
              <span class="font-mono-kicker text-xs text-indigo-400 font-bold uppercase tracking-wider">Demo 4 · Card Security & Multilingual Assurance</span>
            </div>
            <h3 class="font-display font-black text-2xl text-white mt-1">NZeTA 3-D Secure 2.0 Authentication Lab</h3>
            <p class="text-zinc-400 text-xs sm:text-sm mt-0.5">
              Simulating EMV 3DS 2.0 Challenge flows, frictionless risk assessments, and bilingual traveller guidance.
            </p>
          </div>
          <div class="flex items-center gap-2">
            <span class="font-mono text-xs text-zinc-400">Language:</span>
            <div class="inline-flex rounded-lg border border-zinc-700 bg-zinc-900 p-0.5" role="group" aria-label="Select language">
              <button id="langEnBtn" class="px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-teal-500 text-zinc-950 transition-all">English</button>
              <button id="langZhBtn" class="px-2.5 py-1 text-xs font-mono font-bold rounded-md text-zinc-400 hover:text-white transition-all">中文 (简体)</button>
            </div>
          </div>
        </div>

        <!-- Mandatory Synthetic Disclaimer -->
        <div class="demo-disclaimer-banner">
          <svg class="disclaimer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <strong>Safety & Confidentiality Control:</strong> Portfolio demonstration using synthetic guidance copy. No real card fields, cardholder data, or bank branding are used or connected.
          </div>
        </div>

        <!-- Scenario Picker -->
        <div>
          <label class="font-mono-kicker text-xs text-zinc-400 font-bold block mb-2">SELECT AUTHENTICATION SCENARIO:</label>
          <div class="scenario-picker-container" id="tdsScenarioPicker" role="radiogroup" aria-label="3DS scenarios">
            ${scenarios.map((s, idx) => `
              <button 
                type="button" 
                role="radio" 
                aria-checked="${idx === 0 ? 'true' : 'false'}" 
                class="scenario-btn ${idx === 0 ? 'active' : ''}" 
                data-scenario-id="${s.id}">
                ${s.label}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Simulator Browser & QA Panel Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <!-- Left: Simulated Browser Frame -->
          <div class="browser-simulator-frame w-full">
            <div class="browser-simulator-header">
              <span class="browser-dot bg-rose-500"></span>
              <span class="browser-dot bg-amber-500"></span>
              <span class="browser-dot bg-emerald-500"></span>
              <div class="browser-address-bar">https://nzeta.immigration.govt.nz/secure-payment</div>
            </div>
            
            <div class="p-6 bg-zinc-950 text-white space-y-4" id="tdsSimulatorBody">
              <!-- Content rendered dynamically -->
            </div>
          </div>

          <!-- Right: QA Verification & Risk Panel -->
          <div class="space-y-4">
            <div class="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
              <div class="flex items-center justify-between pb-2 border-b border-zinc-800">
                <span class="font-display font-bold text-sm text-white">Cryptographic Protocol Telemetry</span>
                <span class="font-mono text-xs text-teal-400">EMV 3DS Core v2.2.0</span>
              </div>
              <div class="grid grid-cols-2 gap-3 text-xs font-mono">
                <div class="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <span class="text-zinc-500 block text-[10px]">AUTH RESULT CODE</span>
                  <span class="font-bold text-white text-sm" id="tdsResultCode">-</span>
                </div>
                <div class="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <span class="text-zinc-500 block text-[10px]">ELECTRONIC COMMERCE IND (ECI)</span>
                  <span class="font-bold text-white text-sm" id="tdsEciCode">-</span>
                </div>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
              <span class="font-display font-bold text-sm text-white block">QA Verification Checklist</span>
              <div class="space-y-2" id="tdsChecksList"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function bindEvents() {
    const picker = containerEl.querySelector('#tdsScenarioPicker');
    picker.querySelectorAll('.scenario-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        picker.querySelectorAll('.scenario-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
        const sId = btn.getAttribute('data-scenario-id');
        currentScenario = scenarios.find(s => s.id === sId) || scenarios[0];
        renderScenario(currentScenario);
        announceStatus(`Loaded 3DS scenario: ${currentScenario.label}.`);
      });
    });

    const enBtn = containerEl.querySelector('#langEnBtn');
    const zhBtn = containerEl.querySelector('#langZhBtn');

    enBtn.addEventListener('click', () => {
      currentLang = 'en';
      enBtn.className = 'px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-teal-500 text-zinc-950 transition-all';
      zhBtn.className = 'px-2.5 py-1 text-xs font-mono font-bold rounded-md text-zinc-400 hover:text-white transition-all';
      renderScenario(currentScenario);
      announceStatus("Language switched to English.");
    });

    zhBtn.addEventListener('click', () => {
      currentLang = 'zh';
      zhBtn.className = 'px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-teal-500 text-zinc-950 transition-all';
      enBtn.className = 'px-2.5 py-1 text-xs font-mono font-bold rounded-md text-zinc-400 hover:text-white transition-all';
      renderScenario(currentScenario);
      announceStatus("Language switched to Simplified Chinese.");
    });
  }

  function renderScenario(scenario) {
    const copy = languages[currentLang] || languages.en;
    const bodyEl = containerEl.querySelector('#tdsSimulatorBody');

    containerEl.querySelector('#tdsResultCode').textContent = scenario.authResult;
    containerEl.querySelector('#tdsEciCode').textContent = scenario.eci;

    const isPass = scenario.status === 'pass';

    bodyEl.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between pb-3 border-b border-zinc-800">
          <div>
            <div class="font-display font-black text-sm text-teal-400 uppercase tracking-wide">NZeTA Payment Gateway</div>
            <div class="text-[11px] text-zinc-400">Total Due: $180.00 NZD (IVL + NZeTA Fee)</div>
          </div>
          <span class="text-xs font-mono text-zinc-500">Session ID: #98421</span>
        </div>

        <div class="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
          <h4 class="font-display font-bold text-sm text-white">${copy.title}</h4>
          <p class="text-xs text-zinc-300 leading-relaxed">${copy.prompt}</p>
          <div class="p-3 rounded-lg bg-zinc-950/70 border border-zinc-800 text-[11px] text-zinc-400">
            ${copy.instructions}
          </div>
          
          <div class="flex items-center gap-2 pt-2">
            <input 
              type="text" 
              value="482910" 
              readonly 
              class="w-32 bg-zinc-950 border border-zinc-700 text-center font-mono font-bold text-white text-sm rounded-lg py-1.5 focus:outline-none" 
              aria-label="${copy.otpPlaceholder}" />
            <button class="px-4 py-1.5 rounded-lg ${isPass ? 'bg-teal-500 text-zinc-950' : 'bg-rose-500 text-white'} font-mono font-bold text-xs uppercase">
              ${copy.submitBtn}
            </button>
          </div>
        </div>

        <div class="p-3 rounded-lg ${isPass ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-rose-500/10 border-rose-500/30 text-rose-300'} border text-xs">
          <strong>Authentication Status:</strong> ${isPass ? copy.successMsg : (scenario.id === '3ds-unavailable' ? copy.unavailableMsg : copy.declineMsg)}
        </div>
      </div>
    `;

    // Render QA checks
    const checksEl = containerEl.querySelector('#tdsChecksList');
    checksEl.innerHTML = (scenario.qaChecks || []).map(c => `
      <div class="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs flex flex-col gap-1">
        <div class="flex items-center justify-between">
          <span class="font-bold text-white">${c.name}</span>
          <span class="status-badge ${c.result === 'Pass' ? 'status--pass' : 'status--fail'}">${c.result}</span>
        </div>
        <span class="text-zinc-400 text-[11px]">${c.note}</span>
      </div>
    `).join('');
  }
}


  // === assets/js/labs/accessibility.js ===
/**
 * LABS/ACCESSIBILITY.JS - Accessibility & Inclusive Design Lab (Demo 5)
 * Author: Mazher Hussain Digital Portfolio
 */
function initAccessibilityLab(containerEl, a11yData) {
  if (!containerEl || !a11yData) return;

  const modes = a11yData.modes || [];
  let currentMode = modes[0];

  renderShell();
  bindEvents();
  renderMode(currentMode);

  function renderShell() {
    containerEl.innerHTML = `
      <div class="space-y-6">
        <!-- Lab Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse"></span>
              <span class="font-mono-kicker text-xs text-purple-400 font-bold uppercase tracking-wider">Demo 5 · WCAG 2.1 / 2.2 AA Compliance</span>
            </div>
            <h3 class="font-display font-black text-2xl text-white mt-1">Accessibility & Inclusive Design Lab</h3>
            <p class="text-zinc-400 text-xs sm:text-sm mt-0.5">
              Demonstrating keyboard navigation, screen reader transcripts, 400% reflow, error handling, and measured contrast ratios.
            </p>
          </div>
          <div>
            <span class="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs">
              NZ Govt Web Standards 1.1
            </span>
          </div>
        </div>

        <!-- Mode Picker Buttons -->
        <div>
          <label class="font-mono-kicker text-xs text-zinc-400 font-bold block mb-2">SELECT ACCESSIBILITY MODULE:</label>
          <div class="scenario-picker-container" id="a11yModePicker" role="radiogroup" aria-label="Accessibility modules">
            ${modes.map((m, idx) => `
              <button 
                type="button" 
                role="radio" 
                aria-checked="${idx === 0 ? 'true' : 'false'}" 
                class="scenario-btn ${idx === 0 ? 'active' : ''}" 
                data-mode-id="${m.id}">
                ${m.title}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Interactive Demonstration Area -->
        <div id="a11yActiveContent" class="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-6">
          <!-- Populated dynamically -->
        </div>
      </div>
    `;
  }

  function bindEvents() {
    const picker = containerEl.querySelector('#a11yModePicker');
    picker.querySelectorAll('.scenario-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        picker.querySelectorAll('.scenario-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
        const mId = btn.getAttribute('data-mode-id');
        currentMode = modes.find(m => m.id === mId) || modes[0];
        renderMode(currentMode);
        announceStatus(`Viewing ${currentMode.title}. Standard: ${currentMode.standard}.`);
      });
    });
  }

  function renderMode(mode) {
    const contentEl = containerEl.querySelector('#a11yActiveContent');

    if (mode.id === 'keyboard-nav') {
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div>
              <h4 class="font-display font-bold text-lg text-white">${mode.title}</h4>
              <p class="font-mono text-xs text-teal-400">${mode.standard}</p>
            </div>
            <div class="flex items-center gap-2">
              <span class="font-mono text-xs text-zinc-400">Toggle Mode:</span>
              <button id="toggleFocusBtn" class="px-3 py-1.5 rounded-lg bg-teal-500 text-zinc-950 font-mono text-xs font-bold">
                Showing: Compliant (Focus Visible)
              </button>
            </div>
          </div>
          <p class="text-xs text-zinc-300 leading-relaxed">${mode.description}</p>
          
          <div class="p-6 rounded-xl bg-zinc-900 border border-zinc-800 space-y-4" id="keyboardFormBox">
            <div class="space-y-1">
              <label for="a11yInput1" class="font-mono text-xs text-zinc-300 block">Traveller Passport Number:</label>
              <input id="a11yInput1" type="text" placeholder="LA991204" class="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-400" />
            </div>
            <div class="space-y-1">
              <label for="a11yInput2" class="font-mono text-xs text-zinc-300 block">Issuing Country (ISO 3166):</label>
              <input id="a11yInput2" type="text" placeholder="NZL" class="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-400" />
            </div>
            <div class="flex items-center gap-2 pt-2">
              <input id="a11yCheckbox" type="checkbox" class="w-4 h-4 rounded bg-zinc-950 border-zinc-700 text-teal-500 focus:ring-2 focus:ring-teal-400" />
              <label for="a11yCheckbox" class="text-xs text-zinc-300">I declare that all details supplied are true and verifiable.</label>
            </div>
            <button id="a11ySubmitDemoBtn" class="px-5 py-2.5 rounded-xl bg-teal-500 text-zinc-950 font-display font-bold text-xs uppercase focus:outline-none focus:ring-2 focus:ring-teal-400">
              Submit Declaration
            </button>
          </div>
        </div>
      `;

      let isCompliant = true;
      const toggleBtn = contentEl.querySelector('#toggleFocusBtn');
      const box = contentEl.querySelector('#keyboardFormBox');

      toggleBtn.addEventListener('click', () => {
        isCompliant = !isCompliant;
        toggleBtn.textContent = isCompliant ? 'Showing: Compliant (Focus Visible)' : 'Showing: Faulty (Outline: None)';
        toggleBtn.className = isCompliant 
          ? 'px-3 py-1.5 rounded-lg bg-teal-500 text-zinc-950 font-mono text-xs font-bold'
          : 'px-3 py-1.5 rounded-lg bg-rose-500 text-white font-mono text-xs font-bold';

        box.querySelectorAll('input, button').forEach(el => {
          if (isCompliant) {
            el.classList.add('focus:ring-2', 'focus:ring-teal-400');
            el.classList.remove('focus:ring-0', 'outline-none');
          } else {
            el.classList.remove('focus:ring-2', 'focus:ring-teal-400');
            el.classList.add('focus:ring-0', 'outline-none');
          }
        });
        announceStatus(`Switched to ${isCompliant ? 'compliant focus' : 'faulty outline-none'} mode.`);
      });
    } else if (mode.id === 'screen-reader') {
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="pb-3 border-b border-zinc-800">
            <h4 class="font-display font-bold text-lg text-white">${mode.title}</h4>
            <p class="font-mono text-xs text-teal-400">${mode.standard}</p>
          </div>
          <p class="text-xs text-zinc-300 leading-relaxed">${mode.description}</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
              <span class="status-badge status--pass">ACCESSIBLE IMPLEMENTATION</span>
              <p class="text-xs text-zinc-300 font-mono mt-2"><strong>NVDA Screen Reader Announcement:</strong></p>
              <div class="p-3 rounded-lg bg-zinc-950 font-mono text-xs text-emerald-300">
                ${mode.accessibleAnnouncement}
              </div>
              <p class="text-[11px] text-zinc-400">Button has explicit text, role, state, and contextual payment metadata.</p>
            </div>

            <div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-2">
              <span class="status-badge status--fail">FAULTY / UNLABELLED IMPLEMENTATION</span>
              <p class="text-xs text-zinc-300 font-mono mt-2"><strong>NVDA Screen Reader Announcement:</strong></p>
              <div class="p-3 rounded-lg bg-zinc-950 font-mono text-xs text-rose-300">
                ${mode.faultyAnnouncement}
              </div>
              <p class="text-[11px] text-zinc-400">Zero accessible name or aria-label provided; assistive users are blocked.</p>
            </div>
          </div>
        </div>
      `;
    } else if (mode.id === 'reflow-400') {
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div>
              <h4 class="font-display font-bold text-lg text-white">${mode.title}</h4>
              <p class="font-mono text-xs text-teal-400">${mode.standard}</p>
            </div>
            <button id="toggle320Btn" class="px-3 py-1.5 rounded-lg bg-sky-500 text-zinc-950 font-mono text-xs font-bold">
              Toggle 320px Viewport Simulation
            </button>
          </div>
          <p class="text-xs text-zinc-300 leading-relaxed">${mode.description}</p>

          <div class="reflow-test-box is-320px" id="reflowBox">
            <div class="text-center font-mono text-xs text-sky-400 font-bold mb-3">
              [ 320 CSS Pixels Viewport Width ]
            </div>
            <div class="space-y-3">
              <div class="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                <span class="text-xs font-bold text-white block">Step 01: Identification</span>
                <span class="text-[11px] text-zinc-400 block mt-1">Single column wrap with zero horizontal overflow.</span>
              </div>
              <div class="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                <span class="text-xs font-bold text-white block">Step 02: Verification</span>
                <span class="text-[11px] text-zinc-400 block mt-1">Form buttons stack vertically with full finger tap targets.</span>
              </div>
              <button class="w-full py-2 bg-teal-500 text-zinc-950 font-bold text-xs rounded-lg uppercase">
                Continue Form
              </button>
            </div>
          </div>
        </div>
      `;

      const toggle320Btn = contentEl.querySelector('#toggle320Btn');
      const reflowBox = contentEl.querySelector('#reflowBox');
      let is320 = true;
      toggle320Btn.addEventListener('click', () => {
        is320 = !is320;
        reflowBox.classList.toggle('is-320px', is320);
        toggle320Btn.textContent = is320 ? 'Showing: 320px Simulated Width' : 'Showing: 100% Fluid Width';
        announceStatus(`Viewport width toggled to ${is320 ? '320px' : '100%'}.`);
      });
    } else if (mode.id === 'error-summary') {
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="pb-3 border-b border-zinc-800">
            <h4 class="font-display font-bold text-lg text-white">${mode.title}</h4>
            <p class="font-mono text-xs text-teal-400">${mode.standard}</p>
          </div>
          <p class="text-xs text-zinc-300 leading-relaxed">${mode.description}</p>

          <div class="p-4 rounded-xl bg-rose-500/10 border-2 border-rose-500/40 space-y-3" role="alert" aria-labelledby="error-heading">
            <h5 id="error-heading" class="font-display font-bold text-sm text-rose-400 flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              <span>There are 2 problems in this payment submission:</span>
            </h5>
            <ul class="list-disc list-inside text-xs text-rose-200 space-y-1 font-mono">
              <li><a href="#demo-expiry" class="underline hover:text-white">Expiry date must be in the future (MM/YY format)</a></li>
              <li><a href="#demo-cvv" class="underline hover:text-white">Security code (CVV) must contain 3 digits</a></li>
            </ul>
          </div>
        </div>
      `;
    } else if (mode.id === 'color-contrast') {
      const measurements = mode.measurements || [];
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="pb-3 border-b border-zinc-800">
            <h4 class="font-display font-bold text-lg text-white">${mode.title}</h4>
            <p class="font-mono text-xs text-teal-400">${mode.standard}</p>
          </div>
          <p class="text-xs text-zinc-300 leading-relaxed">${mode.description}</p>

          <div class="accessible-table-container">
            <table class="accessible-table" aria-label="Color contrast evaluation table">
              <thead>
                <tr>
                  <th scope="col">UI Element & Color Pairing</th>
                  <th scope="col">Measured Ratio</th>
                  <th scope="col">WCAG Verdict</th>
                </tr>
              </thead>
              <tbody>
                ${measurements.map(m => `
                  <tr>
                    <td class="font-mono text-zinc-300">${m.element}</td>
                    <td class="font-mono font-bold text-white">${m.ratio}</td>
                    <td>
                      <span class="status-badge ${m.verdict.includes('PASS') ? 'status--pass' : 'status--fail'}">
                        ${m.verdict}
                      </span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }
  }
}


  // === assets/js/labs/ai-quality.js ===
/**
 * LABS/AI-QUALITY.JS - AI Quality Engineering Lab Runner (Demo 6)
 * Author: Mazher Hussain Digital Portfolio
 */
function initAIQualityLab(containerEl, aiData) {
  if (!containerEl || !aiData) return;

  const promptScenarios = aiData.prompts?.scenarios || [];
  const agents = aiData.agents?.agents || [];
  const artefactCase = aiData.artefacts?.case || {};
  const codeSnippets = aiData.code?.snippets || [];
  const dataValidation = aiData.dataValidation?.recordsSample || [];

  let activeTab = 'prompt-studio';
  let donutChart = null;

  renderShell();
  bindEvents();
  renderTabContent(activeTab);

  function renderShell() {
    containerEl.innerHTML = `
      <div class="space-y-6">
        <!-- Lab Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse"></span>
              <span class="font-mono-kicker text-xs text-purple-400 font-bold uppercase tracking-wider">Demo 6 · Human-Led AI Governance</span>
            </div>
            <h3 class="font-display font-black text-2xl text-white mt-1">AI Quality Engineering & Governance Lab</h3>
            <p class="text-zinc-400 text-xs sm:text-sm mt-0.5">
              Demonstrating structured prompt engineering, task-specific QA agents, artefact validation, code review, and human-in-the-loop sign-off.
            </p>
          </div>
          <div class="shrink-0 flex items-center">
            <span class="whitespace-nowrap px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/40 text-purple-300 font-mono text-xs font-semibold shadow-sm inline-flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
              AI Proposes. QA Verifies. Humans Accountable.
            </span>
          </div>
        </div>

        <!-- Mandatory Synthetic Disclaimer -->
        <div class="demo-disclaimer-banner">
          <svg class="disclaimer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <strong>Confidentiality & Determinism Control:</strong> Static demonstration using deterministic synthetic JSON fixtures. No portfolio content, prompts, CV data or project details are sent to a public language model API.
          </div>
        </div>

        <!-- Module Navigation Buttons -->
        <div>
          <label class="font-mono-kicker text-xs text-zinc-400 font-bold block mb-2">SELECT INTERACTIVE AI QA MODULE:</label>
          <div class="scenario-picker-container" id="aiModulePicker" role="tablist" aria-label="AI Quality Modules">
            <button role="tab" aria-selected="true" class="scenario-btn active" data-tab="prompt-studio">1. Prompt Studio</button>
            <button role="tab" aria-selected="false" class="scenario-btn" data-tab="agent-workshop">2. Agent Workshop</button>
            <button role="tab" aria-selected="false" class="scenario-btn" data-tab="artefact-validator">3. Artefact Validator</button>
            <button role="tab" aria-selected="false" class="scenario-btn" data-tab="code-review">4. Code Review Lab</button>
            <button role="tab" aria-selected="false" class="scenario-btn" data-tab="data-validation">5. Data & ML Validation</button>
            <button role="tab" aria-selected="false" class="scenario-btn" data-tab="approval-gate">6. Human Approval Gate</button>
          </div>
        </div>

        <!-- Active Module Content -->
        <div id="aiActiveModuleContent" class="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-6">
          <!-- Populated dynamically -->
        </div>
      </div>
    `;
  }

  function bindEvents() {
    const picker = containerEl.querySelector('#aiModulePicker');
    picker.querySelectorAll('.scenario-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        picker.querySelectorAll('.scenario-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        activeTab = btn.getAttribute('data-tab');
        renderTabContent(activeTab);
        announceStatus(`Switched to AI module: ${btn.textContent.trim()}.`);
      });
    });
  }

  function renderTabContent(tab) {
    const contentEl = containerEl.querySelector('#aiActiveModuleContent');

    if (tab === 'prompt-studio') {
      const scenario = promptScenarios[0] || {};
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="pb-3 border-b border-zinc-800">
            <h4 class="font-display font-bold text-lg text-white">Prompt Studio: Weak vs Structured Prompt Pattern</h4>
            <p class="font-mono text-xs text-purple-400">Context framing, constraints, acceptance checks and reusable prompt design</p>
          </div>

          <div class="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs">
            <strong class="text-teal-400 block font-mono mb-1">// INPUT REQUIREMENT (SOURCE OF TRUTH)</strong>
            <p class="text-zinc-200">${scenario.inputRequirement}</p>
          </div>

          <!-- Structured Pattern Architecture Strip -->
          <div class="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-2 text-xs">
            <span class="font-mono text-purple-300 font-bold uppercase tracking-wider block">Mazher's 6-Part Structured Prompt Architecture:</span>
            <div class="grid grid-cols-2 md:grid-cols-6 gap-2 pt-1 font-mono text-[11px]">
              <div class="p-2 rounded bg-zinc-900/80 border border-purple-500/20"><strong class="text-purple-300 block">1. ROLE</strong>Senior QA Lead</div>
              <div class="p-2 rounded bg-zinc-900/80 border border-purple-500/20"><strong class="text-purple-300 block">2. SOURCE</strong>BRD &amp; AC only</div>
              <div class="p-2 rounded bg-zinc-900/80 border border-purple-500/20"><strong class="text-purple-300 block">3. TASK</strong>Positive + Edge</div>
              <div class="p-2 rounded bg-zinc-900/80 border border-purple-500/20"><strong class="text-purple-300 block">4. CONSTRAINTS</strong>No inventions</div>
              <div class="p-2 rounded bg-zinc-900/80 border border-purple-500/20"><strong class="text-purple-300 block">5. OUTPUT</strong>Traceable matrix</div>
              <div class="p-2 rounded bg-zinc-900/80 border border-purple-500/20"><strong class="text-purple-300 block">6. VALIDATE</strong>Gap &amp; Sign-off</div>
            </div>
          </div>

          <!-- Before vs After Output Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-2">
            <!-- Weak Prompt Output -->
            <div class="p-4 rounded-xl bg-zinc-900/90 border border-rose-500/30 space-y-3">
              <div class="flex items-center justify-between">
                <span class="status-badge status--fail">WEAK / UNSTRUCTURED PROMPT</span>
                <span class="font-mono text-[10px] text-zinc-500">2 Generic Checks</span>
              </div>
              <div class="p-2.5 rounded bg-zinc-950 font-mono text-xs text-zinc-300">
                "${scenario.weakPrompt?.text}"
              </div>
              <div class="font-mono text-xs text-rose-300 p-2.5 rounded bg-rose-950/20 border border-rose-500/20 whitespace-pre-wrap">
${scenario.weakPrompt?.output}
              </div>
              <p class="text-[11px] text-zinc-400"><strong>Critique:</strong> ${scenario.weakPrompt?.critique}</p>
            </div>

            <!-- Structured Prompt Output -->
            <div class="p-4 rounded-xl bg-zinc-900/90 border border-emerald-500/30 space-y-3">
              <div class="flex items-center justify-between">
                <span class="status-badge status--pass">MAZHER'S STRUCTURED PROMPT</span>
                <span class="font-mono text-[10px] text-emerald-400">4 Defensible Tests</span>
              </div>
              <div class="p-2.5 rounded bg-zinc-950 font-mono text-xs text-zinc-300">
                ${scenario.structuredPrompt?.text.replace(/\n/g, '<br/>')}
              </div>
              <div class="space-y-1.5 pt-1">
                ${(scenario.structuredPrompt?.output || []).map(t => `
                  <div class="p-2 rounded bg-zinc-950/80 border border-zinc-800 text-[11px] flex items-start justify-between gap-2">
                    <div>
                      <strong class="font-mono text-teal-400">${t.id} (${t.type}):</strong>
                      <span class="text-zinc-300 block">${t.action}</span>
                      <span class="text-zinc-500 block text-[10px] mt-0.5">Expected: ${t.expected}</span>
                    </div>
                    <span class="status-badge ${t.risk === 'High' ? 'status--fail' : 'status--pass'} text-[9px]">${t.risk}</span>
                  </div>
                `).join('')}
              </div>
              <p class="text-[11px] text-emerald-300"><strong>Quality Impact:</strong> ${scenario.structuredPrompt?.qaImpact}</p>
            </div>
          </div>
        </div>
      `;
    } else if (tab === 'agent-workshop') {
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="pb-3 border-b border-zinc-800">
            <h4 class="font-display font-bold text-lg text-white">Agent Workshop: Purpose, Boundaries & Guardrails</h4>
            <p class="font-mono text-xs text-purple-400">Inspecting 3 specialized QA agents designed for governed delivery</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${agents.map(ag => `
              <div class="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between gap-3">
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="w-2 h-2 rounded-full bg-purple-400"></span>
                    <span class="font-mono text-[10px] text-zinc-500">${ag.id}</span>
                  </div>
                  <h5 class="font-display font-bold text-sm text-white">${ag.name}</h5>
                  <p class="text-xs text-zinc-300">${ag.purpose}</p>
                </div>

                <div class="space-y-2 text-[11px] pt-2 border-t border-zinc-800 font-mono">
                  <div>
                    <strong class="text-purple-300 block">Guardrails & Boundaries:</strong>
                    <span class="text-zinc-400">${ag.boundaries}</span>
                  </div>
                  <div>
                    <strong class="text-teal-400 block">Escalation Trigger:</strong>
                    <span class="text-zinc-400">${ag.escalationTrigger}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (tab === 'artefact-validator') {
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="pb-3 border-b border-zinc-800">
            <h4 class="font-display font-bold text-lg text-white">AI Artefact Validator: Human-in-the-Loop Review</h4>
            <p class="font-mono text-xs text-purple-400">Auditing AI-generated test specs against requirements to eliminate hallucinations</p>
          </div>

          <!-- Coverage Improvement Bar -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="metric-card">
              <span class="metric-card__label">Initial AI Coverage</span>
              <span class="metric-card__value text-amber-400">71%</span>
              <span class="font-mono text-[10px] text-zinc-500">2 Hallucinated Assumptions</span>
            </div>
            <div class="metric-card">
              <span class="metric-card__label">After Human Review</span>
              <span class="metric-card__value text-emerald-400">96%</span>
              <span class="font-mono text-[10px] text-zinc-500">4 Critical Negative Tests Added</span>
            </div>
            <div class="metric-card">
              <span class="metric-card__label">Hallucinations Caught</span>
              <span class="metric-card__value text-rose-400">2</span>
              <span class="font-mono text-[10px] text-zinc-500">Filtered from Suite</span>
            </div>
            <div class="metric-card">
              <span class="metric-card__label">Artefact Status</span>
              <span class="metric-card__value text-teal-400 text-lg pt-2">APPROVED</span>
              <span class="font-mono text-[10px] text-zinc-500">Sign-off by Mazher Hussain</span>
            </div>
          </div>

          <!-- Findings List -->
          <div class="space-y-2 pt-2">
            <span class="font-mono text-xs text-zinc-400 font-bold block uppercase">// HUMAN REVIEW FINDINGS & REMEDIATION LOG:</span>
            ${(artefactCase.humanReviewFindings || []).map(f => `
              <div class="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row md:items-start justify-between gap-3 text-xs">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="font-mono font-bold text-white">${f.id} · ${f.type}</span>
                    <span class="status-badge ${f.severity === 'Critical' ? 'status--fail' : 'status--warning'} text-[9px]">${f.severity}</span>
                  </div>
                  <p class="text-zinc-300">${f.description}</p>
                </div>
                <div class="md:text-right shrink-0">
                  <span class="font-mono text-[10px] text-teal-400 block font-bold">REMEDIATION:</span>
                  <span class="text-zinc-400 text-[11px]">${f.actionTaken}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (tab === 'code-review') {
      const snippet = codeSnippets[0] || {};
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="pb-3 border-b border-zinc-800">
            <h4 class="font-display font-bold text-lg text-white">Code Review Lab: AI-Generated vs Production-Ready</h4>
            <p class="font-mono text-xs text-purple-400">Side-by-side diff highlighting reliability, accessible locators, and network synchronization</p>
          </div>

          <div class="code-diff-container">
            <div class="code-diff-pane border-rose-500/30">
              <div class="code-diff-pane__header text-rose-400">
                <span>✕ Raw AI Generation (Flaky Anti-Pattern)</span>
                <span class="text-[10px] text-zinc-500">5s hardcoded sleep / Brittle CSS</span>
              </div>
              <pre class="text-rose-200"><code>${snippet.aiGeneratedCode}</code></pre>
            </div>

            <div class="code-diff-pane border-emerald-500/30">
              <div class="code-diff-pane__header text-emerald-400">
                <span>✓ Mazher's Production Revision (Deterministic)</span>
                <span class="text-[10px] text-emerald-400">Semantic roles / Webhook interception</span>
              </div>
              <pre class="text-emerald-200"><code>${snippet.mazherReview?.revisedCode}</code></pre>
            </div>
          </div>

          <div class="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1 text-xs">
            <span class="font-mono text-teal-400 font-bold block mb-1">// KEY REFACTORING IMPROVEMENTS:</span>
            <ul class="list-disc list-inside text-zinc-300 space-y-0.5">
              ${(snippet.mazherReview?.improvements || []).map(imp => `<li>${imp}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    } else if (tab === 'data-validation') {
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="pb-3 border-b border-zinc-800">
            <h4 class="font-display font-bold text-lg text-white">Data & ML Validation Lab: Synthetic Anomaly Auditing</h4>
            <p class="font-mono text-xs text-purple-400">Detecting model false positives and enforcing statutory compliance rules</p>
          </div>

          <div class="accessible-table-container">
            <table class="accessible-table" aria-label="ML reconciliation audit ledger">
              <thead>
                <tr>
                  <th scope="col">Record ID</th>
                  <th scope="col">Legacy Category</th>
                  <th scope="col">ML Predicted Category</th>
                  <th scope="col">Statutory Rule Target</th>
                  <th scope="col">Confidence</th>
                  <th scope="col">QA Verdict</th>
                </tr>
              </thead>
              <tbody>
                ${dataValidation.map(row => `
                  <tr>
                    <td class="font-mono text-white font-bold">${row.id}</td>
                    <td class="font-mono text-zinc-300">${row.legacyRecord.status}</td>
                    <td class="font-mono text-zinc-300">${row.mlPredictedCategory}</td>
                    <td class="font-mono font-bold ${row.discrepancy ? 'text-amber-400' : 'text-emerald-400'}">${row.ruleExpectedCategory}</td>
                    <td class="font-mono text-zinc-400">${(row.confidenceScore * 100).toFixed(0)}%</td>
                    <td>
                      <span class="status-badge ${row.discrepancy ? 'status--fail' : 'status--pass'}">
                        ${row.discrepancy ? 'DISCREPANCY OVERTURNED' : 'PASS'}
                      </span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <div class="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 space-y-1">
            <strong>Critical QA Finding (Row 1002):</strong> Machine learning classification assigned a standard tourist levy ($180 NZD) to an accredited diplomatic passport holder with 82% confidence. Mazher's statutory validation rule caught and overturned the false positive, preventing diplomatic protocol non-compliance.
          </div>
        </div>
      `;
    } else if (tab === 'approval-gate') {
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="pb-3 border-b border-zinc-800">
            <h4 class="font-display font-bold text-lg text-white">Human Approval Gate: Responsible AI Governance</h4>
            <p class="font-mono text-xs text-purple-400">Accountable human review required before any AI-generated artefact enters execution</p>
          </div>

          <div class="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
            <div class="flex items-center justify-between">
              <span class="font-mono text-xs text-zinc-400 font-bold uppercase">PENDING ARTEFACT: TC-3DS-019 (Mid-Session Locale Persistence)</span>
              <span class="status-badge status--ai-draft">STATE: AI DRAFT</span>
            </div>
            <p class="text-xs text-zinc-300">
              The Test Design Agent proposes adding an automated regression check ensuring Simplified Chinese session tokens remain active when switching back to English on receipt page.
            </p>

            <div class="flex items-center gap-3 pt-2">
              <button id="gateApproveBtn" class="px-4 py-2 rounded-lg bg-emerald-500 text-zinc-950 font-mono text-xs font-bold uppercase hover:bg-emerald-400 transition-colors">
                Approve for Execution
              </button>
              <button id="gateModifyBtn" class="px-4 py-2 rounded-lg bg-amber-500 text-zinc-950 font-mono text-xs font-bold uppercase hover:bg-amber-400 transition-colors">
                Modify &amp; Request Rework
              </button>
              <button id="gateRejectBtn" class="px-4 py-2 rounded-lg bg-rose-500 text-white font-mono text-xs font-bold uppercase hover:bg-rose-400 transition-colors">
                Reject &amp; Archive
              </button>
            </div>
          </div>

          <div id="gateDecisionOutput" class="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-400">
            Awaiting human reviewer decision...
          </div>
        </div>
      `;

      const outEl = contentEl.querySelector('#gateDecisionOutput');
      contentEl.querySelector('#gateApproveBtn').addEventListener('click', () => {
        outEl.className = 'p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-xs font-mono text-emerald-300';
        outEl.innerHTML = `<strong>DECISION RECORDED: APPROVED FOR USE</strong><br/>Reviewer: Mazher Hussain (QA Delivery Lead)<br/>Timestamp: ${new Date().toISOString()}<br/>Audit Hash: SHA-256: 4a9f82bc18`;
        announceStatus("Artefact approved for test execution.");
      });

      contentEl.querySelector('#gateModifyBtn').addEventListener('click', () => {
        outEl.className = 'p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-xs font-mono text-amber-300';
        outEl.innerHTML = `<strong>DECISION RECORDED: MODIFICATION REQUIRED</strong><br/>Reviewer: Mazher Hussain<br/>Finding: Add explicit verification of 320px mobile reflow before test suite integration.`;
        announceStatus("Artefact flagged for rework.");
      });

      contentEl.querySelector('#gateRejectBtn').addEventListener('click', () => {
        outEl.className = 'p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/40 text-xs font-mono text-rose-300';
        outEl.innerHTML = `<strong>DECISION RECORDED: REJECTED</strong><br/>Reviewer: Mazher Hussain<br/>Reason: Material hallucination inconsistent with BRD scope.`;
        announceStatus("Artefact rejected.");
      });
    }
  }
}


  // === assets/js/app.js ===
/**
 * APP.JS - Main Coordinator & Modular Portfolio Controller
 * Author: Mazher Hussain Digital Portfolio
 */







// Robust path and fallback resolver (Fixes DEF-01)
async function loadJSON(url) {
  const fileKey = url.split('/').pop();
  const isFileProtocol = window.location.protocol === 'file:';

  // On local file:// protocol, use embedded data directly to avoid browser CORS blocks
  if (isFileProtocol) {
    if (url.includes('credentials.json') && window.__CREDENTIALS_DATA__) return window.__CREDENTIALS_DATA__;
    if (window.__PORTFOLIO_DATA__ && window.__PORTFOLIO_DATA__[fileKey]) return window.__PORTFOLIO_DATA__[fileKey];
  }

  if (url.includes('credentials.json') && window.__CREDENTIALS_DATA__) {
    return window.__CREDENTIALS_DATA__;
  }

  const isDeepSubpage = /\/lab\/[^/]+\//.test(window.location.pathname);
  const isSubpage = window.location.pathname.includes('/certifications/') ||
                    window.location.pathname.includes('/lab/') ||
                    window.location.pathname.includes('/projects/') ||
                    window.location.pathname.includes('/toolkit/') ||
                    window.location.pathname.includes('/cv/') ||
                    window.location.pathname.includes('/experience/');

  const candidates = [
    url,
    isDeepSubpage ? '../../' + url : (isSubpage ? '../' + url : url),
    '../' + url,
    '../../' + url,
    './' + url,
    '/' + url
  ];

  for (const target of candidates) {
    try {
      const res = await fetch(target);
      if (res.ok) return await res.json();
    } catch (_) {
      // try next
    }
  }

  // Guaranteed fallback to embedded data so labs NEVER render empty!
  if (window.__PORTFOLIO_DATA__ && window.__PORTFOLIO_DATA__[fileKey]) {
    return window.__PORTFOLIO_DATA__[fileKey];
  }
  return null;
}

document.addEventListener('DOMContentLoaded', async () => {
  initHeroVFX();
  initAboutIntersections();
  // Mobile nav handled exclusively by single controller in script.js
  initCredentialsDrawer();
  initHomeLabTabs();
  await loadAndInitLabs();
});

// 1. Hero VFX: Quality Signal Network (Page 31)
function initHeroVFX() {
  const signalNodes = document.querySelectorAll('.signal-node');
  if (!signalNodes.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  // Pulse sequence across Validate -> Reconcile -> Release checkpoints
  const checkpoints = document.querySelectorAll('.hero-checkpoint');
  if (checkpoints.length) {
    let cpIndex = 0;
    setInterval(() => {
      checkpoints.forEach((cp, idx) => {
        cp.classList.toggle('active-pulse', idx === cpIndex);
      });
      cpIndex = (cpIndex + 1) % checkpoints.length;
    }, 2400);
  }
}

// 2. About Section Elevation: IntersectionObserver Reveals (Page 33)
function initAboutIntersections() {
  const capabilityCards = document.querySelectorAll('.about-capability-card');
  if (!capabilityCards.length || typeof IntersectionObserver === 'undefined') return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-4');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  capabilityCards.forEach(card => {
    card.classList.add('transition-all', 'duration-500', 'opacity-0', 'translate-y-4');
    observer.observe(card);
  });
}

// 3. Mobile Navigation Toggle
function initMobileNav() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navDrawer = document.getElementById('mobileNavDrawer');
  const closeBtn = document.getElementById('closeMobileNavBtn');

  if (!menuBtn || !navDrawer) return;

  menuBtn.addEventListener('click', () => {
    navDrawer.classList.remove('hidden');
    menuBtn.setAttribute('aria-expanded', 'true');
    trapModalFocus(navDrawer);
    announceStatus("Navigation menu opened.");
  });

  const closeMenu = () => {
    navDrawer.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.focus();
    announceStatus("Navigation menu closed.");
  };

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  navDrawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
}

// 4. Certification Detail Drawer (Page 17-18)
async function initCredentialsDrawer() {
  const credsData = await loadJSON('data/credentials.json');
  if (!credsData) return;

  const gridEl = document.getElementById('credentialsGrid');
  const filterBtns = document.querySelectorAll('.cred-filter-btn');
  const drawer = document.getElementById('credDetailDrawer');
  const drawerBody = document.getElementById('credDrawerBody');
  const closeDrawerBtn = document.getElementById('closeCredDrawerBtn');

  if (!gridEl) return;

  let currentCategory = 'all';

  function renderCards(cat) {
    const list = credsData.credentials || [];
    const filtered = cat === 'all' ? list : list.filter(c => c.category === cat);
    gridEl.innerHTML = filtered.map(c => {
      const isEarned = c.status === 'earned';
      const isProg = c.status === 'in-progress';
      const isUnconf = c.status === 'unconfirmed';
      const badgeClass = isEarned ? 'status--pass' : isProg ? 'status--warning' : 'status--pending';
      const statusLabel = isEarned ? 'EARNED' : isProg ? 'IN PROGRESS' : isUnconf ? 'STATUS UNCONFIRMED' : 'PLANNED';

      return `
        <div class="group p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-teal-500/40 hover:bg-zinc-900/80 transition-all cursor-pointer flex flex-col justify-between gap-3"
             data-cred-id="${c.id}" role="button" tabindex="0" aria-label="View details for ${c.title}">
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="font-mono text-[10px] text-zinc-500 uppercase">${c.issuer}</span>
              <span class="status-badge ${badgeClass} text-[9px]">${statusLabel}</span>
            </div>
            <h4 class="font-display font-bold text-sm text-white group-hover:text-teal-300 transition-colors">${c.title}</h4>
            <span class="font-mono text-xs text-sky-400 block">${c.shortTitle}</span>
          </div>
          <div class="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>${c.earnedDate ? `Awarded: ${c.earnedDate}` : `Target: ${c.targetDate || '2026'}`}</span>
            <span class="text-teal-400 group-hover:translate-x-0.5 transition-transform">Details →</span>
          </div>
        </div>
      `;
    }).join('');

    let lastCredTrigger = null;
    const closeCredDrawer = () => {
      if (!drawer || drawer.classList.contains('hidden')) return;
      drawer.classList.add('hidden');
      announceStatus("Credential drawer closed.");
      if (lastCredTrigger && typeof lastCredTrigger.focus === 'function') {
        lastCredTrigger.focus();
      }
    };
    window.__closeCredDrawer = closeCredDrawer;

    gridEl.querySelectorAll('[data-cred-id]').forEach(card => {
      const openDrawer = () => {
        const cId = card.getAttribute('data-cred-id');
        const cred = (credsData.credentials || []).find(c => c.id === cId);
        if (!cred || !drawer || !drawerBody) return;
        lastCredTrigger = card;
        
        drawerBody.innerHTML = `
          <div class="space-y-4">
            <div class="pb-3 border-b border-zinc-800">
              <span class="font-mono text-xs text-zinc-500 uppercase">${cred.issuer}</span>
              <h3 id="credDrawerTitle" class="font-display font-black text-xl text-white mt-1">${cred.title}</h3>
              <span class="font-mono text-xs text-sky-400">${cred.shortTitle}</span>
            </div>
            <div class="grid grid-cols-2 gap-3 text-xs font-mono">
              <div class="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                <span class="text-zinc-500 block text-[10px]">CREDENTIAL STATUS</span>
                <span class="font-bold text-white uppercase">${cred.status}</span>
              </div>
              <div class="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                <span class="text-zinc-500 block text-[10px]">VERIFICATION</span>
                <span class="font-bold ${cred.verified ? 'text-emerald-400' : 'text-zinc-500'}">${cred.verified ? 'EARNED' : (cred.status === 'in-progress' ? 'IN PROGRESS' : 'STATUS UNCONFIRMED')}</span>
              </div>
            </div>
            <div>
              <strong class="font-mono text-xs text-zinc-400 block mb-1">CAPABILITY RELEVANCE:</strong>
              <p class="text-xs text-zinc-300 leading-relaxed">${cred.relevance}</p>
            </div>
            <div>
              <strong class="font-mono text-xs text-zinc-400 block mb-1">SKILLS COVERED:</strong>
              <div class="flex flex-wrap gap-1.5">
                ${(cred.skills || []).map(s => `<span class="px-2 py-0.5 rounded bg-zinc-800 text-[11px] font-mono text-zinc-300">${s}</span>`).join('')}
              </div>
            </div>
            <div class="pt-3 flex flex-wrap items-center gap-3">
              ${cred.pdfUrl ? `
                <a href="${cred.pdfUrl.startsWith('docs/') && window.location.pathname.includes('/certifications/') ? '../' + cred.pdfUrl : cred.pdfUrl}" target="_blank" download class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-zinc-950 font-mono text-xs font-bold transition-all shadow-md">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  <span>Download Credential Summary ↓</span>
                </a>
                <a href="${cred.pdfUrl.startsWith('docs/') && window.location.pathname.includes('/certifications/') ? '../' + cred.pdfUrl : cred.pdfUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono text-xs font-medium transition-all">
                  <span>View Summary PDF ↗</span>
                </a>
              ` : ''}
              ${cred.verified && cred.credentialUrl ? `
                <a href="${cred.credentialUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono text-xs transition-all">
                  <span>Visit Issuer</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              ` : ''}
            </div>
          </div>
        `;
        drawer.classList.remove('hidden');
        trapModalFocus(drawer);
        announceStatus(`Viewing credentials for ${cred.title}.`);
      };

      card.addEventListener('click', openDrawer);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openDrawer();
        }
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category') || 'all';
      renderCards(currentCategory);
    });
  });

  if (closeDrawerBtn && drawer) {
    closeDrawerBtn.addEventListener('click', () => {
      if (window.__closeCredDrawer) window.__closeCredDrawer();
    });
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer && window.__closeCredDrawer) window.__closeCredDrawer();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !drawer.classList.contains('hidden')) {
        e.preventDefault();
        if (window.__closeCredDrawer) window.__closeCredDrawer();
      }
    });
  }

  renderCards('all');
}

// 5. Load Data & Initialize All Interactive Labs (Conditional Guard fixes DEF-01)
async function loadAndInitLabs() {
  const hasLabContainers = document.getElementById('paynowLabRoot') ||
                           document.getElementById('migrationLabRoot') ||
                           document.getElementById('releaseLabRoot') ||
                           document.getElementById('tdsLabRoot') ||
                           document.getElementById('a11yLabRoot') ||
                           document.getElementById('aiLabRoot') ||
                           document.getElementById('paynowLab') ||
                           document.getElementById('migrationLab') ||
                           document.getElementById('releaseLab') ||
                           document.getElementById('threeDsLab') ||
                           document.getElementById('accessibilityLab') ||
                           document.getElementById('aiQualityLab');
  if (!hasLabContainers) {
    return; // Do not make 10 lab-data requests on non-lab subpages like /certifications/!
  }

  const [paynowData, migrationData, releaseData, tdsData, a11yData, prompts, agents, artefacts, code, dataVal] = await Promise.all([
    loadJSON('data/paynow-scenarios.json'),
    loadJSON('data/migration-records.json'),
    loadJSON('data/release-builds.json'),
    loadJSON('data/3ds-scenarios.json'),
    loadJSON('data/accessibility-cases.json'),
    loadJSON('data/ai-prompt-scenarios.json'),
    loadJSON('data/ai-agent-patterns.json'),
    loadJSON('data/ai-artefact-reviews.json'),
    loadJSON('data/ai-code-reviews.json'),
    loadJSON('data/ai-data-validation.json')
  ]);

  // Tabbed QA Lab Suite on Homepage
  const paynowContainer = document.getElementById('paynowLabRoot');
  if (paynowContainer && paynowData) {
    initPayNowLab(paynowContainer, paynowData);
  }

  const migrationContainer = document.getElementById('migrationLabRoot');
  if (migrationContainer && migrationData) {
    initMigrationLab(migrationContainer, migrationData);
  }

  const releaseContainer = document.getElementById('releaseLabRoot');
  if (releaseContainer && releaseData) {
    initReleaseLab(releaseContainer, releaseData);
  }

  const tdsContainer = document.getElementById('tdsLabRoot');
  if (tdsContainer && tdsData) {
    init3DSLab(tdsContainer, tdsData);
  }

  const a11yContainer = document.getElementById('a11yLabRoot');
  if (a11yContainer && a11yData) {
    initAccessibilityLab(a11yContainer, a11yData);
  }

  // Standalone Lab Pages (/lab/paynow/, /lab/migration/, etc.)
  const standalonePaynow = document.getElementById('paynowLab');
  if (standalonePaynow && paynowData) initPayNowLab(standalonePaynow, paynowData);
  const standaloneMigration = document.getElementById('migrationLab');
  if (standaloneMigration && migrationData) initMigrationLab(standaloneMigration, migrationData);
  const standaloneRelease = document.getElementById('releaseLab');
  if (standaloneRelease && releaseData) initReleaseLab(standaloneRelease, releaseData);
  const standalone3ds = document.getElementById('threeDsLab');
  if (standalone3ds && tdsData) init3DSLab(standalone3ds, tdsData);
  const standaloneA11y = document.getElementById('accessibilityLab');
  if (standaloneA11y && a11yData) initAccessibilityLab(standaloneA11y, a11yData);
  const standaloneAi = document.getElementById('aiQualityLab');
  if (standaloneAi) initAIQualityLab(standaloneAi, { prompts, agents, artefacts, code, dataValidation: dataVal });

  const aiContainer = document.getElementById('aiLabRoot');
  if (aiContainer) {
    initAIQualityLab(aiContainer, {
      prompts,
      agents,
      artefacts,
      code,
      dataValidation: dataVal
    });
  }
}

// 6. Home Lab Master Tabs Controller
function initHomeLabTabs() {
  const tablist = document.getElementById('homeLabTablist');
  if (!tablist) return;

  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  const panels = [
    'lab-tab-paynow',
    'lab-tab-migration',
    'lab-tab-release',
    'lab-tab-3ds',
    'lab-tab-a11y',
    'lab-tab-ai'
  ];

  function selectTab(targetLab, shouldFocus = false) {
    tabs.forEach(tab => {
      const lab = tab.getAttribute('data-lab');
      const isTarget = lab === targetLab;
      const panelId = 'lab-tab-' + lab;
      tab.classList.toggle('active', isTarget);
      tab.setAttribute('aria-selected', isTarget ? 'true' : 'false');
      tab.setAttribute('tabindex', isTarget ? '0' : '-1');
      tab.setAttribute('aria-controls', panelId);
      if (isTarget && shouldFocus) tab.focus();
    });

    panels.forEach(pId => {
      const panel = document.getElementById(pId);
      if (panel) {
        panel.hidden = !pId.endsWith(targetLab);
      }
    });
  }

  // Initialize roving tabindex so tablist is a single Tab stop (Fixes U02)
  const initialActive = tabs.find(t => t.getAttribute('aria-selected') === 'true') || tabs[0];
  if (initialActive) {
    selectTab(initialActive.getAttribute('data-lab'), false);
  }

  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      const lab = tab.getAttribute('data-lab');
      selectTab(lab, false);
      announceStatus(`Switched to ${tab.textContent.trim()}.`);
    });

    tab.addEventListener('keydown', (e) => {
      let nextIdx = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextIdx = (idx + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        nextIdx = (idx - 1 + tabs.length) % tabs.length;
      } else if (e.key === 'Home') {
        nextIdx = 0;
      } else if (e.key === 'End') {
        nextIdx = tabs.length - 1;
      }
      if (nextIdx !== null) {
        e.preventDefault();
        const nextLab = tabs[nextIdx].getAttribute('data-lab');
        selectTab(nextLab, true);
        announceStatus(`Switched to ${tabs[nextIdx].textContent.trim()}.`);
      }
    });
  });

  // Connect "Launch Demo" buttons in Selected Work directly to tabs
  document.querySelectorAll('a[href="#lab"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = btn.closest('.p-6, .p-8');
      if (card) {
        const text = card.textContent || '';
        let target = 'paynow';
        if (text.includes('IPONZ')) target = 'migration';
        else if (text.includes('One NZ')) target = 'release';
        selectTab(target);
      }
    });
  });
}

// 7. Wire Hero CV Button to CV Modal
const heroCvBtn = document.getElementById('heroCvBtn');
if (heroCvBtn) {
  heroCvBtn.addEventListener('click', () => {
    const modal = document.getElementById('cvPreviewModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      trapModalFocus(modal);
      announceStatus("Executive CV Preview opened.");
    }
  });
}


})();
