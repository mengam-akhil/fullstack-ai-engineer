"use client";

import { memo } from "react";

interface Project {
  id: number;
  title: string;
  technology: string;
  status: string;
}

interface OptimizedProjectCardProps {
  project: Project;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

function OptimizedProjectCard({
  project,
  isSelected,
  onSelect,
}: OptimizedProjectCardProps) {
  console.log(
    `Rendering project card: ${project.title}`
  );

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
            Project #{project.id}
          </p>

          <h2 className="mt-1 text-xl font-bold">
            {project.title}
          </h2>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Technology: {project.technology}
          </p>

          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Status: {project.status}
          </p>
        </div>

        <span
          className={
            isSelected
              ? "rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-900 dark:text-brand-300"
              : "rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          }
        >
          {isSelected ? "Selected" : "Available"}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onSelect(project.id)}
        className="mt-5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
      >
        {isSelected ? "Deselect" : "Select"}
      </button>
    </article>
  );
}

export default memo(OptimizedProjectCard);