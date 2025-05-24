import type { ExperienceCard } from "./../components/Experience";
import hunter from "./../assets/imgs/hunter.webp";
import codepath from "./../assets/imgs/codepath.webp";
import tecazuay from "./../assets/imgs/tecazuay.webp";

export default [
  {
    id: "hunter",
    img: hunter,
    heading: "Hunter College",
    subheading: "Computer Science",
    start: "01/01/2023",
    end: "12/01/2025",
  },
  {
    id: "codepath",
    img: codepath,
    heading: "CodePath",
    subheading: "Intro to Cybersecurity",
    start: "01/01/2023",
    end: "04/01/2023",
  },
  {
    id: "tecazuay",
    img: tecazuay,
    heading: "TecAzuay",
    subheading: "Software Development",
    start: "05/01/2019",
    end: "10/01/2021",
  },
] as ExperienceCard[];
