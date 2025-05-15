export default function Hero() {
  return (
    <div className="mt-[200px] mb-[300px]">
      <h1 className="mb-8 font-kufam font-bold text-[56px] text-dark">
        Website Designer & Developer
      </h1>
      <h2 className="mb-16 text-dark opacity-75 font-normal text-5xl leading-[72px]">
        Helping startups and solo founders launch beautiful websites and web
        apps
      </h2>
      <div className="flex gap-8">
        <a
          href="#contact"
          className="text-white text-2xl font-bold w-72 bg-dark text-center py-4 rounded-[18px] leading-[100%]"
        >
          Get in Touch
        </a>
        <a
          href="#contact"
          className="text-dark text-2xl font-bold w-72 bg-dark-10 text-center py-4 rounded-[18px] leading-[100%]"
        >
          Portfolio
        </a>
      </div>
    </div>
  );
}
