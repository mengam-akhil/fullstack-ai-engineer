import ThemeSwitcher from "../../components/ThemeSwitcher";

export default function ThemeDemoPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100 md:p-8">
      <section className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Day 135
          </p>

          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Global Theme System
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Switch between light and dark modes using a
            global theme provider.
          </p>
        </div>

        <div className="space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold">
                  Theme Controls
                </h2>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  The theme state is managed globally and can
                  be accessed by any client component.
                </p>
              </div>

              <ThemeSwitcher />
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-lg font-semibold">
                Projects
              </h2>

              <p className="mt-2 text-3xl font-bold text-brand-600 dark:text-brand-400">
                12
              </p>

              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Active projects
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-lg font-semibold">
                Deployments
              </h2>

              <p className="mt-2 text-3xl font-bold text-brand-600 dark:text-brand-400">
                28
              </p>

              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Successful deployments
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-lg font-semibold">
                Team
              </h2>

              <p className="mt-2 text-3xl font-bold text-brand-600 dark:text-brand-400">
                8
              </p>

              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Team members
              </p>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}