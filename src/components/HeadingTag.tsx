import { useEffect, useState, type RefObject } from "react";

type HeadingTagProps = {
  headings: any[];
};

export default function HeadingTag({ headings }: HeadingTagProps) {
  const [hovering, setHovering] = useState<string>("");
  const [current, setCurrent] = useState<number | null>(null);

  const handleScroll = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const divRect = ref.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = divRect.top + scrollTop - 88;

      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = headings.findIndex(
              ({ ref }) => ref.current === entry.target,
            );

            setCurrent(index);
          }
        });
      },
      { root: null, threshold: 0 },
    );

    headings.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      headings.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, headings);

  return (
    <div className="flex flex-col fixed top-[128px] right-[128px] me-32 gap-4 items-end">
      {headings.map((heading, index) => (
        <div
          key={heading.id}
          className={`w-10 h-5 overflow-hidden rounded-full ${current === index ? "bg-[#7E7D96]" : "bg-[#DEDEEA]"} hover:w-auto hover:px-3 cursor-pointer ${hovering === heading.id ? "text-white" : "text-transparent"}`}
          onMouseEnter={() => setHovering(heading.id)}
          onMouseLeave={() => setHovering("")}
          onClick={() => handleScroll(heading.ref)}
        >
          <span className="text-center font-bold text-sm">{heading.label}</span>
        </div>
      ))}
    </div>
  );
}
