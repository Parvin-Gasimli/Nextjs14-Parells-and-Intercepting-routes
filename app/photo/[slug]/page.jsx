import { getPhoto } from "@/lib/service";
import Image from "next/image";

export default async function PhotoDetail({ params: { slug } }) {
  const data = await getPhoto(slug);
  return (
    <div className="max-w-[1200px] m-auto">
      <h1>Photo Detail</h1>
      <p>Title: {data.title}</p>
      <Image width={400} height={300} src={data.thumbnailUrl} alt="photo" />
    </div>
  );
}
