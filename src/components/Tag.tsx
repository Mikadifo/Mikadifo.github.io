import React from "react";

type TagProps = {
  label: string;
  img?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export default function Tag({ label, img }: TagProps) {
  return (
    <div className="flex gap-2 py-1 px-5 md:py-2 md:px-6 bg-dark text-white text-lg md:text-2xl font-normal rounded-full items-center">
      {img ? React.createElement(img, { className: "size-5 md:size-6" }) : ""}
      {label}
    </div>
  );
}
