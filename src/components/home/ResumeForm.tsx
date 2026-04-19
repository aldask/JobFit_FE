import { useId } from "react";
import type { ResumeFormProps } from "../../types/app";
import FormSection from "./FormSection";

export default function ResumeForm({
  jobDescription,
  fileError,
  resumeFile,
  onSubmit,
  onJobDescriptionChange,
  onResumeFileChange,
  loading,
}: ResumeFormProps) {
  const fileInputId = useId();
  const descriptionId = useId();

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    onResumeFileChange(file);
    event.target.value = "";
  }

  return (
    <section className="rounded-4xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Input
          </p>
          <h2 className="mt-2 font-heading text-3xl tracking-tighter text-slate-900">
            Add the role and resume
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-6 text-slate-600">
          Give the model enough context to write for this specific opportunity.
        </p>
      </div>

      <div className="mt-5 space-y-5">
        <FormSection
          title="Resume PDF"
          description="Upload the resume you want the draft to improve."
        >
          <div className="flex flex-col gap-4 rounded-3xl border border-dashed border-slate-300 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {resumeFile ? resumeFile.name : "No resume uploaded"}
              </p>
              <p
                className={`mt-1 text-sm ${
                  fileError ? "text-red-600" : "text-slate-500"
                }`}
              >
                {fileError || "PDF format only for now."}
              </p>
            </div>

            <div>
              <label
                htmlFor={fileInputId}
                className="inline-flex cursor-pointer rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-600"
              >
                {resumeFile ? "Replace file" : "Upload PDF"}
              </label>
              <input
                id={fileInputId}
                type="file"
                accept="application/pdf"
                disabled={loading}
                onChange={handleFileChange}
                className="sr-only"
              />
            </div>
          </div>
        </FormSection>

        <FormSection
          title="Job Description"
          description="Paste the job post, requirements, and details the drafts should target."
        >
          <label htmlFor={descriptionId} className="sr-only">
            Job Description
          </label>
          <textarea
            id={descriptionId}
            value={jobDescription}
            disabled={loading}
            onChange={(event) => onJobDescriptionChange(event.target.value)}
            className="min-h-96 w-full rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-50"
            placeholder="Paste the job post here..."
          />
        </FormSection>
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-600">
          Add one PDF resume and a complete job description to continue.
        </p>

        <button
          disabled={loading || !resumeFile || !jobDescription}
          onClick={() => onSubmit({ resumeFile, jobDescription })}
          className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none sm:w-auto"
        >
          {loading ? "Generating..." : "Generate drafts"}
        </button>
      </div>
    </section>
  );
}
