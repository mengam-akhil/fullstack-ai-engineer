import GlobalUserCard from "../../components/GlobalUserCard";
import GlobalUserEditor from "../../components/GlobalUserEditor";

export default function ContextDemoPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 md:p-8">
      <section className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
            Day 133
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Global State with React Context
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            Share user session information across components
            without passing props through every component.
          </p>
        </div>

        <div className="space-y-6">
          <GlobalUserCard />

          <GlobalUserEditor />
        </div>
      </section>
    </main>
  );
}