import type { Route } from "./+types/home";
import Hero from "~/components/Hero";
import About from "~/components/About";
import WaveDivider from "./../assets/dividers/waveDivider.svg?react";

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
      <WaveDivider className="w-full h-auto" />
    </>
  );
}
