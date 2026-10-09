import AuthDemo from "../../components/AuthDemo";
import AuthStatus from "../../components/AuthStatus";

export default function AuthDemoPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 md:p-8">
      <section className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
            Day 134
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Central Authentication Provider
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            Track authentication state globally across the
            application using a React Context provider.
          </p>
        </div>

        <div className="space-y-6">
          <AuthDemo />

          <AuthStatus />
        </div>
      </section>
    </main>
  );
}