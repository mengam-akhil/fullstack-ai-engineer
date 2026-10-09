import UserCard from "../../components/UserCard";
import ProjectCard from "../../components/ProjectCard";

export default function ComponentsDemoPage() {
  return (
    <main>
      <h1>Component Props Demo</h1>

      <UserCard
        name="Akhil"
        role="Full Stack AI Engineer"
        experience={3}
      />

      <UserCard
        name="John"
        role="Frontend Developer"
        experience={2}
      />

      <ProjectCard
        title="AI Dashboard"
        technology="Next.js"
        status="In Progress"
      />
    </main>
  );
}