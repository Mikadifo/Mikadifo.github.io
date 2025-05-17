import type { Route } from "./+types/home";
import Hero from "~/components/Hero";
import About from "~/components/About";
import WaveDivider from "./../assets/dividers/waveDivider.svg?react";
import RoundedDivider from "./../assets/dividers/roundedDivider.svg?react";
import Experience from "~/components/Experience";
import experienceData from "./../data/experience";
import Portfolio from "~/components/Portfolio";
import educationData from "~/data/education";
import Reviews from "~/components/Reviews";
import Contact from "~/components/Contact";

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
      <Experience title="Experience" data={experienceData} />
      <Portfolio />
      <Experience title="How I Got Started" data={educationData} />
      <RoundedDivider className="w-full h-auto bg-dark" />
      <Reviews />
      <Contact />
    </>
  );
}
