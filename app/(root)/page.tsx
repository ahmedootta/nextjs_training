import Image from "next/image";
import Hello from "../components/hello";

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const albums = await response.json();
  console.log("Who am I? --SERVER/CLIENT--"); // come from server side
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-br from-dark-100 to-blue-100 p-8 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-navy-900 mb-8 drop-shadow-lg">
          Albums
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {albums.map((album: { id: number; title: string }) => (
            <div
              key={album.id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl border-t-4 border-blue-400 hover:border-blue-600 duration-200"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-4 text-blue-600 text-xl font-bold shadow">
                {album.id}
              </div>
              <p className="text-lg font-semibold text-gray-800 text-center mb-2">
                {album.title}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-gray-600 text-lg flex items-center">
          Powered by
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            className="inline-block ml-2"
          />
        </div>
      </div>
    </>
  );
}
