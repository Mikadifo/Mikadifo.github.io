import { H2, P } from "./../ResponsiveTags";
import Team from "./Team";

export default function PennyPath() {
  return (
    <div className="text-dark flex flex-col gap-20 sm:gap-28">
      <Team />
      <HowItStarted />
    </div>
  );
}

function HowItStarted() {
  return (
    <div>
      <H2>How It Started</H2>
      <P>
        Pennypath was born out of an idea to provide fast, personalized and
        accessible suggestions for spending within a budget. We came up with the
        idea during our Computer Science club’s first hackathon event
        “HunterHacks” at Hunter College. The goal was to build an app that
        allows users to enter their budget, their location and a spending
        category — then receive AI-generated suggestions tailored to their
        needs.
      </P>
    </div>
  );
}
