import { Bug, Lightbulb, MessageSquare, Target } from "lucide-react";
import { siteConfig } from "../lib/config";

const questions = [
  "What confused you?",
  "What didn't work?",
  "What feature did you expect but couldn't find?",
  "What would make you use MyAcumen every day?",
];

export function BetaTesting() {
  const actions = [
    {
      label: "Report a Bug",
      icon: Bug,
      href: siteConfig.bugReportUrl,
    },
    {
      label: "Suggest a Feature",
      icon: Lightbulb,
      href: siteConfig.featureRequestUrl,
    },
    {
      label: "Give Feedback",
      icon: MessageSquare,
      href: siteConfig.feedbackUrl,
    },
  ];

  return (
    <section id="beta" className="section">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
              <Target size={22} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-indigo-400">
              Beta testing
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">
              Help shape MyAcumen.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              MyAcumen is an early release. Your real-world experience matters
              more than a simple "it works."
            </p>

            <div className="mt-7 grid gap-3">
              {actions.map((action) => {
                const Icon = action.icon;

                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-12 items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 text-sm font-semibold text-slate-200 transition hover:border-indigo-400/20 hover:bg-white/[0.05]"
                  >
                    <Icon size={17} className="text-indigo-400" />
                    {action.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-white/[0.07] bg-[#121521] p-6 sm:p-8">
            <p className="text-sm font-bold text-white">
              Don't just tell us that it works.
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Tell us where the experience breaks down or where you expected
              something different.
            </p>

            <div className="mt-7 space-y-3">
              {questions.map((question) => (
                <div
                  key={question}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 text-sm text-slate-300"
                >
                  {question}
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs leading-5 text-slate-600">
              Screenshots and short screen recordings are especially useful
              when reporting bugs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
