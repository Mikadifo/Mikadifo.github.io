import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Reviews from "../components/Reviews";
import experienceData from "./../data/experience.ts";
import educationData from "./../data/education.ts";
import WaveDivider from "./../assets/dividers/waveDivider.svg?react";
import RoundedDivider from "./../assets/dividers/roundedDivider.svg?react";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WaveDivider className="w-full h-auto bg-dark fill-[#ebecf7]" />
      <Experience title="Experience" data={experienceData} />
      <Portfolio />
      <Experience title="How I Got Started" data={educationData} />
      <RoundedDivider className="w-full h-auto fill-[#06042D] bg-[#ebecf7]" />
      <Reviews />
      <Contact />
    </>
  );
}
