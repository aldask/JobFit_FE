import { useState } from "react";
import type { CopyState, ResultCardProps } from "../../../types/app";
import HighlightedText from "./HighlightedText";

export default function ResultCard({ title, body, keywords }: ResultCardProps) {
  const [copyState, setCopyState] = useState<CopyState>("idle");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(body);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }

    window.setTimeout(() => setCopyState("idle"), 1600);
  }

  const copyLabel =
    copyState === "copied"
      ? "Copied"
      : copyState === "failed"
        ? "Copy failed"
        : "Copy draft";

  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="font-heading text-xl tracking-tighter text-slate-900">
        {title}
      </h3>
      <pre className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-600">
        <HighlightedText text={body} keywords={keywords} />
      </pre>
      <button
        type="button"
        onClick={handleCopy}
        className="mt-4 rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-blue-600 hover:text-blue-600"
      >
        {copyLabel}
      </button>
    </div>
  );
}
