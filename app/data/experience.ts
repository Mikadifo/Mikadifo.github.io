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
    start: "2025-03-01",
    end: "Present",
  },
  {
    id: "freelance",
    img: mikadifo,
    heading: "Freelance",
    subheading: "Front End Developer",
    start: "2022-04-01",
    end: "Present",
  },
  {
    id: "swc",
    img: swc,
    heading: "Students Who Code",
    subheading: "Software Engineer Intern",
    start: "2024-03-01",
    end: "2024-04-01",
  },
  {
    id: "libelula",
    img: libelula,
    heading: "Libélula Soft",
    subheading: "Full Stack Software Developer",
    start: "2021-07-01",
    end: "2022-01-01",
  },
] as ExperienceCard[];
