import React, { useEffect } from "react";
import { useParams } from "react-router";
import UnderConstruction from "./../caseStudies/UnderConstruction";
import CaseStudyHero from "./../components/CaseStudyHero";
import projects from "../data/projects";

export default function Projects() {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col gap-14 sm:gap-20 mt-10 sm:mt-20 lg:w-[928px] mx-auto px-4 sm:px-8 lg:px-0">
      <CaseStudyHero project={project} />
      <div className="h-[2px] w-full bg-dark rounded-full opacity-10" />

      {project ? (
        project.component ? (
          React.createElement(project.component)
        ) : (
          <UnderConstruction />
        )
      ) : (
        ""
      )}
    </div>
  );
}
