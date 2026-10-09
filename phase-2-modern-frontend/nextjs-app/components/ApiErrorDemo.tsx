"use client";

import { useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { getApiErrorMessage } from "../lib/api/errors";
import apiClient from "../lib/api/client";

export default function ApiErrorDemo() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function triggerError() {
    try {
      setLoading(true);
      setErrorMessage("");

      await apiClient.get("/this-endpoint-does-not-exist");
    } catch (error) {
      const message = getApiErrorMessage(error);
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto w-full max-w-2xl space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          API Error Handling
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Friendly API Errors
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          Backend errors are converted into user-friendly messages
          instead of exposing raw Axios errors.
        </p>
      </div>

      {errorMessage && (
        <Alert variant="destructive">
          <AlertTitle>Request Failed</AlertTitle>

          <AlertDescription>
            {errorMessage}
          </AlertDescription>
        </Alert>
      )}

      <button
        type="button"
        onClick={triggerError}
        disabled={loading}
        className="rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending Request..." : "Trigger API Error"}
      </button>
    </section>
  );
}