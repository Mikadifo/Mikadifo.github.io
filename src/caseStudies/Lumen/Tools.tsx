import Tag from "../../components/Tag";
import { H2, P } from "../ResponsiveTags";
import SheetsLogo from "../../assets/icons/sheetsLogo.svg?react";
import FigmaLogo from "../../assets/icons/figmaLogo.svg?react";
import DribbleLogo from "../../assets/icons/dribbleLogo.svg?react";

export default function TechStack() {
  return (
    <div>
      <H2>Tools</H2>
      <P>
        First I had to identify the pain points of the application, so I used
        Google Sheets to have all this organized and it also worked as a todo
        list for later. I also used different designs in Dribble as an
        inspiration to redesign this app. Figma was the main design tool used
        during this redesign, from wireframes, to the final design.
      </P>

      <div className="flex gap-3 sm:gap-4 md:gap-8 mb-10 mt-3 flex-wrap">
        <Tag
          label="Google Sheets"
          img={SheetsLogo}
          href="https://docs.google.com/spreadsheets/create"
        />
        <Tag label="Figma" img={FigmaLogo} href="https://figma.com/" />
        <Tag label="Dribble" img={DribbleLogo} href="https://dribble.com/" />
      </div>
    </div>
  );
}
