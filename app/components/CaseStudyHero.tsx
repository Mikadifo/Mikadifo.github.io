import CloseIcon from "~/assets/icons/closeIcon.svg?react";
import type { Project } from "./Portfolio";
import { Link } from "react-router";

interface CaseStudyHeroProps {
  project: Project;
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2 leading-none">
        <div className="flex justify-between items-center">
          <h1 className="font-bold font-kufam text-[56px]">{project.title}</h1>
          <Link to="/#projects">
            <CloseIcon className="w-8 h-8 opacity-75" />
          </Link>
        </div>

        <span className="font-normal text-[32px] text-blue">
          {project.type}
        </span>
        <span className="font-normal text-[32px] text-dark opacity-50">
          {project.date}
        </span>
      </div>

      <p className="font-light text-5xl leading-[70px]">{project.brief}</p>
    </div>
  );
}
