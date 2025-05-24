import CreativeIllustration from "./../assets/imgs/creativeIllustration.svg?react";

export default function UnderConstruction() {
  return (
    <div className="flex justify-between items-center">
      <CreativeIllustration className="w-[490px]" />

      <div className="text-dark w-[334px]">
        <h2 className="font-kufam text-5xl font-bold">
          Case study in the works
        </h2>
        <h3 className="text-[40px] font-normal opacity-75">Swing by later!</h3>
      </div>
    </div>
  );
}
