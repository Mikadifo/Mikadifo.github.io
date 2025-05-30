import { useRef } from "react";
import HeadingTag from "../../components/HeadingTag";
import Features from "./Features";
import FinalDesign from "./FinalDesign";
import HowItStarted from "./HowItStarted";
import Team from "./Team";
import TechStack from "./TechStack";
import VisualIdentity from "./VisualIdentity";

export default function PennyPath() {
  const teamRef = useRef<HTMLDivElement>(null);
  const startsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const featReaf = useRef<HTMLDivElement>(null);
  const finalReaf = useRef<HTMLDivElement>(null);

  return (
    <div className="text-dark flex flex-col gap-20 sm:gap-28 relative">
      <HeadingTag
        headings={[
          {
            id: "team",
            label: "About The Team",
            ref: teamRef,
          },
          {
            id: "starts",
            label: "How It Started",
            ref: startsRef,
          },
          {
            id: "tech",
            label: "Tech Stack & Tools",
            ref: techRef,
          },
          {
            id: "visual",
            label: "Visual Identity",
            ref: visualRef,
          },
          {
            id: "feats",
            label: "Features & How It Works",
            ref: featReaf,
          },
          {
            id: "final",
            label: "Final Design & Live Demo",
            ref: finalReaf,
          },
        ]}
      />

      <Team ref={teamRef} />
      <HowItStarted ref={startsRef} />
      <TechStack ref={techRef} />
      <VisualIdentity ref={visualRef} />
      <Features ref={featReaf} />
      <FinalDesign ref={finalReaf} />
    </div>
  );
}
