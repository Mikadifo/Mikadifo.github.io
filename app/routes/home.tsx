import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mikadifo" },
    {
      name: "description",
      content: "I help startups and solo founders create landing pages",
    },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>MIKADIFO</h1>
      <h1>Mikadifo</h1>
    </div>
  );
}
