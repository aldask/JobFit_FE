import type { LayoutProps } from "../types/app";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-48 left-1/3 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="py-4">
          <div className="flex flex-col gap-4 rounded-4xl border border-white/80 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-lg font-black tracking-tighter text-white shadow-xl">
                JF
              </div>
              <div>
                <p className="font-heading text-2xl font-semibold tracking-tighter text-slate-900">
                  JobFit
                </p>
                <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                  Targeted applications
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-600 sm:text-right">
              Create role specific resume and cover letter drafts from one job
              post and one resume.
            </p>
          </div>
        </header>

        <main className="flex-1 py-5 sm:py-6 lg:py-8">{children}</main>

        <footer className="pb-6 pt-3 text-center text-sm text-slate-500">
          Made by <span className="font-semibold text-slate-900">Aldas</span>
        </footer>
      </div>
    </div>
  );
}
