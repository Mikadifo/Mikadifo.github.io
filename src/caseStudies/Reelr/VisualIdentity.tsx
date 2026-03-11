import ColorCard from "../../components/ColorCard";
import { H2, P } from "../ResponsiveTags";
import reelrBrand from "./imgs/reelrBrand.webp";

export default function VisualIdentity() {
  return (
    <div>
      <H2>Visual Identity</H2>
      <P>
        I wanted Reelr to feel modern, clear and primarily easy to use. As usual
        the first step was to find a color dark mode palette. I decided to keep
        it simple and chose a subtle variation of black and white. For the
        accent color I chose blue, and a variation of this color was used to
        create a matching gradient. Finally I picked a success and error color
        for buttons and notification within the application.
      </P>

      <div className="flex gap-6 md:gap-10 my-8 flex-wrap justify-start">
        <ColorCard
          label="Gradient"
          hex="#5C6BFF"
          gradient={["#5C6BFF 0%", "#FF496A 100%"]}
        />
        <ColorCard label="Accent" hex="#5C6BFF" />
        <ColorCard label="Background" hex="#0E0E12" />
        <ColorCard label="Text" hex="#F3F4F6" labelDark bordered />
        <ColorCard label="Success" hex="#5CFF93" labelDark />
        <ColorCard label="Error" hex="#FF496A" />
      </div>

      <P>
        Next was to design a logo that would capture the purpose of the project.
        Since this project wasn’t gonna be deployed and the design was not the
        main focus I decided to have ChatGPT generate multiple logos for me as a
        reference. Since I still wanted to have a nice logo I combined some of
        the AI suggestions to create the final version which is a abstraction of
        an eye and a camera at the same time. The font used for this design was
        Poppins, which is a clean and modern font family.
      </P>

      <img src={reelrBrand} alt="Penny Path Logos and Font" className="mt-8" />
    </div>
  );
}
