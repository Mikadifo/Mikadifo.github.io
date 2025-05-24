import AnimatedCreativeIllustration from "./../components/AnimatedCreativeIllustration";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-12 lg:gap-16">
      <AnimatedCreativeIllustration className="w-2/3 sm:w-1/2 lg:w-2/3 h-auto" />

      <div className="text-dark w-full sm:w-1/2 lg:w-1/3 text-center sm:text-left">
        <h2 className="font-kufam text-3xl sm:text-4xl lg:text-5xl font-bold sm:mb-3 md:mb-4 lg:mb-5">
          Case study in the works
        </h2>
        <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-normal opacity-75">
          Swing by later!
        </h3>
      </div>
    </div>
  );
}
