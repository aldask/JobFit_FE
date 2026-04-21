import { useState } from "react";
import { generateApplicationDrafts } from "../api/applications";
import type { ResumeResult } from "../types/app";
import { validateResumeFile } from "../utils/resumeValidation";

export function useApplicationBuilder() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResumeResult | null>(null);
  const [submitError, setSubmitError] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [fileError, setFileError] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const hasJobDescription = Boolean(jobDescription.trim());
  const hasResumeFile = Boolean(resumeFile);
  const canGenerate = hasJobDescription && hasResumeFile && !loading;

  function updateJobDescription(value: string) {
    setJobDescription(value);
    clearOutput();
  }

  function updateResumeFile(file: File | null) {
    setFileError("");
    clearOutput();

    if (!file) {
      setResumeFile(null);
      return;
    }

    const validationError = validateResumeFile(file);

    if (validationError) {
      setResumeFile(null);
      setFileError(validationError);
      return;
    }

    setResumeFile(file);
  }

  async function generateDrafts() {
    if (!resumeFile || !hasJobDescription || loading) {
      return;
    }

    setLoading(true);
    setSubmitError("");

    try {
      const response = await generateApplicationDrafts({
        jobDescription,
        resumeFile,
      });
      setResult(response);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Could not generate drafts.",
      );
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  function clearOutput() {
    setResult(null);
    setSubmitError("");
  }

  return {
    canGenerate,
    fileError,
    generateDrafts,
    hasJobDescription,
    hasResumeFile,
    jobDescription,
    loading,
    result,
    resumeFile,
    submitError,
    updateJobDescription,
    updateResumeFile,
  };
}
