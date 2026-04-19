export default function LoadingResult() {
  return (
    <div className="rounded-3xl border border-teal-100 bg-teal-50 p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            Generating drafts
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Reviewing the job post and resume context...
          </p>
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
          AI
        </span>
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white">
        <div className="loading-bar h-full w-2/3 rounded-full bg-gradient-to-r from-slate-900 via-blue-600 to-teal-500" />
      </div>
    </div>
  );
}
