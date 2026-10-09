export default function TypographyDemoPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 md:p-8">
      <section className="mx-auto max-w-5xl">
        <header className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600">
            Full Stack AI Engineer
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Modern Application Dashboard
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            Monitor projects, application performance, cloud
            infrastructure, and AI services from one centralized
            dashboard.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Project Overview
          </h2>

          <p className="max-w-3xl text-base leading-7 text-slate-600">
            Track the progress of your engineering projects and
            monitor the technologies used across your applications.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-slate-300 bg-white p-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-600">
              Frontend
            </p>

            <h3 className="mb-3 text-xl font-semibold text-slate-900">
              AI Dashboard
            </h3>

            <p className="mb-4 text-base leading-7 text-slate-600">
              A responsive dashboard built with Next.js and
              TypeScript for monitoring AI applications.
            </p>

            <p className="text-sm font-medium text-slate-500">
              Technology: Next.js
            </p>
          </article>

          <article className="rounded-xl border border-slate-300 bg-white p-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-600">
              Backend
            </p>

            <h3 className="mb-3 text-xl font-semibold text-slate-900">
              User Management System
            </h3>

            <p className="mb-4 text-base leading-7 text-slate-600">
              A backend service built with FastAPI for managing
              application users and authentication.
            </p>

            <p className="text-sm font-medium text-slate-500">
              Technology: FastAPI
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}