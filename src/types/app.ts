import type { ReactNode } from "react";

export type ResumeInput = {
  jobDescription: string;
  resumeFile: File;
};

export type ResumeResult = {
  improvedResume: string;
  coverLetter: string;
};

export type GenerateResumeRequest = ResumeInput;

export type GenerateResumeResponse = ResumeResult;

export type ApiErrorDetailItem = {
  msg?: string;
};

export type ApiErrorPayload = {
  detail?: string | ApiErrorDetailItem[];
};

export type CopyState = "idle" | "copied" | "failed";

export type HighlightPart = {
  highlighted: boolean;
  value: string;
};

export type LayoutProps = {
  children: ReactNode;
};

export type FormSectionProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export type ResumeFormProps = {
  jobDescription: string;
  fileError: string;
  resumeFile: File | null;
  canSubmit: boolean;
  onSubmit: () => void;
  onJobDescriptionChange: (value: string) => void;
  onResumeFileChange: (file: File | null) => void;
  loading: boolean;
};

export type ResultsPanelProps = {
  loading: boolean;
  result: ResumeResult | null;
  error: string;
  jobDescription: string;
};

export type ResultCardProps = {
  title: string;
  body: string;
  keywords: string[];
};

export type HighlightedTextProps = {
  text: string;
  keywords: string[];
};

export type ErrorResultProps = {
  message: string;
};

export type StatusPanelProps = {
  loading: boolean;
  hasResult: boolean;
  hasJobDescription: boolean;
  hasResumeFile: boolean;
};

export type StatusItem = {
  label: string;
  value: string;
  ready: boolean;
};

export type BuilderHeaderProps = {
  loading: boolean;
  canGenerate: boolean;
};
