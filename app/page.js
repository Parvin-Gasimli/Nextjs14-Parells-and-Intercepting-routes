import { getAllPhotos } from "@/lib/service";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data = await getAllPhotos();
  return (
    <div className="max-w-[1300px] m-auto mt-4">
      <div className="flex flex-wrap gap-2 justify-between items-stretch">
        {" "}
        {data &&
          data.slice(0, 10).map((photo) => (
            <div
              className="flex flex-col items-center gap-2 p-4 bg-gray-100 rounded-md shadow-md w-[400px]"
              key={photo.id}
            >
              <h1>{photo.title}</h1>
              <Image
                width={400}
                height={300}
                src={photo.thumbnailUrl}
                alt="photo"
                priority
              />
              <Link
                className="bg-blue-500 text-white p-2 rounded-md w-full text-center"
                href={`/photo/${photo.id}`}
              >
                View
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
