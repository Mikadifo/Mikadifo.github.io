import PickerIcon from "./../assets/icons/pickerIcon.svg?react";

type ColorCardProps = {
  hex: string;
  label: string;
  labelDark?: boolean;
  bordered?: boolean;
  gradient?: string[];
};

export default function ColorCard({
  hex,
  label,
  labelDark = false,
  bordered = false,
  gradient = [],
}: ColorCardProps) {
  let background = {};

  if (gradient.length > 0) {
    background = {
      background: `linear-Gradient(to right, ${gradient.join(", ")})`,
    };
  } else {
    background = { background: hex };
  }

  return (
    <div className="w-[153.6px]">
      <div
        className={`relative size-[153.6px] font-normal text-2xl p-3 flex items-end justify-center rounded-xl ${labelDark ? "text-dark" : "text-white"} ${bordered ? "border-1 border-dark-25" : ""}`}
        style={{ ...background }}
      >
        {gradient.length > 0 ? (
          <PickerIcon className="absolute top-3 right-3" />
        ) : (
          ""
        )}
        {label}
      </div>

      <div className="text-xl font-normal py-2 px-5 w-full bg-dark-04 text-dark-75 rounded-xl mt-2 flex justify-center">
        {hex}
      </div>
    </div>
  );
}
