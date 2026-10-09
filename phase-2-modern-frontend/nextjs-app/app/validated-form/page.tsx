import ValidatedRegistrationForm from "../../components/ValidatedRegistrationForm";

export default function ValidatedFormPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 text-slate-900 dark:bg-slate-950 dark:text-slate-100 md:p-8">
      <section className="mx-auto max-w-2xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Week 24 — Form Management & Validation
          </p>

          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Form Validation
          </h1>

          <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-400">
            React Hook Form manages the inputs while Zod
            validates the submitted data.
          </p>
        </div>

        <ValidatedRegistrationForm />
      </section>
    </main>
  );
}