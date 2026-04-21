import type { HighlightPart } from "../types/app";

const KNOWN_TECH_TERMS = new Set([
  "airflow",
  "ansible",
  "aws",
  "azure",
  "css",
  "django",
  "docker",
  "fastapi",
  "flask",
  "gcp",
  "git",
  "graphql",
  "html",
  "java",
  "javascript",
  "kafka",
  "kubernetes",
  "linux",
  "mongodb",
  "mysql",
  "node",
  "numpy",
  "pandas",
  "postgresql",
  "python",
  "rabbitmq",
  "react",
  "redis",
  "rest",
  "spark",
  "spring",
  "sql",
  "tailwind",
  "terraform",
  "typescript",
]);

const STOP_WORDS = new Set([
  "about",
  "also",
  "and",
  "are",
  "can",
  "for",
  "from",
  "have",
  "into",
  "job",
  "must",
  "our",
  "requirements",
  "responsibilities",
  "role",
  "that",
  "the",
  "this",
  "will",
  "with",
  "work",
  "you",
]);

const TOKEN_PATTERN = /\b[A-Za-z][A-Za-z0-9+#./-]*\b/g;
const MAX_KEYWORDS = 32;

export function extractMatchedKeywords(sourceText: string, targetText: string) {
  const targetTokens = new Set(
    (targetText.match(TOKEN_PATTERN) ?? []).map((token) => token.toLowerCase()),
  );
  const keywords = Array.from(extractKeywordCandidates(sourceText)).filter(
    (keyword) => targetTokens.has(keyword.toLowerCase()),
  );

  return keywords
    .sort(
      (left, right) => right.length - left.length || left.localeCompare(right),
    )
    .slice(0, MAX_KEYWORDS);
}

export function highlightKeywordParts(text: string, keywords: string[]) {
  if (!keywords.length) {
    return [{ highlighted: false, value: text }];
  }

  const keywordSet = new Set(keywords.map((keyword) => keyword.toLowerCase()));
  const parts: HighlightPart[] = [];
  let cursor = 0;

  for (const match of text.matchAll(TOKEN_PATTERN)) {
    const value = match[0];
    const index = match.index ?? 0;

    if (index > cursor) {
      parts.push({ highlighted: false, value: text.slice(cursor, index) });
    }

    parts.push({
      highlighted: keywordSet.has(value.toLowerCase()),
      value,
    });
    cursor = index + value.length;
  }

  if (cursor < text.length) {
    parts.push({ highlighted: false, value: text.slice(cursor) });
  }

  return parts;
}

function extractKeywordCandidates(text: string) {
  const candidates = new Set<string>();
  const tokens = text.match(TOKEN_PATTERN) ?? [];

  for (const token of tokens) {
    const normalized = token.trim();
    const lowercase = normalized.toLowerCase();

    if (lowercase.length < 3 || STOP_WORDS.has(lowercase)) {
      continue;
    }

    if (isLikelyKeyword(normalized)) {
      candidates.add(normalized);
    }
  }

  return candidates;
}

function isLikelyKeyword(token: string) {
  const lowercase = token.toLowerCase();

  return (
    KNOWN_TECH_TERMS.has(lowercase) ||
    /[+#./-]/.test(token) ||
    /\d/.test(token) ||
    /^[A-Z]{2,}$/.test(token)
  );
}
