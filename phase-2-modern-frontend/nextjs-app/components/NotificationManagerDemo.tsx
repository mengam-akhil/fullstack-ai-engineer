"use client";

import { useNotification } from "../context/NotificationContext";
import { Button } from "./ui/button";

export default function NotificationManagerDemo() {
  const notify = useNotification();

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Day 136
        </p>

        <h2 className="text-2xl font-bold">
          Global Notification Manager
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
          Trigger notifications from anywhere in the application
          through a shared notification provider.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          onClick={() =>
            notify.success(
              "Project created successfully."
            )
          }
        >
          Success
        </Button>

        <Button
          variant="destructive"
          onClick={() =>
            notify.error(
              "Project creation failed."
            )
          }
        >
          Error
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            notify.info(
              "Your project is being processed."
            )
          }
        >
          Information
        </Button>

        <Button
          variant="secondary"
          onClick={() =>
            notify.warning(
              "Your deployment is waiting."
            )
          }
        >
          Warning
        </Button>
      </div>
    </section>
  );
}