import { H2, P } from "../ResponsiveTags";
import pennyPathDemo from "./imgs/pennyPathDemo.webp";
import GitHubIcon from "./../../assets/icons/githubIcon.svg?react";
import LinkIcon from "./../../assets/icons/linkIcon.svg?react";
import Tag from "../../components/Tag";

export default function FinalDesign() {
  return (
    <div>
      <H2>Final Design & Live Demo</H2>
      <P>
        This was a very challenging project, mainly because of such a tight
        deadline, so we left out many features that we wanted to include as well
        as some small design and code details. The live demo may not work in the
        future, so this is the final design of the app. You can also build it
        yourself using the provided GitHub repositories.
      </P>

      <div className="flex gap-3 sm:gap-4 md:gap-8 mb-10 mt-3 flex-wrap">
        <Tag
          label="API Source Code"
          img={GitHubIcon}
          href="https://github.com/ludwint3265/BudgetCalculatorBackend"
        />
        <Tag
          label="UI Source Code"
          img={GitHubIcon}
          href="https://github.com/ludwint3265/BudgetCalculatorFrontend"
        />
        <Tag
          label="View Live Project"
          img={LinkIcon}
          href="https://pennypath-bd3cd.web.app/"
        />
      </div>

      <img src={pennyPathDemo} alt="PennyPath Final Design" />
    </div>
  );
}
