"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";

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
    status: "Planning",
  },
];

const activities = [
  {
    id: 1,
    action: "Updated AI Dashboard",
    time: "10 minutes ago",
  },
  {
    id: 2,
    action: "Created User Management System",
    time: "1 hour ago",
  },
  {
    id: 3,
    action: "Deployed DevOps Monitoring Platform",
    time: "3 hours ago",
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Akhil",
    role: "Full Stack AI Engineer",
  },
  {
    id: 2,
    name: "John",
    role: "Backend Developer",
  },
  {
    id: 3,
    name: "Sarah",
    role: "Frontend Developer",
  },
];

export default function TabbedDashboard() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="projects">
            Projects
          </TabsTrigger>

          <TabsTrigger value="activity">
            Activity
          </TabsTrigger>

          <TabsTrigger value="team">
            Team
          </TabsTrigger>
        </TabsList>

        {/* Projects */}
        <TabsContent value="projects" className="mt-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Projects
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Current projects and their technologies.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="rounded-lg border border-slate-200 p-5"
                >
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
                    Project #{project.id}
                  </p>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Technology: {project.technology}
                  </p>

                  <span className="mt-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {project.status}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Activity */}
        <TabsContent value="activity" className="mt-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Recent Activity
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Recent changes made across the platform.
              </p>
            </div>

            <div className="space-y-3">
              {activities.map((activity) => (
                <article
                  key={activity.id}
                  className="rounded-lg border border-slate-200 p-5"
                >
                  <h3 className="font-semibold text-slate-900">
                    {activity.action}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {activity.time}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Team */}
        <TabsContent value="team" className="mt-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Team Members
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                People currently working on the platform.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <article
                  key={member.id}
                  className="rounded-lg border border-slate-200 p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-semibold text-brand-700">
                    {member.name.charAt(0)}
                  </div>

                  <h3 className="mt-4 font-semibold text-slate-900">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    {member.role}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}