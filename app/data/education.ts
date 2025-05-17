import type { ExperienceCard } from "~/components/Experience";
import hunter from "./../assets/imgs/hunter.webp";
import codepath from "./../assets/imgs/codepath.webp";
import tecazuay from "./../assets/imgs/tecazuay.webp";

export default [
  {
    id: "hunter",
    img: hunter,
    heading: "Hunter College",
    subheading: "Computer Science",
    start: "Jan 2023",
    end: "Dec - 2025",
  },
  {
    id: "codepath",
    img: codepath,
    heading: "CodePath",
    subheading: "Intro to Cybersecurity",
    start: "Jan 2023",
    end: "Apr 2023",
  },
  {
    id: "tecazuay",
    img: tecazuay,
    heading: "TecAzuay",
    subheading: "Software Development",
    start: "May 2019",
    end: "Oct 2021",
  },
] as ExperienceCard[];
