import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  imgSrc,
  title,
  description,
  href,
  children,
}) {
  return (
    <Link href={href} passHref>
      <div className="w-80 shadow-lg sm:shadow-md m-5 flex flex-col align-center rounded-md cursor-pointer justify-between hover:-translate-y-1 transition duration-200">
        <Image
          src={imgSrc}
          alt={`Project: ${title}`}
          width={500}
          height={350}
          objectFit="cover"
          objectPosition="center"
          className="rounded-t-md"
        />
        <div className="px-3 py-2 flex-1 dark:bg-gray-700">
          <h3 className="capitalize font-black text-md my-1">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex justify-end p-1 items-center rounded-b-md bg-gray-100 dark:bg-gray-800">
          {children}
        </div>
      </div>
    </Link>
  );
}
