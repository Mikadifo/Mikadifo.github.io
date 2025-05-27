import HowItStarted from "./HowItStarted";
import Team from "./Team";
import TechStack from "./TechStack";

export default function PennyPath() {
  return (
    <div className="text-dark flex flex-col gap-20 sm:gap-28">
      <Team />
      <HowItStarted />
      <TechStack />
    </div>
  );
}
