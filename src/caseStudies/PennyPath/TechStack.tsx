import Tag from "../../components/Tag";
import { H2, P } from "../ResponsiveTags";
import FlaskLogo from "../../assets/icons/flaskLogo.svg?react";
import GeminiLogo from "../../assets/icons/geminiLogo.svg?react";
import RenderLogo from "../../assets/icons/renderLogo.svg?react";
import ReactLogo from "../../assets/icons/reactLogo.svg?react";
import TailwindLogo from "../../assets/icons/tailwindLogo.svg?react";
import FigmaLogo from "../../assets/icons/figmaLogo.svg?react";
import FirebaseLogo from "../../assets/icons/firebaseLogo.svg?react";

export default function TechStack() {
  return (
    <div>
      <H2>Tech Stack & Tools</H2>
      <P>
        To build Pennypath, we first needed to create an API to communicate
        between the web app and GeminiAI, so we decided to use Flask to create
        our server which was later deployed on Render.
      </P>

      <div className="flex gap-3 sm:gap-4 md:gap-8 mb-10 mt-3 flex-wrap">
        <Tag label="Flask" img={FlaskLogo} />
        <Tag label="GeminiAPI" img={GeminiLogo} />
        <Tag label="Render" img={RenderLogo} />
      </div>

      <P>
        The user interface was designed in Figma, and then implemented in React.
        To quickly apply colors, shadows and responsiveness, we used Tailwind.
        Finally we hosted our website on Firebase.
      </P>

      <div className="flex gap-3 sm:gap-4 md:gap-8 mt-3 flex-wrap">
        <Tag label="React" img={ReactLogo} />
        <Tag label="Tailwind" img={TailwindLogo} />
        <Tag label="Figma" img={FigmaLogo} />
        <Tag label="Firebase" img={FirebaseLogo} />
      </div>
    </div>
  );
}
