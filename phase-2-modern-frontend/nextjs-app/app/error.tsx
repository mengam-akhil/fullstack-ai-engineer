
"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-4 py-12">
      <section
        role="alert"
        className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950"
      >
        <h1 className="text-2xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-3 text-slate-600 dark:text-slate-400">
          We couldn&apos;t display this page. Please try again.
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-6 min-h-11 rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Try again
        </button>
      </section>
    </main>
  );
}
