export default function Hero() {
  return (
    <div className="mt-16 sm:mt-24 lg:mt-44 mb-20 sm:mb-28 lg:mb-52 lg:w-[928px] mx-auto px-4 sm:px-8 lg:px-0 text-center sm:text-left">
      <h1 className="mb-6 lg:mb-8 font-kufam font-bold text-3xl sm:text-[40px] lg:text-[56px] text-dark">
        Website Designer & Developer
      </h1>
      <h2 className="mb-14 lg:mb-16 text-dark opacity-75 font-normal text-[28px] sm:text-[32px] lg:text-5xl leading-[33.6px] sm:leading-[38.4px] lg:leading-[57.6px]">
        Helping startups and solo founders launch beautiful websites and web
        apps
      </h2>

      <div className="flex gap-5 sm:gap-8 flex-col sm:flex-row">
        <a
          href="#contact"
          className="cta-button text-white text-lg sm:text-xl lg:text-2xl font-bold w-full sm:w-64 lg:w-72 bg-dark text-center py-4 rounded-[18px] leading-[100%]"
        >
          Get in Touch
        </a>

        <a
          href="#projects"
          className="text-dark text-lg sm:text-xl lg:text-2xl font-bold w-full sm:w-64 lg:w-72 bg-dark-10 text-center py-4 rounded-[18px] leading-[100%] hover:bg-[rgba(6,4,45,0.2)] hover:text-[rgba(6,4,45,0.85)]"
        >
          Portfolio
        </a>
      </div>
    </div>
  );
}
