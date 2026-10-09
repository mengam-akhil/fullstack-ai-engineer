import ProjectCards from "../../components/ProjectCards";

const projects = [
  {
    id: 1,
    title: "AI Dashboard",
    technology: "Next.js",
    description: "An AI-powered analytics dashboard.",
  },
  {
    id: 2,
    title: "User Management System",
    technology: "FastAPI",
    description: "A backend system for managing application users.",
  },
  {
    id: 3,
    title: "DevOps Monitoring Platform",
    technology: "Docker",
    description: "A monitoring platform for containerized applications.",
  },
  {
    id: 4,
    title: "AI Chat Platform",
    technology: "TypeScript",
    description: "A real-time AI conversation interface.",
  },
];

export default function InteractiveProjectsPage() {
  return (
    <main>
      <h1>Interactive Project Dashboard</h1>

      <ProjectCards projects={projects} />
    </main>
  );
}