import {
  CheckCircle2,
  CloudOff,
  Database,
  FileText,
  Wifi,
  XCircle,
} from "lucide-react";

const offlineFeatures = [
  "Saved study materials",
  "Reading",
  "Notes",
  "Flashcards",
  "Existing practice content",
  "Revision",
  "Focus sessions",
  "Local analytics",
];

const onlineFeatures = [
  "AI Tutor and AI generation",
  "Authentication",
  "Cloud synchronization",
  "Friends and Study Groups",
  "Leaderboard",
];

export function OfflineFirst() {
  return (
    <section className="section">
      <div className="container">
        <div className="overflow-hidden rounded-[2rem] border border-indigo-400/10 bg-gradient-to-br from-indigo-500/[0.09] via-[#121521] to-[#121521]">
          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_1fr] lg:p-14">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300">
                <CloudOff size={23} />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-indigo-400">
                Offline-first
              </p>

              <h2 className="mt-3 max-w-lg text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">
                Your study materials shouldn't disappear when your internet
                does.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                MyAcumen keeps core study data on your device so saved
                materials and offline study features can remain useful without
                requiring a constant internet connection.
              </p>

              <div className="mt-7 flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-black/20 p-4">
                <Database size={20} className="text-emerald-400" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Local study data
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Available even when you're offline
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.04] p-5">
                <div className="flex items-center gap-2">
                  <Wifi size={17} className="text-emerald-400" />
                  <h3 className="font-bold text-white">Works offline</h3>
                </div>

                <ul className="mt-5 space-y-3">
                  {offlineFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-xs leading-5 text-slate-400"
                    >
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 shrink-0 text-emerald-400"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-black/15 p-5">
                <div className="flex items-center gap-2">
                  <CloudOff size={17} className="text-indigo-400" />
                  <h3 className="font-bold text-white">Needs internet</h3>
                </div>

                <ul className="mt-5 space-y-3">
                  {onlineFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-xs leading-5 text-slate-400"
                    >
                      <XCircle
                        size={14}
                        className="mt-0.5 shrink-0 text-slate-600"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sm:col-span-2 flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
                <FileText size={18} className="text-slate-500" />
                <p className="text-xs leading-5 text-slate-500">
                  AI-powered features require an internet connection and the
                  required cloud/AI services to be configured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
