import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ imgSrc, title, description, href }) {
  return (
    <Link href={href} passHref>
      <div className="w-80 shadow-md m-5 flex flex-col align-center rounded-md cursor-pointer">
        <Image
          src={imgSrc}
          alt={`Project: ${title}`}
          width={500}
          height={400}
          objectFit="cover"
          objectPosition="center"
          className="rounded-t-md"
        />
        <div className="px-3 py-2">
          <h3 className="capitalize font-black text-md my-1">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}
