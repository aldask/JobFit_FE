const MAX_RESUME_BYTES = 10 * 1024 * 1024;

export function validateResumeFile(file: File) {
  const isPdf =
    file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");

  if (!isPdf) {
    return "Please upload a PDF resume.";
  }

  if (file.size > MAX_RESUME_BYTES) {
    return "Resume PDF must be 10 MB or smaller.";
  }

  return "";
}
