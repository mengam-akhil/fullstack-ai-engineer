"use client";

import { useState } from "react";

interface Project {
  id: number;
  title: string;
  technology: string;
  description: string;
}

interface ProjectCardsProps {
  projects: Project[];
}

export default function ProjectCards({
  projects,
}: ProjectCardsProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );

  return (
    <section>
      <h2>Projects</h2>

      {projects.map((project) => {
        const isSelected = selectedProjectId === project.id;

        return (
          <article key={project.id}>
            <h3>{project.title}</h3>

            <p>Technology: {project.technology}</p>

            <p>{project.description}</p>

            <button
              onClick={() =>
                setSelectedProjectId(
                  isSelected ? null : project.id
                )
              }
            >
              {isSelected ? "Deselect" : "Select"}
            </button>

            {isSelected && (
              <p>
                This project is currently selected.
              </p>
            )}
          </article>
        );
      })}
    </section>
  );
}