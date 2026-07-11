# fixture.invalid-consent-with-voice-cloning.json
{
  "$schema": "../../docs/oral-history/schemas/participant-consent.schema.json",
  "title": "INVALID — synthetic dry run negative case",
  "type": "object",
  "projectCode": "OH-2026-900",
  "narratorCode": "SYNTHETIC-NARRATOR-001",
  "interviewConsented": true,
  "voiceCloningConsented": true,
  "modelTrainingConsented": true,
  "aiTranscriptionLocal": true,
  "aiTranslationLocal": true,
  "aiSummaryCloud": true,
  "aiNamedEntityExtraction": true,
  "publicDisplayName": "[讲述者化名]",
  "synthetic": true,
  "notes": "Deliberately invalid negative case: every cloud / training / voice-cloning field flipped to true without an audit-log attachment. Used to verify the future fixture validator can detect this anomaly."
}
