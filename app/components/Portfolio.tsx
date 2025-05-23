import projects from "./../data/projects";
import ArrowIcon from "./../assets/icons/arrowIcon.svg?react";

export interface Project {
  id: string;
  img: string;
  title: string;
  type: string;
  date: string;
  brief: string;
}

export default function Portfolio() {
  return (
    <div
      className="lg:w-[928px] mx-auto py-32 lg:py-48 text-dark flex flex-col leading-none px-8 lg:px-0"
      id="projects"
    >
      <h3 className="text-4xl lg:text-5xl font-bold font-kufam mb-8 lg:mb-16">
        What I've Built
      </h3>

      <div className="flex flex-wrap gap-6 lg:gap-10 mb-16">
        {projects.map((project) => (
          <a
            href="#TODO"
            key={project.id}
            className="bg-white p-4 lg:p-6 rounded-xl drop-shadow-sm min-w-[300px] w-[calc(50%-24px)] lg:w-[444px] group hover:drop-shadow-xl transition-all duration-700"
          >
            <img
              src={project.img}
              alt={project.title + " project preview"}
              className="rounded-xl"
            />

            <div className="flex justify-between mt-4">
              <div>
                <h4 className="font-bold text-2xl lg:text-[32px] lg:mb-2">
                  {project.title}
                </h4>

                <span className="font-normal text-lg lg:text-xl opacity-60">
                  {project.type}
                </span>
              </div>

              <ArrowIcon className="self-center opacity-0 group-hover:opacity-10 transition-opacity duration-700 h-[32px] lg:h-auto" />
            </div>
          </a>
        ))}
      </div>

      <button
        type="button"
        className="text-dark text-xl lg:text-2xl font-bold px-[72px] bg-dark-10 text-center py-4 rounded-[18px] leading-[100%] w-64 lg:w-72 self-center hover:bg-[rgba(6,4,45,0.2)] hover:text-[rgba(6,4,45,0.85)] cursor-pointer"
      >
        Show More
      </button>
    </div>
  );
}
