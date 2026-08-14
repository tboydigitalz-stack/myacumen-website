export const siteConfig = {
  name: "MyAcumen",
  tagline: "Your personal Student Study OS.",
  description:
    "Courses, study materials, practice, revision and progress — built around the way students actually study.",

  // archive-acumen is PRIVATE (its assets 404 anonymously), so the beta APK is
  // published to THIS public repo instead. This stable URL always resolves to
  // the latest MyAcumen.apk — no per-release code change.
  apkUrl:
    import.meta.env.VITE_MYACUMEN_APK_URL ||
    "https://github.com/tboydigitalz-stack/myacumen-website/releases/latest/download/MyAcumen.apk",
  version: import.meta.env.VITE_MYACUMEN_VERSION || "1.3.0",

  feedbackUrl:
    import.meta.env.VITE_MYACUMEN_FEEDBACK_URL || "https://forms.gle/Ndm6aVN6zndJuLTX8",

  bugReportUrl:
    import.meta.env.VITE_MYACUMEN_BUG_REPORT_URL || "https://forms.gle/Ndm6aVN6zndJuLTX8",

  featureRequestUrl:
    import.meta.env.VITE_MYACUMEN_FEATURE_REQUEST_URL || "https://forms.gle/Ndm6aVN6zndJuLTX8",
} as const;
