"use client";

import {
  useCallback,
  useMemo,
  useState,
} from "react";

import OptimizedProjectCard from "./OptimizedProjectCard";
import { Button } from "./ui/button";

interface Project {
  id: number;
  title: string;
  technology: string;
  status: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Dashboard",
    technology: "Next.js",
    status: "In Progress",
  },
  {
    id: 2,
    title: "User Management System",
    technology: "FastAPI",
    status: "Completed",
  },
  {
    id: 3,
    title: "DevOps Monitoring Platform",
    technology: "Docker",
    status: "Planning",
  },
];

export default function OptimizedStateDemo() {
  const [selectedProjectId, setSelectedProjectId] =
    useState<number | null>(null);

  const [counter, setCounter] = useState(0);

  const selectedProject = useMemo(() => {
    return projects.find(
      (project) => project.id === selectedProjectId
    );
  }, [selectedProjectId]);

  const handleSelect = useCallback((id: number) => {
    setSelectedProjectId((currentId) =>
      currentId === id ? null : id
    );
  }, []);

  const totalProjects = useMemo(() => {
    return projects.length;
  }, []);

  return (
    <section className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              Render Optimization
            </p>

            <h2 className="mt-1 text-2xl font-bold">
              Optimized State Demo
            </h2>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Counter updates should not force unchanged project
              cards to render again.
            </p>
          </div>

          <Button
            variant="outline"
            onClick={() =>
              setCounter((current) => current + 1)
            }
          >
            Counter: {counter}
          </Button>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-6">
          <h2 className="text-xl font-bold">
            Project Summary
          </h2>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Total projects: {totalProjects}
          </p>

          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Selected project:{" "}
            {selectedProject?.title ?? "None"}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <OptimizedProjectCard
              key={project.id}
              project={project}
              isSelected={
                selectedProjectId === project.id
              }
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}