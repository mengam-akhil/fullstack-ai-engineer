"use client";

import { toast } from "sonner";

import { Button } from "./ui/button";

export default function NotificationDemo() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
          Notifications
        </p>

        <h2 className="text-2xl font-bold text-slate-900">
          Notification Overlays
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Use toast notifications to provide immediate feedback
          after user actions.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          onClick={() =>
            toast.success("Profile saved successfully.")
          }
        >
          Success
        </Button>

        <Button
          variant="destructive"
          onClick={() =>
            toast.error("Unable to save the profile.")
          }
        >
          Error
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            toast("New notification received.")
          }
        >
          Notification
        </Button>

        <Button
          variant="secondary"
          onClick={() =>
            toast.info("Your deployment is being processed.")
          }
        >
          Information
        </Button>
      </div>
    </section>
  );
}