import { useEffect, useState } from "react";
import { GENERATE_REQUEST_TIMEOUT_MS } from "../../../api/applications";

const loadingSteps = [
  "Reading resume PDF",
  "Matching role requirements",
  "Rewriting resume bullets",
  "Drafting cover letter",
];

function formatDuration(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default function LoadingResult() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const timeoutSeconds = Math.floor(GENERATE_REQUEST_TIMEOUT_MS / 1000);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setElapsedSeconds((seconds) => Math.min(seconds + 1, timeoutSeconds));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [timeoutSeconds]);

  return (
    <div className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-5 text-white shadow-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white">Generating drafts</p>
          <p className="mt-1 text-sm leading-6 text-blue-100">
            This can take a little while. Keep this tab open while Gemini reads
            the resume and job post.
          </p>
        </div>

        <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10">
          <span className="absolute h-full w-full rounded-full border border-blue-300/60 loading-ring" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal-300 loading-dot" />
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="font-semibold text-blue-100">Elapsed time</span>
          <span className="font-mono text-base font-bold text-white">
            {formatDuration(elapsedSeconds)} / {formatDuration(timeoutSeconds)}
          </span>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {loadingSteps.map((step, index) => (
          <div
            key={step}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
          >
            <span
              className="h-2.5 w-2.5 rounded-full bg-teal-300 loading-step"
              style={{ animationDelay: `${index * 0.35}s` }}
            />
            <span className="text-sm text-blue-50">{step}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
        <div className="loading-track h-full rounded-full bg-gradient-to-r from-teal-300 via-blue-300 to-white" />
      </div>

      <div
        className="relative mt-3 h-4 text-xs font-semibold uppercase tracking-widest text-blue-200"
        aria-live="polite"
      >
        <span className="loading-copy">Still working</span>
        <span className="loading-copy loading-copy-delay-1">
          Large resumes can take longer
        </span>
        <span className="loading-copy loading-copy-delay-2">
          Waiting for Gemini
        </span>
      </div>
    </div>
  );
}
