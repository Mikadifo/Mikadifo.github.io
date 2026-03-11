import Features from "./Features";
import HowItStarted from "./HowItStarted";
import TechStack from "./TechStack";
import VisualIdentity from "./VisualIdentity";
import SourceCode from "./SourceCode";

export default function Reelr() {
  return (
    <div className="text-dark flex flex-col gap-20 sm:gap-28">
      <HowItStarted />
      <TechStack />
      <VisualIdentity />
      <Features />
      <SourceCode />
    </div>
  );
}
