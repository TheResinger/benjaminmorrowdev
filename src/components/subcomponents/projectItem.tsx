import { IconBrandGithub, IconWorld } from "@tabler/icons";
import Image from "next/image";

export default function ProjectItem({
  imagePath,
  imageClickPath,
  projectName,
  projectDescription,
  githubLink,
  deployedLink,
}: {
  imagePath: string;
  imageClickPath: string;
  projectName: string;
  projectDescription: string;
  githubLink: string;
  deployedLink: string;
}) {
  return (
    <div className="card border border-gray-200 rounded-lg shadow  dark:border-gray-700">
      <a href={imageClickPath}>
        <Image className="rounded-t-lg" src={imagePath} alt="" />
      </a>
      <div className="p-5">
        <a href={imageClickPath}>
          <h1 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
            {projectName}
          </h1>
        </a>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {projectDescription}
        </p>
      </div>
      <div className="grid grid-cols-4 place-items-center pb-3 px-3">
        <a href={githubLink} target="_blank" rel="noreferrer noopener" className="col-start-1">
          <IconBrandGithub size={30} />
        </a>
        <a href={deployedLink} target="_blank" rel="noreferrer noopener" className="col-start-4">
            <IconWorld size={30}/>
        </a>
      </div>
    </div>
  );
}
