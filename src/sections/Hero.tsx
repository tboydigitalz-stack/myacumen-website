import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Download,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "../lib/config";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-indigo-300">
            <Sparkles size={14} />
            MYACUMEN BETA
          </div>

          <h1 className="reveal mt-7 text-4xl font-black leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Your personal{" "}
            <span className="gradient-text">Student Study OS.</span>
          </h1>

          <p className="reveal mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Courses, study materials, practice, revision and progress —
            built around the way students actually study.
          </p>

          <div className="reveal mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={siteConfig.apkUrl}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 text-sm font-bold text-white shadow-xl shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-indigo-400"
            >
              <Download size={18} />
              Download Android Beta
            </a>

            <a
              href="#features"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.07]"
            >
              Explore MyAcumen
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-400" />
              Offline-first
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BookOpen size={14} className="text-indigo-400" />
              Built for students
            </span>
            <span>Android + Web</span>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative mx-auto max-w-[330px] rounded-[2.5rem] border border-white/10 bg-[#080a10] p-2 shadow-2xl shadow-indigo-950/40 sm:max-w-[370px]">
            <div className="overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#111522]">
              <div className="flex h-8 items-center justify-center">
                <div className="h-1.5 w-20 rounded-full bg-white/10" />
              </div>

              <div className="px-5 pb-7 pt-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-slate-500">GOOD MORNING</p>
                    <p className="mt-1 text-lg font-bold text-white">
                      Ready to study?
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-300">
                    <Sparkles size={17} />
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-indigo-400/15 bg-indigo-500/[0.08] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-indigo-300">
                    Continue studying
                  </p>
                  <p className="mt-2 text-sm font-bold text-white">
                    Computer Science
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Pick up where you left off
                  </p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[68%] rounded-full bg-indigo-400" />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    ["Practice", "24 questions"],
                    ["Revision", "8 due today"],
                  ].map(([title, subtitle]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3"
                    >
                      <p className="text-xs font-semibold text-white">
                        {title}
                      </p>
                      <p className="mt-1 text-[10px] text-slate-500">
                        {subtitle}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-white">
                      This week
                    </p>
                    <span className="text-[10px] text-slate-500">
                      Study time
                    </span>
                  </div>

                  <div className="mt-4 flex h-20 items-end justify-between gap-2">
                    {[30, 48, 38, 66, 52, 74, 42].map((height, index) => (
                      <div
                        key={index}
                        className="w-full rounded-t-md bg-indigo-500/30"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-7 max-w-lg text-center text-xs leading-5 text-slate-600">
          MyAcumen is currently in beta. Your feedback will directly shape
          future versions.
        </p>
      </div>
    </section>
  );
}
