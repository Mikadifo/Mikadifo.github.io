import { useRef, useState } from "react";
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
  const [moving, setMoving] = useState<boolean>(true);
  const [gradientHex, setGradientHex] = useState<string | null>(null);
  const pickerRef = useRef<SVGSVGElement | null>(null);

  const gradientColors = gradient.map((color) => color.split(" ")[0]).reverse();
  let background = {};

  if (gradient.length > 0) {
    background = {
      background: `linear-Gradient(to right, ${gradient.join(", ")})`,
    };
  } else {
    background = { background: hex };
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!moving) return;

    const colorBox = event.currentTarget.getBoundingClientRect();
    const x = Math.abs(event.clientX - colorBox.right);
    const y = Math.abs(event.clientY - colorBox.top);

    const colorDivisions = (colorBox.right - colorBox.left) / gradient.length;
    const colorIndex = Math.floor(x / colorDivisions);
    setGradientHex(gradientColors[colorIndex]);

    pickerRef.current!.style.right = x + "px";
    pickerRef.current!.style.top = y + "px";
  };

  const handleMouseExit = () => {
    if (!moving) return;

    pickerRef.current!.style.right = "12px";
    pickerRef.current!.style.top = "12px";
    setGradientHex(null);
  };

  return (
    <div className="w-[153.6px]">
      <div
        onMouseMove={gradient.length > 0 ? handleMouseMove : undefined}
        onMouseLeave={gradient.length > 0 ? handleMouseExit : undefined}
        onClick={gradient.length > 0 ? () => setMoving(!moving) : undefined}
        className={`relative size-[153.6px] font-normal text-2xl p-3 flex items-end justify-center rounded-xl ${labelDark ? "text-dark" : "text-white"} ${bordered ? "border-1 border-dark-25" : ""} ${gradient.length > 0 ? "cursor-none" : ""}`}
        style={{ ...background }}
      >
        {gradient.length > 0 ? (
          <PickerIcon className="absolute top-3 right-3" ref={pickerRef} />
        ) : (
          ""
        )}
        {label}
      </div>

      <div className="text-xl font-normal py-2 px-5 w-full bg-dark-04 text-dark-75 rounded-xl mt-2 flex justify-center">
        {gradient.length > 0 ? gradientHex || "Pick Color" : hex}
      </div>
    </div>
  );
}
