import CloseIcon from "~/assets/icons/closeIcon.svg?react";
import type { Project } from "./Portfolio";
import { Link } from "react-router";

interface CaseStudyHeroProps {
  project: Project;
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <div className="flex flex-col gap-6 sm:gap-10">
      <div className="flex flex-col gap-0 lg:gap-2 leading-none">
        <div className="flex justify-between items-center">
          <h1 className="font-bold font-kufam text-3xl sm:text-[40px] lg:text-[56px]">
            {project.title}
          </h1>
          <Link to="/#projects">
            <CloseIcon className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 opacity-75" />
          </Link>
        </div>

        <span className="font-normal text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-blue">
          {project.type}
        </span>
        <span className="font-normal text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-dark opacity-50">
          {project.date}
        </span>
      </div>

      <p className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-9 sm:leading-11 md:leading-[52px] lg:leading-[70px]">
        {project.brief}
      </p>
    </div>
  );
}
