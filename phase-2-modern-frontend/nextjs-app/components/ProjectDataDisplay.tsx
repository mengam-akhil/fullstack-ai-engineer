
"use client";

import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface Project {
  id: number;
  title: string;
  technology: string;
  status: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Dashboard",
    technology: "Next.js",
    status: "In Progress",
    description:
      "An AI-powered analytics dashboard for monitoring application data and business metrics.",
  },
  {
    id: 2,
    title: "User Management System",
    technology: "FastAPI",
    status: "Completed",
    description:
      "A backend system for managing users, authentication, roles, and application permissions.",
  },
  {
    id: 3,
    title: "DevOps Monitoring Platform",
    technology: "Docker",
    status: "Planning",
    description:
      "A monitoring platform designed for containerized applications and infrastructure.",
  },
];

export default function ProjectDataDisplay() {
  return (
    <section className="space-y-6">
      {projects.map((project) => (
        <article
          key={project.id}
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-1 text-sm font-medium text-brand-600">
                Project #{project.id}
              </p>

              <h2 className="text-xl font-bold text-slate-900">
                {project.title}
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                {project.technology}
              </p>

              <span className="mt-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                {project.status}
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Dialog>
                <DialogTrigger
                  render={<Button variant="outline" />}
                >
                  View Dialog
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>

                    <DialogDescription>
                      Detailed information about this project.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        Technology
                      </p>

                      <p className="text-base font-semibold text-slate-900">
                        {project.technology}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        Status
                      </p>

                      <p className="text-base font-semibold text-slate-900">
                        {project.status}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        Description
                      </p>

                      <p className="text-sm leading-6 text-slate-600">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Sheet>
                <SheetTrigger
                  render={<Button />}
                >
                  Open Sheet
                </SheetTrigger>

                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>{project.title}</SheetTitle>

                    <SheetDescription>
                      Project details and information.
                    </SheetDescription>
                  </SheetHeader>

                  <div className="mt-6 space-y-6 px-4">
                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        Project ID
                      </p>

                      <p className="mt-1 text-lg font-semibold text-slate-900">
                        {project.id}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        Technology
                      </p>

                      <p className="mt-1 text-lg font-semibold text-slate-900">
                        {project.technology}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        Status
                      </p>

                      <p className="mt-1 text-lg font-semibold text-slate-900">
                        {project.status}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        Description
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
