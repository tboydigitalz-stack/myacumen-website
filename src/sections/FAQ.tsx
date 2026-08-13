const questions = [
  {
    question: "What is MyAcumen?",
    answer:
      "MyAcumen is a Student Study OS designed to bring courses, study materials, practice, revision, focus tools and progress tracking into one workflow.",
  },
  {
    question: "Does MyAcumen work offline?",
    answer:
      "Yes. MyAcumen is designed around an offline-first model. Saved materials and several local study features can continue working without an internet connection.",
  },
  {
    question: "Do I need internet for everything?",
    answer:
      "No. Core local study features can work offline. AI tools, authentication, cloud sync and community features require internet access and the relevant services.",
  },
  {
    question: "Does it work on Android?",
    answer:
      "Yes. The current beta includes an Android application. A browser-based version is also supported.",
  },
  {
    question: "Is MyAcumen free?",
    answer:
      "MyAcumen is currently free during the beta period. Future pricing has not been finalized.",
  },
  {
    question: "What happens to my study materials?",
    answer:
      "MyAcumen uses local device storage for offline-first study data. Cloud-connected features may use online services when enabled.",
  },
  {
    question: "What is currently in beta?",
    answer:
      "The product is still being actively tested. Some features may require live cloud services, AI services or additional device testing. Beta feedback helps prioritize improvements.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section border-t border-white/[0.04]">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-400">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">
            Questions students may have.
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-white/[0.07] rounded-3xl border border-white/[0.07] bg-white/[0.02] px-6">
          {questions.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-sm font-semibold text-slate-200 [&::-webkit-details-marker]:hidden">
                {item.question}

                <span className="text-xl font-light text-slate-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="max-w-2xl pt-3 text-sm leading-6 text-slate-500">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
