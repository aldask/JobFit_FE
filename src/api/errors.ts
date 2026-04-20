import type { ApiErrorPayload } from "../types/app";

const FALLBACK_ERROR_MESSAGE = "Could not generate drafts.";

export async function getApiErrorMessage(response: Response) {
  try {
    const payload = (await response.json()) as ApiErrorPayload;

    if (typeof payload.detail === "string") {
      return payload.detail;
    }

    if (Array.isArray(payload.detail)) {
      return (
        payload.detail
          .map((item) => item.msg)
          .filter(Boolean)
          .join(" ") || FALLBACK_ERROR_MESSAGE
      );
    }

    return FALLBACK_ERROR_MESSAGE;
  } catch {
    return FALLBACK_ERROR_MESSAGE;
  }
}
