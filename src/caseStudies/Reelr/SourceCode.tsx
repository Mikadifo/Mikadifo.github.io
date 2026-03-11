import { H2, P } from "../ResponsiveTags";
import GitHubIcon from "./../../assets/icons/githubIcon.svg?react";
import Tag from "../../components/Tag";

export default function SourceCode() {
  return (
    <div>
      <H2>Source Code</H2>
      <P>
        The complete source code for the project, including both frontend and
        backend components, is available in the project repository. It contains
        the full implementation of the CRUD operations, database integration,
        and all features developed for managing movies, custom lists, and user
        interactions.
      </P>

      <div className="flex gap-3 sm:gap-4 md:gap-8 mb-10 mt-3 flex-wrap">
        <Tag
          label="API Source Code"
          img={GitHubIcon}
          href="https://github.com/Mikadifo/reelr-api"
        />
        <Tag
          label="UI Source Code"
          img={GitHubIcon}
          href="https://github.com/Mikadifo/reelr-web"
        />
      </div>
    </div>
  );
}
