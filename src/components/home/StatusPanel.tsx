import type { StatusPanelProps } from "../../types/app";

const getStatusItems = (
  loading: boolean,
  hasResult: boolean,
  hasJobDescription: boolean,
  hasResumeFile: boolean,
): Array<{ label: string; value: string; ready: boolean }> => [
  {
    label: "Resume",
    value: hasResumeFile ? "Ready" : "Waiting for upload",
    ready: hasResumeFile,
  },
  {
    label: "Job post",
    value: hasJobDescription ? "Ready" : "Waiting for text",
    ready: hasJobDescription,
  },
  {
    label: "Drafts",
    value: loading ? "Generating..." : hasResult ? "Ready" : "Waiting",
    ready: hasResult || loading,
  },
];

export default function StatusPanel({
  loading,
  hasResult,
  hasJobDescription,
  hasResumeFile,
}: StatusPanelProps) {
  const items = getStatusItems(
    loading,
    hasResult,
    hasJobDescription,
    hasResumeFile,
  );

  return (
    <section className="rounded-4xl border border-slate-200 bg-slate-50 p-3">
      <div className="grid gap-3 lg:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={item.label}
            className={`rounded-3xl border p-4 transition ${
              item.ready || (loading && item.label === "Drafts")
                ? "border-blue-200 bg-white shadow-lg"
                : "border-transparent bg-transparent"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold ${
                  item.ready
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                {index + 1}
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {item.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
