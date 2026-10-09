import ProjectDataDisplay from "../../components/ProjectDataDisplay";

export default function DataDisplayDemoPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 md:p-8">
      <section className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
            Day 129
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Data Display Components
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            Display project information using modal dialogs and
            slide-out sheet panels.
          </p>
        </div>

        <ProjectDataDisplay />
      </section>
    </main>
  );
}