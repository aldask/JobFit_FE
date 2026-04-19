import type { FormSectionProps } from "../../types/app";

export default function FormSection({
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
      <div className="mb-4">
        <h3 className="text-base font-semibold tracking-tight text-slate-900">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
      </div>
      {children}
    </section>
  );
}
