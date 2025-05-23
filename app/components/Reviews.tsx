import { useEffect, useRef, useState } from "react";
import ArrowIcon from "./../assets/icons/arrowIcon.svg?react";
import QuoteIcon from "./../assets/icons/quoteIcon.svg?react";
import reviews from "./../data/reviews";

export interface Review {
  id: string;
  author: string;
  role: string;
  content: string;
}

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;

    if (container && card) {
      const resizeObserver = new ResizeObserver(() => {
        container.style.height = `${5 + card.offsetHeight}px`;
      });

      resizeObserver.observe(card);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  const handlePrevious = () => {
    if (currentReview - 1 < 0) {
      setCurrentReview(reviews.length - 1);
    } else {
      setCurrentReview(currentReview - 1);
    }
  };

  const handleNext = () => {
    if (currentReview + 1 >= reviews.length) {
      setCurrentReview(0);
    } else {
      setCurrentReview(currentReview + 1);
    }
  };

  return (
    <div className="py-32 lg:py-48 bg-dark-04 px-8 lg:px-0">
      <h3 className="mb-8 lg:mb-16 text-dark font-bold font-kufam text-4xl lg:text-5xl lg:w-[928px] mx-auto">
        What Clients Say
      </h3>

      <div className="mx-auto flex items-center flex-col">
        <div className="flex gap-4 lg:gap-12 items-center relative">
          <button
            className="w-16 h-16 lg:w-20 lg:h-20 hover:bg-[rgba(6,4,45,0.03)] rounded-full flex items-center justify-center hover:cursor-pointer"
            onClick={handlePrevious}
          >
            <ArrowIcon className="opacity-75 rotate-180 ms-[-6px] h-8 lg:h-auto" />
          </button>

          <div
            ref={containerRef}
            className="flex 2xl:w-[928px] w-[calc(100vw-224px)] lg:w-[672px] 2xl:h[380px] lg:h[415px] top-0 left-0 relative overflow-hidden rounded-xl"
          >
            {reviews.map((review, index) => (
              <div
                key={review.id}
                ref={cardRef}
                className={`absolute transition-all duration-500 ease-in-out flex flex-col gap-4 lg:gap-8 p-5 lg:px-8 lg:py-6 bg-blue-04 rounded-xl text-dark shadow-md ${
                  index === currentReview
                    ? "scale-100 translate-x-0 rotate-0"
                    : "scale-85 translate-x-full rotate-8"
                }`}
              >
                <QuoteIcon className="opacity-10 h-14 lg:h-auto" />
                <p className="text-xl lg:text-2xl font-normal leading-[30px] lg:leading-[36px]">
                  {review.content}
                </p>

                <div className="flex flex-col font-bold">
                  <span className="text-center text-lg lg:text-xl">
                    {review.author}
                  </span>
                  <span className="text-center text-base lg:text-lg opacity-50">
                    {review.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            className="w-16 lg:w-20 h-16 lg:h-20 hover:bg-[rgba(6,4,45,0.03)] rounded-full flex items-center justify-center cursor-pointer"
            onClick={handleNext}
          >
            <ArrowIcon className="opacity-75 ms-1.5 h-8 lg:h-auto" />
          </button>
        </div>

        <div className="flex gap-2 lg:gap-4 mt-6 lg:mt-10">
          {reviews.map((review, index) => (
            <button
              key={review.id}
              type="button"
              className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full cursor-pointer ${
                index === currentReview
                  ? "bg-blue"
                  : "bg-dark opacity-25 hover:opacity-15"
              }`}
              onClick={() => setCurrentReview(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
