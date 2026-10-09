import EnterpriseRegistrationForm from "../../components/EnterpriseRegistrationForm";

export default function RegisterPage() {
  return (
    <main className="flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Account Registration
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Create Your Account
          </h1>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Register a new enterprise account.
          </p>
        </div>

        <EnterpriseRegistrationForm />
      </div>
    </main>
  );
}