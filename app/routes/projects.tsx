import React from "react";
import { useParams } from "react-router";
import CaseStudyHero from "~/components/CaseStudyHero";
import projects from "~/data/projects";

export default function Projects() {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);
  let caseStudy = null;

  if (project) {
    caseStudy = <CaseStudyHero project={project} />;

    return (
      <div className="mt-20 w-[928px] mx-auto">
        {caseStudy}
        {project.component
          ? React.createElement(project.component)
          : "UNDER CON"}
      </div>
    );
  }

  return (
    <div>
      <h1>Project not found</h1>
    </div>
  );
}
