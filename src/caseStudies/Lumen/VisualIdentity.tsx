import ColorCard from "../../components/ColorCard";
import { H2, P } from "../ResponsiveTags";

export default function VisualIdentity() {
  return (
    <div>
      <H2>Visual Identity</H2>
      <P>
        I aimed to stay as close as possible to the original brand identity.
        Instead of introducing completely new colors, I adjusted the tones of
        the existing palette to improve contrast and clarity throughout the
        interface. These subtle changes helped improve buttons, boxes and other
        elements visibility. I darkened the original blue color and added yellow
        as an accent color. I used the primary color to create the error and
        success colors and kept pure black and white for the background and
        text.
      </P>

      <div className="flex gap-6 md:gap-10 my-8 flex-wrap justify-start">
        <ColorCard label="Primary" hex="#28508D" />
        <ColorCard label="Accent" hex="#FFD600" labelDark />
        <ColorCard label="Success" hex="#CADDC2" labelDark />
        <ColorCard label="Error" hex="#F6BFC3" labelDark />
      </div>
    </div>
  );
}
