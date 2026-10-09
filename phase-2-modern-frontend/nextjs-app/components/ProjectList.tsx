interface Project {
  id: number;
  title: string;
  technology: string;
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({
  projects,
}: ProjectListProps) {
  return (
    <section>
      <h2>Projects</h2>

      {projects.map((project) => (
        <article key={project.id}>
          <h3>{project.title}</h3>
          <p>Technology: {project.technology}</p>
        </article>
      ))}
    </section>
  );
}