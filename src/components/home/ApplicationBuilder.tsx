import { useApplicationBuilder } from "../../hooks/useApplicationBuilder";
import BuilderHeader from "./BuilderHeader";
import ResultsPanel from "./ResultsPanel";
import ResumeForm from "./ResumeForm";
import StatusPanel from "./StatusPanel";

export default function ApplicationBuilder() {
  const builder = useApplicationBuilder();

  return (
    <section className="rounded-4xl border border-white/80 bg-white/90 p-4 shadow-2xl backdrop-blur-xl sm:p-6 lg:p-7">
      <BuilderHeader
        loading={builder.loading}
        canGenerate={builder.canGenerate}
      />

      <div className="mt-6">
        <StatusPanel
          loading={builder.loading}
          hasJobDescription={builder.hasJobDescription}
          hasResumeFile={builder.hasResumeFile}
          hasResult={Boolean(builder.result)}
        />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2 xl:items-start">
        <ResumeForm
          jobDescription={builder.jobDescription}
          fileError={builder.fileError}
          resumeFile={builder.resumeFile}
          loading={builder.loading}
          canSubmit={builder.canGenerate}
          onJobDescriptionChange={builder.updateJobDescription}
          onResumeFileChange={builder.updateResumeFile}
          onSubmit={builder.generateDrafts}
        />

        <ResultsPanel
          loading={builder.loading}
          result={builder.result}
          error={builder.submitError}
          jobDescription={builder.jobDescription}
        />
      </div>
    </section>
  );
}
