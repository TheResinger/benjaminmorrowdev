import { IconBrandGithub, IconWorld } from '@tabler/icons'
import Image from 'next/image'

interface ComponentTypes {
  imagePath: string
  imageClickPath: string
  projectName: string
  projectDescription: string
  githubLink: string
  deployedLink: string
  deployed: boolean
  codebase: boolean
}

const ProjectItem = ({ imagePath, imageClickPath, projectName, projectDescription, githubLink, deployedLink, deployed, codebase }: ComponentTypes) => {
  return (
    <div className="card border flex flex-col border-gray-200 rounded-lg shadow dark:border-gray-700">
      <div className="relative" style={{ width: '100%', height: '0', paddingBottom: '100%' }}>
        <a href={deployed ? imageClickPath : undefined} target="_blank" rel="noreferrer noopener">
          <Image className="rounded-t-lg" src={imagePath} alt="Picture of Project" layout="fill" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </a>
      </div>
      <div className="p-5 flex-grow">
        <a href={deployed ? imageClickPath : undefined} target="_blank" rel="noreferrer noopener">
          <h1 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{projectName}</h1>
        </a>
        <p className="font-normal text-gray-700 dark:text-gray-400">{projectDescription}</p>
      </div>
      <div className="bottom-0 grid grid-cols-4 place-items-center pb-3 px-3">
        <a href={codebase ? githubLink : undefined} target="_blank" rel="noreferrer noopener" className="col-start-1">
          <IconBrandGithub size={30} color={codebase ? 'white' : 'grey'} />
        </a>
        <a href={deployed ? deployedLink : undefined} target="_blank" rel="noreferrer noopener" className="col-start-4">
          <IconWorld size={30} color={deployed ? 'white' : 'grey'} />
        </a>
      </div>
    </div>
  )
}

ProjectItem.displayName = 'ProjectItem'

export default ProjectItem
