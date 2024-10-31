import Image from "next/image";

export default function Home() {
  return (
    // https://tailwindcss.com/docs/container & https://tw-elements.com/learn/te-foundations/tailwind-css/containers/
    <div className="container mx-auto grid min-h-80 grid-cols-3 gap-4 bg-slate-700">
      <div className="col-start-2 flex items-center justify-center">
        Hello terminal
      </div>
    </div>
  );
}
