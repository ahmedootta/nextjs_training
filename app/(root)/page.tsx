import Image from "next/image";
import Hello from "../components/hello";

export default function Home() {

  console.log("Who am I? --SERVER/CLIENT--"); // come from server side
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold"> Welcome to Next.js!</h1>
      <Hello />
    </div>
  );
}
