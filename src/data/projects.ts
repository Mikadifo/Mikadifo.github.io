import type { Project } from "./../components/Portfolio";
import pennypath from "./../assets/imgs/pennypath.webp";
import ismael from "./../assets/imgs/ismael.webp";
import marcfashion from "./../assets/imgs/marcfashion.webp";
import moneymoon from "./../assets/imgs/moneymoon.webp";
import reelr from "./../assets/imgs/reelr.webp";
import PennyPath from "../caseStudies/PennyPath/index";
import Reelr from "../caseStudies/Reelr/index";

export default [
  {
    id: "penny_path",
    img: pennypath,
    title: "PennyPath",
    type: "Hackathon Project",
    date: "May 2025",
    brief:
      "PennyPath is a web app that offers smart and personalized AI suggestions based on an estimated budget, location and category.",
    component: PennyPath,
    tab: "software",
  },
  {
    id: "ismael_sarmiento",
    img: ismael,
    title: "Ismael Sarmiento",
    type: "Website & Business Card",
    date: "February 2025",
    brief:
      "A landing/personal portfolio web for Dr. Ismael Sarmiento, a psychologist based in Cuenca, Ecuador.",
    tab: "software",
  },
  {
    id: "money_moon",
    img: moneymoon,
    title: "MoneyMoon",
    type: "Side Project",
    date: "April 2024",
    brief:
      "MoneyMoon is a personal financial tracker that allows you to take control of your money. It helps you to create groups of transactions to have a more organized money management.",
    tab: "software",
  },
  {
    id: "Reelr",
    img: reelr,
    title: "Reelr",
    type: "Side Project",
    date: "November 2025",
    brief:
      "Reelr is a web app that helps you keep track of movies you love and would watch again, movies that you want to watch or movies that you didn’t like as much. You’ll be able to rate movies from 1 to 5, create custom lists, and even publicly share your lists/movies with friends.",
    component: Reelr,
    tab: "software",
  },
  {
    id: "marcfashion",
    img: marcfashion,
    title: "Marcfashion",
    type: "Startup Website",
    date: "April 2023",
    brief:
      "Marcfashion is a taylor shop based in Ecuador that creates personalized, modern and hight-quality suits for their clients.",
    tab: "software",
  },
] as Project[];
