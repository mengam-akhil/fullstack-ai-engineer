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
    technology: "Docker",
    status: "In Progress",
  },
  {
    id: 4,
    title: "AI Chat Platform",
    technology: "TypeScript",
    status: "Planning",
  },
  {
    id: 5,
    title: "Cloud Deployment System",
    technology: "AWS",
    status: "Completed",
  },
  {
    id: 6,
    title: "Monitoring Dashboard",
    technology: "Prometheus",
    status: "Planning",
  },
];

export default function ResponsiveDemoPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 md:p-8">
      <section className="mx-auto max-w-7xl">
        <h1 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
          Responsive Project Dashboard
        </h1>

        <p className="mb-8 text-slate-600">
          This layout automatically adapts to different screen sizes.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-xl border border-slate-300 bg-white p-6"
            >
              <h2 className="mb-3 text-xl font-semibold text-slate-800">
                {project.title}
              </h2>

              <p className="mb-2 text-slate-600">
                Technology: {project.technology}
              </p>

              <p className="text-slate-600">
                Status: {project.status}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

        <section className="mt-10">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Technology Statistics
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl border border-slate-300 bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold text-slate-800">
                Next.js
              </h3>

              <p className="mb-4 text-slate-600">
                12 Projects
              </p>

              <div className="flex gap-3">
                <button className="rounded-lg bg-brand-500 px-4 py-2 font-medium text-white hover:bg-brand-600">
                  View
                </button>

                <button className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700">
                  Details
                </button>
              </div>
            </article>

            <article className="rounded-xl border border-slate-300 bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold text-slate-800">
                FastAPI
              </h3>

              <p className="mb-4 text-slate-600">
                8 Projects
              </p>

              <div className="flex gap-3">
                <button className="rounded-lg bg-brand-500 px-4 py-2 font-medium text-white hover:bg-brand-600">
                  View
                </button>

                <button className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700">
                  Details
                </button>
              </div>
            </article>

            <article className="rounded-xl border border-slate-300 bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold text-slate-800">
                Docker
              </h3>

              <p className="mb-4 text-slate-600">
                6 Projects
              </p>

              <div className="flex gap-3">
                <button className="rounded-lg bg-brand-500 px-4 py-2 font-medium text-white hover:bg-brand-600">
                  View
                </button>

                <button className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700">
                  Details
                </button>
              </div>
            </article>
          </div>
        </section>