export default function InteractionDemoPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 md:p-8">
      <section className="mx-auto max-w-5xl">
        <header className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
            UI Interaction System
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Interactive Components
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Consistent hover states, focus rings, transitions, and
            border-radius patterns create a polished application UI.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-slate-300 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-600">
              Frontend
            </p>

            <h2 className="mb-3 text-xl font-semibold text-slate-900">
              AI Dashboard
            </h2>

            <p className="mb-6 text-base leading-7 text-slate-600">
              A responsive dashboard built with Next.js and TypeScript.
            </p>

            <button
              type="button"
              className="rounded-lg bg-brand-500 px-5 py-3 font-semibold text-white transition hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            >
              Open Dashboard
            </button>
          </article>

          <article className="rounded-xl border border-slate-300 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-600">
              Backend
            </p>

            <h2 className="mb-3 text-xl font-semibold text-slate-900">
              FastAPI Service
            </h2>

            <p className="mb-6 text-base leading-7 text-slate-600">
              A backend API service for application data and authentication.
            </p>

            <button
              type="button"
              className="rounded-lg bg-brand-500 px-5 py-3 font-semibold text-white transition hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            >
              Open API
            </button>
          </article>
        </div>

        <section className="mt-10 rounded-xl border border-slate-300 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Search Projects
          </h2>

          <label
            htmlFor="project-search"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Project name
          </label>

          <input
            id="project-search"
            type="text"
            placeholder="Enter project name"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500/30"
          />
        </section>
      </section>
    </main>
  );
}