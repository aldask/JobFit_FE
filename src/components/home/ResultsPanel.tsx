import type { ResultsPanelProps } from "../../types/app";
import EmptyResults from "./results/EmptyResults";
import ErrorResult from "./results/ErrorResult";
import LoadingResult from "./results/LoadingResult";
import ResultCard from "./results/ResultCard";
import { extractMatchedKeywords } from "../../utils/keywordHighlights";

export default function ResultsPanel({
  loading,
  result,
  error,
  jobDescription,
}: ResultsPanelProps) {
  const keywords = result
    ? extractMatchedKeywords(jobDescription, result.improvedResume)
    : [];

  return (
    <section className="rounded-4xl border border-white/80 bg-white/90 p-6 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="mt-2 font-heading text-2xl tracking-tighter text-slate-900">
            Generated drafts
          </h2>
        </div>

        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
          {loading ? "Loading" : result ? "Ready" : error ? "Error" : "Idle"}
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {error && !loading ? (
          <ErrorResult message={error} />
        ) : loading ? (
          <LoadingResult />
        ) : result ? (
          <>
            <ResultCard
              title="Improved Resume"
              body={result.improvedResume}
              keywords={keywords}
            />
            <ResultCard
              title="Cover Letter"
              body={result.coverLetter}
              keywords={[]}
            />
          </>
        ) : (
          <EmptyResults />
        )}
      </div>
    </section>
  );
}
