
export default function WorkspaceSkeleton() {
  return (
    <div
      className="animate-pulse space-y-6"
      role="status"
      aria-label="Loading workspace"
    >
      <span className="sr-only">
        Loading workspace...
      </span>

      {/* Page heading */}
      <div className="space-y-2">
        <div className="h-8 w-56 rounded-lg bg-slate-200 dark:bg-slate-700" />
        <div className="h-4 w-72 max-w-full rounded bg-slate-200 dark:bg-slate-700" />
      </div>

      {/* Summary card grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 p-5 dark:border-slate-700"
          >
            <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="mt-4 h-8 w-16 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="mt-4 h-3 w-32 rounded bg-slate-200 dark:bg-slate-700" />
          </div>
        ))}
      </div>

      {/* Main workspace panels */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="space-y-5 rounded-xl border border-slate-200 p-5 dark:border-slate-700 xl:col-span-2">
          <div className="h-5 w-40 rounded bg-slate-200 dark:bg-slate-700" />

          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="size-5 shrink-0 rounded bg-slate-200 dark:bg-slate-700" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-3 w-1/3 rounded bg-slate-200 dark:bg-slate-700" />
              </div>
              <div className="h-6 w-20 rounded-full bg-slate-200 dark:bg-slate-700" />
            </div>
          ))}
        </div>

        <div className="space-y-5 rounded-xl border border-slate-200 p-5 dark:border-slate-700">
          <div className="h-5 w-32 rounded bg-slate-200 dark:bg-slate-700" />

          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-700" />
              <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
