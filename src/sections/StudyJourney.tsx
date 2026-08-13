import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  RotateCcw,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Add courses",
    description: "Set up the courses you're studying this semester.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Add materials",
    description: "Bring your PDFs and study resources into each course.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Study",
    description: "Read, take notes and use contextual study tools.",
    icon: Brain,
  },
  {
    number: "04",
    title: "Practice",
    description: "Test yourself with questions, CBTs and mock exams.",
    icon: ClipboardCheck,
  },
  {
    number: "05",
    title: "Review mistakes",
    description: "Turn incorrect answers into targeted revision.",
    icon: RotateCcw,
  },
  {
    number: "06",
    title: "Improve",
    description: "Track your progress and build better study habits.",
    icon: TrendingUp,
  },
];

export function StudyJourney() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-400">
            The study loop
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">
            One workflow for your entire semester.
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            MyAcumen connects the parts of studying that are usually scattered
            across different apps.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-indigo-400/20 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Icon size={21} />
                  </div>

                  <span className="text-xs font-bold text-slate-700">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="absolute -right-3 top-1/2 z-10 hidden text-indigo-500/40 lg:block"
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-500">
          {["Course", "Material", "Study", "Practice", "Mistakes", "Revision"].map(
            (item, index) => (
              <div key={item} className="flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                  {item}
                </span>
                {index < 5 && (
                  <ArrowRight size={13} className="text-slate-700" />
                )}
              </div>
            ),
          )}

          <CheckCircle2 size={15} className="ml-1 text-emerald-400" />
        </div>
      </div>
    </section>
  );
}
