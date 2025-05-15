import Hero from "~/components/Hero";
import type { Route } from "./+types/home";
import About from "~/components/About";

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
    <>
      <Hero />
      <About />
    </>
  );
}
