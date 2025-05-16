export default function Hero() {
  return (
    <div className="mt-44 mb-52 w-[928px] mx-auto">
      <h1 className="mb-8 font-kufam font-bold text-[56px] text-dark">
        Website Designer & Developer
      </h1>
      <h2 className="mb-16 text-dark opacity-75 font-normal text-5xl leading-[57.6px]">
        Helping startups and solo founders launch beautiful websites and web
        apps
      </h2>
      <div className="flex gap-8">
        <a
          href="#contact"
          className="cta-button text-white text-2xl font-bold w-72 bg-dark text-center py-4 rounded-[18px] leading-[100%]"
        >
          Get in Touch
        </a>

        <a
          href="#projects"
          className="text-dark text-2xl font-bold w-72 bg-dark-10 text-center py-4 rounded-[18px] leading-[100%] hover:bg-[rgba(6,4,45,0.2)]"
        >
          Portfolio
        </a>
      </div>
    </div>
  );
}
