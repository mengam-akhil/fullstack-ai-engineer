"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main>
      <h1>Something went wrong.</h1>

      <p>We could not load the dashboard.</p>

      <button onClick={() => reset()}>
        Try Again
      </button>
    </main>
  );
}