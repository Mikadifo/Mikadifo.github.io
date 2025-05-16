import { getYearsAndMonths } from "~/utils/date";
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
    <div className="bg-dark mt-[-1px] py-48">
      <div className="w-[928px] mx-auto">
        <h3 className="text-5xl font-bold font-kufam text-white mb-16">
          {title}
        </h3>
        <div className="text-white leading-none flex flex-col gap-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex justify-between bg-light-05 px-6 py-6 rounded-xl"
            >
              <div className="flex">
                <img
                  src={item.img}
                  alt={item.heading + " company logo"}
                  className="rounded-xl me-4 w-[72px] h-[72px]"
                />
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-[32px]">{item.heading}</span>
                  <span className="font-normal text-2xl opacity-75">
                    {item.subheading}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 w-[212px]">
                <CalendarIcon className="mt-1.5" />
                <div className="flex flex-col text-xl font-normal">
                  <span>
                    {item.start} - {item.end}
                  </span>
                  <span className="opacity-50 mt-[-4px]">
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
