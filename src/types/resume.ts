export type ResumeInput = {
  jobDescription: string;
  resumeFile: File | null;
};

export type ResumeResult = {
  improvedResume: string;
  coverLetter: string;
};
