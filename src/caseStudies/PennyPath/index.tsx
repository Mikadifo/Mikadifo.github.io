import Features from "./Features";
import HowItStarted from "./HowItStarted";
import Team from "./Team";
import TechStack from "./TechStack";
import VisualIdentity from "./VisualIdentity";

export default function PennyPath() {
  return (
    <div className="text-dark flex flex-col gap-20 sm:gap-28">
      <Team />
      <HowItStarted />
      <TechStack />
      <VisualIdentity />
      <Features />
    </div>
  );
}
