import React from "react";

type TagProps = {
  label: string;
  img?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  href: string;
};

export default function Tag({ label, img, href }: TagProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-2 py-1 px-5 md:py-2 md:px-6 bg-dark text-white text-lg md:text-2xl font-normal rounded-full items-center hover:opacity-80"
    >
      {img
        ? React.createElement(img, {
            className: "size-5 lg:size-6 fill-[#F5F6FF]",
          })
        : ""}
      {label}
    </a>
  );
}
