import type { BuilderHeaderProps } from "../../types/app";

export default function BuilderHeader({
  loading,
  canGenerate,
}: BuilderHeaderProps) {
  return (
    <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <h2 className="mt-2 font-heading text-3xl tracking-tighter text-slate-900 sm:text-4xl">
          Add inputs then review the generated drafts.
        </h2>
      </div>

      <div className="max-w-xl">
        <p className="text-sm leading-6 text-slate-600">
          Add a PDF resume and paste the job post. When both are ready generate
          a resume draft and a cover letter preview.
        </p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
          {loading
            ? "Generating now"
            : canGenerate
              ? "Ready to generate"
              : "Waiting for required input"}
        </p>
      </div>
    </div>
  );
}
