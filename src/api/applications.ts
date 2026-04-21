import type {
  GenerateResumeRequest,
  GenerateResumeResponse,
} from "../types/app";
import { getApiErrorMessage } from "./errors";
import { apiRoutes } from "./routes";

export const GENERATE_REQUEST_TIMEOUT_MS = 120_000;

function isGenerateResumeResponse(
  payload: unknown,
): payload is GenerateResumeResponse {
  if (!payload || typeof payload !== "object") {
    return false;
  }

  const response = payload as Partial<GenerateResumeResponse>;

  return (
    typeof response.improvedResume === "string" &&
    typeof response.coverLetter === "string"
  );
}

export async function generateApplicationDrafts({
  jobDescription,
  resumeFile,
}: GenerateResumeRequest): Promise<GenerateResumeResponse> {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(
    () => controller.abort(),
    GENERATE_REQUEST_TIMEOUT_MS,
  );
  const formData = new FormData();
  formData.append("jobDescription", jobDescription);
  formData.append("resumeFile", resumeFile);

  try {
    const response = await fetch(apiRoutes.generateApplication, {
      method: "POST",
      body: formData,
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(await getApiErrorMessage(response));
    }

    const payload = (await response.json()) as unknown;

    if (!isGenerateResumeResponse(payload)) {
      throw new Error("Backend returned an invalid response.");
    }

    return payload;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("Backend did not respond. Please try again later.");
    }

    if (error instanceof TypeError) {
      throw new Error("Could not connect to the backend.");
    }

    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}
