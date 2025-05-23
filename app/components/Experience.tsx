import { getYearsAndMonths, getShortFormat } from "~/utils/date";
import CalendarIcon from "./../assets/icons/calendarIcon.svg?react";

type ExperienceProps = {
  title: string;
  data: ExperienceCard[];
};

export interface ExperienceCard {
  id: string;
  img: string;
  heading: string;
  subheading: string;
  start: string;
  end: string;
}

export default function Experience({ title, data }: ExperienceProps) {
  return (
    <div className="bg-dark py-20 sm:py-32 lg:py-48 px-4 sm:px-8 lg:px-0">
      <div className="lg:w-[928px] mx-auto">
        <h3 className="text-4xl lg:text-5xl font-bold font-kufam text-white mb-8 lg:mb-16">
          {title}
        </h3>

        <div className="text-white leading-none flex flex-col gap-6 lg:gap-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex justify-between bg-light-05 px-5 py-5 sm:px-6 sm:py-6 rounded-xl flex-col sm:flex-row"
            >
              <div className="flex">
                <img
                  src={item.img}
                  alt={item.heading + " company logo"}
                  className="rounded-xl me-3 lg:me-4 w-14 h-14 lg:w-[72px] lg:h-[72px]"
                />

                <div className="flex flex-col lg:gap-2">
                  <span className="font-bold text-2xl lg:text-[32px]">
                    {item.heading}
                  </span>
                  <span className="font-normal text-xl lg:text-2xl opacity-75">
                    {item.subheading}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 lg:gap-3 sm:w-[177px] lg:w-[212px] mt-4 sm:mt-0 items-center sm:items-start">
                <CalendarIcon className="sm:mt-[1.4px] lg:mt-1.5 w-5 lg:w-auto" />

                <div className="flex flex-row sm:flex-col text-base lg:text-xl font-normal justify-between sm:justify-start w-full sm:w-auto">
                  <span>
                    {getShortFormat(item.start)} - {getShortFormat(item.end)}
                  </span>
                  <span className="opacity-50 sm:mt-[-4px]">
                    {getYearsAndMonths(item.start, item.end)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
