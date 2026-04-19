import type { LayoutProps } from "../types/app";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#f6f8fb] text-[#111827]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-10rem] top-[-8rem] h-80 w-80 rounded-full bg-[#3b82f6]/12 blur-3xl" />
        <div className="absolute right-[-8rem] top-20 h-96 w-96 rounded-full bg-[#14b8a6]/12 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-white blur-3xl" />
        <div className="absolute inset-y-0 left-[8%] w-px bg-[#111827]/5" />
        <div className="absolute inset-y-0 right-[8%] w-px bg-[#111827]/5" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="py-4">
          <div className="flex flex-col gap-4 rounded-[2rem] border border-white/80 bg-white/85 px-5 py-4 shadow-[0_18px_50px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#111827] text-lg font-black tracking-[-0.08em] text-white shadow-[0_14px_30px_rgba(17,24,39,0.22)]">
                JF
              </div>
              <div>
                <p className="font-heading text-2xl font-semibold tracking-[-0.06em] text-[#111827]">
                  JobFit
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#64748b]">
                  Targeted applications
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#475569] sm:text-right">
              Create role specific resume and cover letter drafts from one job
              post and one resume.
            </p>
          </div>
        </header>

        <main className="flex-1 py-5 sm:py-6 lg:py-8">{children}</main>

        <footer className="pb-6 pt-3 text-center text-sm text-[#64748b]">
          Made by <span className="font-semibold text-[#111827]">Aldas</span>
        </footer>
      </div>
    </div>
  );
}
