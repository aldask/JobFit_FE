import type { HighlightedTextProps } from "../../../types/app";
import { highlightKeywordParts } from "../../../utils/keywordHighlights";

export default function HighlightedText({
  text,
  keywords,
}: HighlightedTextProps) {
  const parts = highlightKeywordParts(text, keywords);

  return (
    <>
      {parts.map((part, index) =>
        part.highlighted ? (
          <strong
            key={`${part.value}-${index}`}
            className="font-bold text-slate-950"
          >
            {part.value}
          </strong>
        ) : (
          <span key={`${part.value}-${index}`}>{part.value}</span>
        ),
      )}
    </>
  );
}
