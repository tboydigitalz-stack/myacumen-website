import { Check } from "lucide-react";
import { featureCategories } from "../data/features";

export function Features() {
  return (
    <section id="features" className="section border-y border-white/[0.04] bg-white/[0.012]">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-400">
            Everything in one place
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">
            Built around the way students actually study.
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            Not a collection of disconnected tools. Each part of MyAcumen
            connects to the next step in your study workflow.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featureCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.id}
                className="rounded-3xl border border-white/[0.07] bg-[#121521] p-6 transition hover:border-indigo-400/20"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Icon size={21} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {category.title}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
                  {category.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {category.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2.5 text-sm text-slate-400"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-indigo-400"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
