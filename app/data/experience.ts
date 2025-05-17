import type { ExperienceCard } from "~/components/Experience";
import movement from "./../assets/imgs/movement.webp";
import mikadifo from "./../assets/imgs/mikadifo.webp";
import swc from "./../assets/imgs/swc.webp";
import libelula from "./../assets/imgs/libelula.webp";

export default [
  {
    id: "mov_vault",
    img: movement,
    heading: "Movement Vault",
    subheading: "Software Engineer Intern",
    start: "Mar 2025",
    end: "Present",
  },
  {
    id: "freelance",
    img: mikadifo,
    heading: "Freelance",
    subheading: "Front End Developer",
    start: "Apr 2022",
    end: "Present",
  },
  {
    id: "swc",
    img: swc,
    heading: "Students Who Code",
    subheading: "Software Engineer Intern",
    start: "Mar 2024",
    end: "Apr 2024",
  },
  {
    id: "libelula",
    img: libelula,
    heading: "Libélula Soft",
    subheading: "Full Stack Software Developer",
    start: "Jul 2021",
    end: "Jan 2022",
  },
] as ExperienceCard[];
