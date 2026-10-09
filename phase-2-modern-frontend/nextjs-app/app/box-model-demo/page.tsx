export default function BoxModelDemoPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <section className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-slate-900">
          CSS Box Model
        </h1>

        <div className="space-y-6">
          <article className="rounded-xl border border-slate-300 bg-white p-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">
              AI Dashboard
            </h2>

            <p className="mb-6 text-slate-600">
              An AI-powered analytics dashboard.
            </p>

            <button className="rounded-lg border border-blue-700 bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
              Open Dashboard
            </button>
          </article>

          <article className="rounded-xl border border-slate-300 bg-white p-6">
            <h2 className="mb-3 text-2xl font-semibold text-slate-800">
              DevOps Monitoring Platform
            </h2>

            <p className="mb-6 text-slate-600">
              A platform for monitoring containerized applications.
            </p>

            <button className="rounded-lg border border-brand-700 bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700">
              View Monitoring
            </button>
          </article>
        </div>
      </section>
    </main>
  );
}