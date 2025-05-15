import Hero from "~/components/Hero";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mikadifo" },
    {
      name: "description",
      content: "I help startups and solo founders create landing pages",
    },
  ];
}

export default function Home() {
  return (
    <div className="w-[928px] mx-auto">
      <Hero />
    </div>
  );
}
