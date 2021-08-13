import Image from "next/image";

export default function ProjectCard({ imgSrc, title, description }) {
  return (
    <div className="h-72 w-80 shadow-md m-5 flex flex-col align-center">
      <Image src={imgSrc} alt={`Project: ${title}`} width={180} height={200} />
      <div className="p-3">
        <h3 className="capitalize font-bold text-lg my-3">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
