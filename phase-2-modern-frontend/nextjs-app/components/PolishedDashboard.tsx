"use client";

import { useState } from "react";

const navigation = [
  {
    label: "Dashboard",
    href: "#",
  },
  {
    label: "Projects",
    href: "#",
  },
  {
    label: "Analytics",
    href: "#",
  },
  {
    label: "Team",
    href: "#",
  },
  {
    label: "Settings",
    href: "#",
  },
];

const projects = [
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
    technology: "Prometheus",
    status: "Planning",
  },
];

export default function PolishedDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex min-h-screen">
        <aside
          className={`border-r border-slate-200 bg-slate-900 text-white transition-all duration-300 ${
            sidebarOpen ? "w-64" : "w-20"
          }`}
        >
          <div className="flex h-full flex-col">
            <div className="flex h-16 items-center justify-between border-b border-slate-700 px-4">
              {sidebarOpen && (
                <h1 className="text-lg font-bold">
                  AI Engineer
                </h1>
              )}

              <button
                type="button"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label={
                  sidebarOpen
                    ? "Collapse sidebar"
                    : "Expand sidebar"
                }
              >
                ☰
              </button>
            </div>

            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`flex items-center rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                        sidebarOpen
                          ? "justify-start"
                          : "justify-center"
                      }`}
                    >
                      <span className="text-lg">•</span>

                      {sidebarOpen && (
                        <span className="ml-3">
                          {item.label}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {sidebarOpen && (
              <div className="border-t border-slate-700 p-4">
                <p className="text-xs text-slate-400">
                  Full Stack AI Engineer
                </p>
              </div>
            )}
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex min-h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
            <div>
              <p className="text-sm text-slate-500">
                Welcome back
              </p>

              <h2 className="text-xl font-bold text-slate-900">
                Engineering Dashboard
              </h2>
            </div>

            <button
              type="button"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
            >
              Profile
            </button>
          </header>

          <main className="flex-1 p-6 md:p-8">
            <div className="mx-auto max-w-7xl">
              <section className="mb-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
                  Overview
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Application Overview
                </h1>

                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
                  Monitor your projects, technologies, and
                  engineering activity from one centralized
                  dashboard.
                </p>
              </section>

              <section className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <article className="rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-sm font-medium text-slate-500">
                    Projects
                  </p>

                  <p className="mt-2 text-3xl font-bold text-slate-900">
                    12
                  </p>

                  <p className="mt-2 text-sm text-brand-600">
                    +3 this month
                  </p>
                </article>

                <article className="rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-sm font-medium text-slate-500">
                    Completed
                  </p>

                  <p className="mt-2 text-3xl font-bold text-slate-900">
                    8
                  </p>

                  <p className="mt-2 text-sm text-brand-600">
                    67% completion
                  </p>
                </article>

                <article className="rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-sm font-medium text-slate-500">
                    Technologies
                  </p>

                  <p className="mt-2 text-3xl font-bold text-slate-900">
                    14
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Across projects
                  </p>
                </article>

                <article className="rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-sm font-medium text-slate-500">
                    Active
                  </p>

                  <p className="mt-2 text-3xl font-bold text-slate-900">
                    4
                  </p>

                  <p className="mt-2 text-sm text-brand-600">
                    Currently running
                  </p>
                </article>
              </section>

              <section>
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      Recent Projects
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Your latest engineering projects.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                  >
                    New Project
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                  {projects.map((project) => (
                    <article
                      key={project.id}
                      className="rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-600">
                        {project.status}
                      </p>

                      <h3 className="mb-3 text-xl font-semibold text-slate-900">
                        {project.title}
                      </h3>

                      <p className="mb-6 text-sm leading-6 text-slate-600">
                        Technology: {project.technology}
                      </p>

                      <button
                        type="button"
                        className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
                      >
                        View Project
                      </button>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}