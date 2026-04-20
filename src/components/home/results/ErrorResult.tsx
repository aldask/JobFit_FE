import type { ErrorResultProps } from "../../../types/app";

export default function ErrorResult({ message }: ErrorResultProps) {
  return (
    <div className="rounded-3xl border border-red-100 bg-red-50 p-5">
      <p className="text-sm font-semibold text-red-700">Generation failed</p>
      <p className="mt-2 text-sm leading-6 text-red-600">{message}</p>
    </div>
  );
}
