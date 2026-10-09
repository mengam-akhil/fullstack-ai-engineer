import { Button } from "../../components/ui/button";

export default function ShadcnDemoPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 md:p-8">
      <section className="mx-auto max-w-4xl">
        <div className="rounded-xl border border-slate-200 bg-white p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
            Week 22
          </p>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900">
            shadcn/ui Demo
          </h1>

          <p className="mb-8 max-w-2xl text-base leading-7 text-slate-600">
            Building reusable interface components with shadcn/ui
            and Tailwind CSS.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button>
              Primary Action
            </Button>

            <Button variant="secondary">
              Secondary Action
            </Button>

            <Button variant="outline">
              Outline Action
            </Button>

            <Button variant="destructive">
              Delete
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}