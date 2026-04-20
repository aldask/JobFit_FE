import type {
  GenerateResumeRequest,
  GenerateResumeResponse,
} from "../types/app";
import { getApiErrorMessage } from "./errors";
import { apiRoutes } from "./routes";

export async function generateApplicationDrafts({
  jobDescription,
  resumeFile,
}: GenerateResumeRequest): Promise<GenerateResumeResponse> {
  const formData = new FormData();
  formData.append("jobDescription", jobDescription);
  formData.append("resumeFile", resumeFile);

  const response = await fetch(apiRoutes.generateApplication, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(await getApiErrorMessage(response));
  }

  return response.json() as Promise<GenerateResumeResponse>;
}
