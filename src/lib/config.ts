export const siteConfig = {
  name: "MyAcumen",
  tagline: "Your personal Student Study OS.",
  description:
    "Courses, study materials, practice, revision and progress — built around the way students actually study.",

  apkUrl: import.meta.env.VITE_MYACUMEN_APK_URL || "#download",
  version: import.meta.env.VITE_MYACUMEN_VERSION || "Beta",

  feedbackUrl:
    import.meta.env.VITE_MYACUMEN_FEEDBACK_URL || "#feedback",

  bugReportUrl:
    import.meta.env.VITE_MYACUMEN_BUG_REPORT_URL || "#feedback",

  featureRequestUrl:
    import.meta.env.VITE_MYACUMEN_FEATURE_REQUEST_URL || "#feedback",
} as const;

