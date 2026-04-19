const benefits = [
  "Paste the role you want",
  "Attach your current resume",
  "Review focused application drafts",
];

export default function HeroPanel() {
  return (
    <section className="relative overflow-hidden rounded-4xl border border-white/80 bg-white/90 px-6 py-10 shadow-2xl backdrop-blur-xl sm:px-8 lg:px-10 lg:py-14">
      <div className="absolute right-8 top-8 hidden h-32 w-32 rounded-full bg-gradient-to-br from-slate-900 via-blue-600 to-teal-500 opacity-20 blur-xl md:block" />

      <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Resume and cover letter assistant
          </p>

          <h2 className="mt-5 max-w-4xl font-heading text-5xl font-semibold leading-none tracking-tighter text-slate-900 text-balance sm:text-6xl lg:text-7xl">
            Turn a generic resume into a focused application.
          </h2>
        </div>

        <div className="rounded-4xl bg-slate-900 p-5 text-white shadow-2xl">
          <p className="text-base leading-7 text-blue-100">
            JobFit takes the role description and your resume, then prepares the
            drafts you need to apply with more focus: a tighter resume and a
            cover letter that speaks to the job.
          </p>

          <div className="mt-6 grid gap-2">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3"
              >
                <span className="h-2 w-2 rounded-full bg-teal-300" />
                <span className="text-sm font-medium text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
