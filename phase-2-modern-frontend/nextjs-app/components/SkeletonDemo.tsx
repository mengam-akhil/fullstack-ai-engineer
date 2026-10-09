"use client";

import { useEffect, useState } from "react";

import { Skeleton } from "./ui/skeleton";

export default function SkeletonDemo() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
          Loading State
        </p>

        <h2 className="text-2xl font-bold text-slate-900">
          Skeleton Loader
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Skeleton components display the structure of content
          while data is loading.
        </p>
      </div>

      {loading ? (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />

            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>

          <Skeleton className="h-6 w-1/2" />

          <Skeleton className="h-4 w-full" />

          <Skeleton className="h-4 w-5/6" />

          <div className="grid gap-4 md:grid-cols-3">
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-32 w-full rounded-lg" />
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 font-semibold text-brand-700">
              A
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Akhil Kumar
              </h3>

              <p className="text-sm text-slate-500">
                Full Stack AI Engineer
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900">
            Dashboard Data Loaded
          </h3>

          <p className="text-sm leading-6 text-slate-600">
            The application has finished loading the dashboard
            information.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-lg border border-slate-200 p-4">
              <p className="text-sm text-slate-500">
                Projects
              </p>

              <p className="mt-2 text-2xl font-bold text-slate-900">
                12
              </p>
            </article>

            <article className="rounded-lg border border-slate-200 p-4">
              <p className="text-sm text-slate-500">
                Deployments
              </p>

              <p className="mt-2 text-2xl font-bold text-slate-900">
                28
              </p>
            </article>

            <article className="rounded-lg border border-slate-200 p-4">
              <p className="text-sm text-slate-500">
                Team Members
              </p>

              <p className="mt-2 text-2xl font-bold text-slate-900">
                8
              </p>
            </article>
          </div>
        </div>
      )}
    </section>
  );
}