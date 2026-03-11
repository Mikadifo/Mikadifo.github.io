import Tag from "../../components/Tag";
import { H2, P } from "../ResponsiveTags";
import PrismaLogo from "../../assets/icons/prismaLogo.svg?react";
import ExpressJSLogo from "../../assets/icons/expressJSLogo.svg?react";
import SwaggerLogo from "../../assets/icons/swaggerLogo.svg?react";
import ReactLogo from "../../assets/icons/reactLogo.svg?react";
import TailwindLogo from "../../assets/icons/tailwindLogo.svg?react";
import FigmaLogo from "../../assets/icons/figmaLogo.svg?react";
import FormikLogo from "../../assets/icons/formikLogo.svg?react";

export default function TechStack() {
  return (
    <div>
      <H2>Tech Stack & Tools</H2>
      <P>
        Reelr requires a database for storing users and therefore an API. I used
        Prisma for storing data and ExpressJS as the server framework. For data
        validation I used Yup and for documentation I went with Swagger.
      </P>

      <div className="flex gap-3 sm:gap-4 md:gap-8 mb-10 mt-3 flex-wrap">
        <Tag label="Prisma" img={PrismaLogo} href="https://www.prisma.io/" />
        <Tag
          label="ExpressJS"
          img={ExpressJSLogo}
          href="https://expressjs.com/"
        />
        <Tag label="Swagger" img={SwaggerLogo} href="https://swagger.io/" />
        <Tag label="Yup" href="https://github.com/jquense/yup" />
      </div>

      <P>
        The user interface was designed in Figma, and then implemented in React.
        To quickly apply colors and shadows I used Tailwind. Formik and Yup were
        used for form and data validation.
      </P>

      <div className="flex gap-3 sm:gap-4 md:gap-8 mt-3 flex-wrap">
        <Tag label="React" img={ReactLogo} href="https://react.dev/" />
        <Tag
          label="Tailwind"
          img={TailwindLogo}
          href="https://tailwindcss.com/"
        />
        <Tag label="Figma" img={FigmaLogo} href="https://www.figma.com/" />
        <Tag label="Formik" img={FormikLogo} href="https://formik.org/" />
      </div>
    </div>
  );
}
