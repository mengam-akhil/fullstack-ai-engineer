interface ProjectCardProps {
  title: string;
  technology: string;
  status: string;
}

export default function ProjectCard({
  title,
  technology,
  status,
}: ProjectCardProps) {
  return (
    <article>
      <h2>{title}</h2>
      <p>Technology: {technology}</p>
      <p>Status: {status}</p>
    </article>
  );
}