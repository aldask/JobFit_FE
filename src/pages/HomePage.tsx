import { useState } from "react";
import BuilderHeader from "../components/home/BuilderHeader";
import HeroPanel from "../components/home/HeroPanel";
import ResultsPanel from "../components/home/ResultsPanel";
import ResumeForm from "../components/home/ResumeForm";
import StatusPanel from "../components/home/StatusPanel";
import { mockResumeResult } from "../data/mockResumeResult";
import type { ResumeInput, ResumeResult } from "../types/app";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResumeResult | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [fileError, setFileError] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const canGenerate = Boolean(resumeFile && jobDescription.trim());

  function handleJobDescriptionChange(value: string) {
    setJobDescription(value);
    setResult(null);
  }

  function handleResumeFileChange(file: File | null) {
    setFileError("");
    setResult(null);

    if (!file) {
      setResumeFile(null);
      return;
    }

    const isPdf =
      file.type === "application/pdf" ||
      file.name.toLowerCase().endsWith(".pdf");

    if (!isPdf) {
      setResumeFile(null);
      setFileError("Please upload a PDF resume.");
      return;
    }

    setResumeFile(file);
  }

  const handleSubmit = async (data: ResumeInput) => {
    if (!data.resumeFile || !data.jobDescription.trim() || loading) {
      return;
    }

    setLoading(true);

    console.log("sending to backend later:", data);

    setTimeout(() => {
      setResult(mockResumeResult);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-8 lg:space-y-10">
      <HeroPanel />

      <section className="rounded-4xl border border-white/80 bg-white/90 p-4 shadow-2xl backdrop-blur-xl sm:p-6 lg:p-7">
        <BuilderHeader loading={loading} canGenerate={canGenerate} />

        <div className="mt-6">
          <StatusPanel
            loading={loading}
            hasJobDescription={Boolean(jobDescription.trim())}
            hasResumeFile={Boolean(resumeFile)}
            hasResult={Boolean(result)}
          />
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-2 xl:items-start">
          <ResumeForm
            jobDescription={jobDescription}
            fileError={fileError}
            resumeFile={resumeFile}
            loading={loading}
            onJobDescriptionChange={handleJobDescriptionChange}
            onResumeFileChange={handleResumeFileChange}
            onSubmit={handleSubmit}
          />

          <ResultsPanel loading={loading} result={result} />
        </div>
      </section>
    </div>
  );
}
