import michaelAvatar from "../../assets/imgs/michaelAvatar.webp";
import ludwinAvatar from "../../assets/imgs/ludwinAvatar.webp";
import UserIcon from "../../assets/icons/userIcon.svg?react";
import { H2, P } from "./../ResponsiveTags";

export default function Team() {
  return (
    <div>
      <H2>About The Team</H2>
      <P>
        This projects would not have been possible without these amazing
        teammates. Having four people in the team helped us focus on specific
        individual tasks allowing us to work faster and complete the project in
        the given time period.
      </P>

      <div className="flex flex-wrap gap-8 lg:gap-16 justify-center mt-8">
        <div className="flex flex-col items-center">
          <img
            src={ludwinAvatar}
            alt="ludwin avatar"
            className="size-20 md:size-[100px] mb-2"
          />
          <a
            href="https://www.linkedin.com/in/ludwin-tenezaca/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-2xl md:text-[32px] hover:underline"
          >
            Ludwin
          </a>
          <span className="font-normal text-lg md:text-2xl opacity-75">
            Backend Dev.
          </span>
          <span className="font-normal text-lg md:text-2xl opacity-75">
            AI Integration
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-20 md:size-[100px] flex items-center justify-center bg-[#EBECF7] rounded-full mb-2">
            <UserIcon className="size-6 md:size-auto" />
          </div>
          <a
            href="https://www.linkedin.com/in/mohamed-mohamed-ali-8557a0363/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-2xl md:text-[32px] hover:underline"
          >
            Mohamed
          </a>
          <span className="font-normal text-lg md:text-2xl opacity-75">
            Backend Dev.
          </span>
          <span className="font-normal text-lg md:text-2xl opacity-75">
            API Hosting
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-20 md:size-[100px] flex items-center justify-center bg-[#EBECF7] rounded-full mb-2">
            <UserIcon className="size-6 md:size-auto" />
          </div>
          <span className="font-bold text-2xl md:text-[32px]">Raymond</span>
          <span className="font-normal text-lg md:text-2xl opacity-75">
            Documentation
          </span>
          <span className="font-normal text-lg md:text-2xl opacity-75">
            Project Strategy
          </span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={michaelAvatar}
            alt="michael avatar"
            className="size-20 md:size-[100px] mb-2 rounded-full"
          />
          <a
            href="https://www.linkedin.com/in/mikadifo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-2xl md:text-[32px] hover:underline"
          >
            Michael (Me)
          </a>
          <span className="font-normal text-lg md:text-2xl opacity-75">
            Frontend Dev.
          </span>
          <span className="font-normal text-lg md:text-2xl opacity-75">
            UI Designer
          </span>
        </div>
      </div>
    </div>
  );
}
