import { useState } from "react";
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
    <div className="py-48 bg-dark-04">
      <h3 className="mb-16 text-dark font-bold font-kufam text-5xl w-[928px] mx-auto">
        What Clients Say
      </h3>

      <div className="mx-auto flex items-center flex-col">
        <div className="flex gap-12 items-center relative">
          <button
            className="w-20 h-20 hover:bg-[rgba(6,4,45,0.03)] rounded-full flex items-center justify-center hover:cursor-pointer"
            onClick={handlePrevious}
          >
            <ArrowIcon className="opacity-75 rotate-180 ms-[-6px]" />
          </button>

          <div className="flex w-[928px] h-[380px] top-0 left-0 relative overflow-hidden rounded-xl">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`absolute transition-all duration-500 ease-in-out flex flex-col gap-8 px-8 py-6 bg-blue-04 rounded-xl text-dark w-[928px] shadow-md ${
                  index === currentReview
                    ? "scale-100 translate-x-0 rotate-0"
                    : "scale-85 translate-x-full rotate-8"
                }`}
              >
                <QuoteIcon className="opacity-10" />
                <p className="text-2xl font-normal leading-[36px]">
                  {review.content}
                </p>
                <div className="flex flex-col font-bold">
                  <span className="text-center text-xl">{review.author}</span>
                  <span className="text-center text-lg opacity-50">
                    {review.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            className="w-20 h-20 hover:bg-[rgba(6,4,45,0.03)] rounded-full flex items-center justify-center cursor-pointer"
            onClick={handleNext}
          >
            <ArrowIcon className="opacity-75 ms-1.5" />
          </button>
        </div>

        <div className="flex gap-4 mt-10">
          {reviews.map((review, index) => (
            <button
              key={review.id}
              type="button"
              className={`w-4 h-4 rounded-full cursor-pointer ${
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
