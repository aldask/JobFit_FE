import type { ReactNode } from "react";

export type ResumeInput = {
  jobDescription: string;
  resumeFile: File | null;
};

export type ResumeResult = {
  improvedResume: string;
  coverLetter: string;
};

export type GenerateResumeRequest = ResumeInput;

export type GenerateResumeResponse = ResumeResult;

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
  onSubmit: (data: ResumeInput) => void;
  onJobDescriptionChange: (value: string) => void;
  onResumeFileChange: (file: File | null) => void;
  loading: boolean;
};

export type ResultsPanelProps = {
  loading: boolean;
  result: ResumeResult | null;
};

export type ResultCardProps = {
  title: string;
  body: string;
};

export type StatusPanelProps = {
  loading: boolean;
  hasResult: boolean;
  hasJobDescription: boolean;
  hasResumeFile: boolean;
};

export type BuilderHeaderProps = {
  loading: boolean;
  canGenerate: boolean;
};
