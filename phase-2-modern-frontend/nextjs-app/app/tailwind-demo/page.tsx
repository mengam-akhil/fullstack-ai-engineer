export default function TailwindDemoPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <section className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold text-slate-900">
          Tailwind CSS Demo
        </h1>

        <p className="mb-8 text-lg text-slate-600">
          Learning modern UI design with Tailwind CSS.
        </p>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-2 text-2xl font-semibold text-slate-800">
            AI Dashboard
          </h2>

          <p className="mb-6 text-slate-600">
            A modern dashboard interface built with Next.js and
            Tailwind CSS.
          </p>

          <button className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white">
            Open Dashboard
          </button>
        </div>
      </section>
    </main>
  );
}