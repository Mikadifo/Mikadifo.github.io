export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl font-kufam mb-4">
      {children}
    </h2>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-light text-2xl sm:text-[28px] md:text-[32px] leading-[36px] sm:leading-[42px] md:leading-[45px]">
      {children}
    </p>
  );
}
