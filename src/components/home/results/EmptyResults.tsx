export default function EmptyResults() {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6">
      <div className="max-w-md">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          Waiting for generation
        </p>
        <h3 className="mt-3 font-heading text-2xl tracking-tighter text-slate-900">
          Your drafts will appear here.
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Upload a resume, paste the job post, then generate. This panel will
          show the improved resume and cover letter.
        </p>
        <div className="mt-5 grid gap-2 text-sm text-slate-500 sm:grid-cols-2">
          <span className="rounded-full bg-white px-3 py-2">
            Resume rewrite
          </span>
          <span className="rounded-full bg-white px-3 py-2">Cover letter</span>
        </div>
      </div>
    </div>
  );
}
