import { Logo } from "./Logo";
import { siteConfig } from "../lib/config";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-slate-600">
              Your personal Student Study OS.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <a className="hover:text-white" href="#features">
              Features
            </a>
            <a className="hover:text-white" href="#download">
              Download
            </a>
            <a className="hover:text-white" href="#beta">
              Feedback
            </a>
            <a className="hover:text-white" href="#faq">
              FAQ
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/[0.05] pt-6 text-xs text-slate-700 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} MyAcumen</span>
          <span>Currently in beta</span>
        </div>

        <a
          href={siteConfig.feedbackUrl}
          className="sr-only"
          aria-hidden="true"
        >
          Feedback
        </a>
      </div>
    </footer>
  );
}
