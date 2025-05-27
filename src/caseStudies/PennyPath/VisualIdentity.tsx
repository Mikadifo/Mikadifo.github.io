import ColorCard from "../../components/ColorCard";
import { H2, P } from "../ResponsiveTags";

export default function VisualIdentity() {
  return (
    <div>
      <H2>Visual Identity</H2>
      <P>
        We wanted Pennypath to feel modern, clear and primarily easy to use. Our
        first step was find a color palette that connected to the application
        theme, which was finance and flexibility. This is way we chose yellow as
        our primary color, to represent money in the form of a coin. For the
        accent color we chose a navy blue, and a variation of this color was
        used to create a matching gradient, which represents flexibility in our
        AI suggestions. Finally we picked a clear background color that is
        slightly less than pure white, and for the text we prioritized
        readability with a close to pure black color, also based on the primary
        color.
      </P>

      <div className="flex gap-10 my-8 flex-wrap">
        <ColorCard label="Primary" hex="#FDBD1D" labelDark />
        <ColorCard
          label="Gradient"
          hex="#2F4858"
          gradient={[
            "#F26A50 0%",
            "#D95778 20%",
            "#A9578F 40%",
            "#71598F 60%",
            "#425479 80%",
            "#2F4858 100%",
          ]}
        />
        <ColorCard label="Accent" hex="#1C344B" />
        <ColorCard label="Background" hex="#F7F9FA" labelDark bordered />
        <ColorCard label="Text" hex="#010810" />
      </div>

      <P>
        Next was to design a logo that would capture the purpose of the project.
        Since we only had 48 hours to complete and submit the application, we
        decided to have ChatGPT generate multiple logos for us. We combined
        these logo concepts to design something fast but effective. Finally, we
        selected a friendly yet modern font to match our target audience which
        was young people.
      </P>

      <div>IMAGES</div>
    </div>
  );
}
