import {
  ArrowDownToLine,
  CheckCircle2,
  ExternalLink,
  Smartphone,
} from "lucide-react";
import { siteConfig } from "../lib/config";

export function Download() {
  return (
    <section id="download" className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] border border-indigo-400/15 bg-indigo-500/[0.07] px-6 py-12 text-center sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300">
              <Smartphone size={26} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-indigo-400">
              Android beta
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">
              Start studying with MyAcumen.
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
              Install the Android beta and help shape the next version of your
              Student Study OS.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={siteConfig.apkUrl}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 text-sm font-bold text-white shadow-xl shadow-indigo-500/20 transition hover:bg-indigo-400"
              >
                <ArrowDownToLine size={18} />
                Download MyAcumen APK
              </a>

              <span className="inline-flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 size={14} className="text-emerald-400" />
                Version {siteConfig.version}
              </span>
            </div>

            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/[0.07] bg-black/15 p-5 text-left">
              <h3 className="font-bold text-white">How to install</h3>

              <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Download the APK.",
                  "Open the downloaded file.",
                  "Allow installation if Android asks.",
                  "Install MyAcumen and open it.",
                ].map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-3 text-sm leading-6 text-slate-400"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-xs font-bold text-indigo-300">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-2 text-xs text-slate-600">
              <ExternalLink size={13} />
              Prefer a browser? MyAcumen can also be used as a web app.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
