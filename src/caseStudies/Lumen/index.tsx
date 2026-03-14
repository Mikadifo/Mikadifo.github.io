import HowItStarted from "./HowItStarted";
import Tools from "./Tools";
import VisualIdentity from "./VisualIdentity";
import RedesignProcess from "./RedesignProcess";
import Conclusion from "./Conclusion";

export default function Lumen() {
  return (
    <div className="text-dark flex flex-col gap-20 sm:gap-28">
      <HowItStarted />
      <Tools />
      <VisualIdentity />
      <RedesignProcess />
      <Conclusion />
    </div>
  );
}
