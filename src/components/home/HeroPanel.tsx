const benefits = [
  "Paste the role you want",
  "Attach your current resume",
  "Review focused application drafts",
];

export default function HeroPanel() {
  return (
    <section className="relative overflow-hidden rounded-[2.75rem] border border-white/80 bg-white/88 px-6 py-10 shadow-[0_28px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-8 lg:px-10 lg:py-14">
      <div className="absolute right-8 top-8 hidden h-32 w-32 rounded-full bg-[conic-gradient(from_180deg,#111827,#2563eb,#14b8a6,#111827)] opacity-20 blur-xl md:block" />

      <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#2563eb]">
            Resume and cover letter assistant
          </p>

          <h2 className="mt-5 max-w-4xl font-heading text-5xl font-semibold leading-[0.95] tracking-[-0.075em] text-[#111827] text-balance sm:text-6xl lg:text-7xl">
            Turn a generic resume into a focused application.
          </h2>
        </div>

        <div className="rounded-[2rem] bg-[#111827] p-5 text-white shadow-[0_24px_70px_rgba(17,24,39,0.2)]">
          <p className="text-base leading-7 text-[#dbeafe]">
            JobFit takes the role description and your resume, then prepares the
            drafts you need to apply with more focus: a tighter resume and a
            cover letter that speaks to the job.
          </p>

          <div className="mt-6 grid gap-2">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3"
              >
                <span className="h-2 w-2 rounded-full bg-[#5eead4]" />
                <span className="text-sm font-medium text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
