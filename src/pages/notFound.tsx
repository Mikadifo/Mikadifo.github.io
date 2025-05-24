import AnimatedClumsyIllustration from "../components/AnimatedClumsyIllustration";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-8 lg:px-16 py-8 md:py-16 lg:py-24">
      <AnimatedClumsyIllustration className="w-full max-h-[450px] h-auto mb-6 sm:mb-10 md:mb-20" />

      <div className="flex flex-col gap-2 lg:gap-6 leading-0">
        <h1 className="font-kufam font-bold text-3xl sm:text-[40px] lg:text-[56px] text-dark">
          404 - Page Not Found
        </h1>
        <h2 className="text-dark opacity-75 font-normal text-[28px] sm:text-[32px] lg:text-5xl leading-[33.6px] sm:leading-[38.4px] lg:leading-[57.6px]">
          Oops! The page you're looking for doesn't exist.
        </h2>
      </div>

      <a
        href="/"
        className="cta-button text-white text-lg sm:text-xl lg:text-2xl font-bold w-full sm:w-64 lg:w-72 bg-dark text-center py-4 rounded-[18px] leading-[100%] mt-8 sm:mt-12"
      >
        Go back to Home
      </a>
    </div>
  );
}
