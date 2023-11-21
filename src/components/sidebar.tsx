import Image from "next/image";
import {
  IconCheck,
  IconDownload,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandTwitter,
} from "@tabler/icons";

export default function Sidebar({ status }: { status: boolean }) {
  return (
    <aside
      className={` ${
        status ? "showBar navbarActive " : "w-0 lg:w-96"
      }`}
    >
      <section id="header">
        <div className="h-fit w-full p-8 header lg:h-fit">
          <div className="h-24 mb-4 flex justify-center">
            <a href="https://www.linkedin.com/in/morrowbenjamin/">
              <Image
                src="/face.png"
                alt="Picture of my face"
                className="rounded-full"
                width={96}
                height={96}
              />
            </a>
          </div>
          <h5 className="mb-2.5 text-center text-lg name">
            <a>Benjamin Morrow</a>
          </h5>
          <div className="small-text text-center text-sm">
            Full Stack Developer
            <br />
            UI/UX Designer
          </div>
        </div>
      </section>
      <section id="info" className="scrollableArea">
        <div className="divide-solid divide-y w-full">
          <div className="infoTable py-4 px-4">
            <ul>
              <li>
                <h6 className="text-base">State:</h6>
                <span className="text-base">Florida</span>
              </li>
              <li>
                <h6 className="text-base">City:</h6>
                <span className="text-base">Orlando</span>
              </li>
              <li>
                <h6 className="text-base">Age:</h6>
                <span className="text-base">24</span>
              </li>
            </ul>
          </div>
          <div className="languageSkills pt-2 px-4">
            <div className="pb-1 text-center">
              <span className="text-lg text-center">Languages</span>
            </div>
            <div className="pb-1 languageSplit">
              <span className="text-lg">Typescript</span>
              <span className="text-lg">Javascript</span>
            </div>
            <div className="pb-1 languageSplit">
              <span className="text-lg">Python</span>
              <span className="text-lg">React</span>
            </div>
            <div className="pb-1"></div>
          </div>
          <div className="librariesList pt-4 mb-4 px-4">
            <ul>
              <li>
                <IconCheck color="#ffc108" size={24} />
                <span>Bootstrap, Materialize, Tailwind CSS</span>
              </li>
              <li>
                <IconCheck color="#ffc108" size={24} />
                <span>SQL and NoSQL DB Knowledge</span>
              </li>
              <li>
                <IconCheck color="#ffc108" size={24} />
                <span>Responsive Design Paradigms</span>
              </li>
              <li>
                <IconCheck color="#ffc108" size={24} />
                <span>Git Knowledge</span>
              </li>
            </ul>
          </div>
          <div className="flex cvDownload py-4 justify-center">
            <a href="/cv.pdf" download className="flex">
              <span className="pr-2 cvLink">Download CV</span>
              <IconDownload color="#ffc108" size={20} />
            </a>
          </div>
        </div>
      </section>
      <section id="socials" className={`place-items-center justify-between ${status ? "" : "hidden lg:flex"}`}>
        <div>
          <a href="https://www.linkedin.com/in/morrowbenjamin/">
            <IconBrandLinkedin size={30} />
          </a>
        </div>
        <div>
          <a href="https://github.com/TheResinger">
            <IconBrandGithub size={30} />
          </a>
        </div>
        
      </section>
    </aside>
  );
}
