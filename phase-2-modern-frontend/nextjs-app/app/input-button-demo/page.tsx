import BrandedForm from "../../components/BrandedForm";
import { Button } from "../../components/ui/button";

export default function InputButtonDemoPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 md:p-8">
      <section className="mx-auto max-w-2xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
            Day 128
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Inputs & Custom Buttons
          </h1>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Building clean reusable form controls with shadcn/ui
            and our Tailwind brand theme.
          </p>
        </div>

        <BrandedForm />

        <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-bold text-slate-900">
            Button Variants
          </h2>

          <p className="mb-6 text-sm text-slate-600">
            shadcn/ui buttons can use different variants depending
            on the purpose of the action.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button>
              Primary
            </Button>

            <Button variant="secondary">
              Secondary
            </Button>

            <Button variant="outline">
              Outline
            </Button>

            <Button variant="ghost">
              Ghost
            </Button>

            <Button variant="destructive">
              Delete
            </Button>

            <Button className="bg-brand-700 hover:bg-brand-600">
              Brand Action
            </Button>
          </div>
        </section>
      </section>
    </main>
  );
}