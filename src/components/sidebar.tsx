import Image from "next/image";
import { Line } from "rc-progress";
import {
  IconCheck,
  IconDownload,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandTwitter,
} from "@tabler/icons";

export default function Sidebar() {
  return (
    <div className="">
      <aside className="w-72 ease-in-out duration-500s">
        {/* Header */}
        <div className="h-60 p-8 header">
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
            Front-end Developer
            <br />
            UI/UX Designer
          </div>
        </div>
        <div className="sidebarFrame">
          {/* Scroll Area */}
          <div className="scrollContent overflow-y-scroll">
            <div className="divide-solid divide-y">
              <div className="infoTable py-4">
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
              <div className="languageSkills pt-8 pb-3.5">
                <div className="languageItem">
                  <div className="languageHeading pb-1">
                    <h6 className="text-lg">Typescript</h6>
                    <span>90%</span>
                  </div>
                  <div className="languageBar">
                    <Line
                      percent={90}
                      strokeWidth={1.72}
                      strokeColor="#ffc108"
                      trailColor="#191923"
                      trailWidth={1.72}
                    />
                  </div>
                </div>
                <div className="languageItem">
                  <div className="languageHeading pb-1">
                    <h6 className="text-lg">Javascript</h6>
                    <span>95%</span>
                  </div>
                  <div className="languageBar">
                    <Line
                      percent={95}
                      strokeWidth={1.72}
                      strokeColor="#ffc108"
                      trailColor="#191923"
                      trailWidth={1.72}
                    />
                  </div>
                </div>
                <div className="languageItem">
                  <div className="languageHeading pb-1">
                    <h6 className="text-lg">React</h6>
                    <span>85%</span>
                  </div>
                  <div className="languageBar">
                    <Line
                      percent={85}
                      strokeWidth={1.72}
                      strokeColor="#ffc108"
                      trailColor="#191923"
                      trailWidth={1.72}
                    />
                  </div>
                </div>
                <div className="languageItem">
                  <div className="languageHeading pb-1">
                    <h6 className="text-lg">MySQL</h6>
                    <span>75%</span>
                  </div>
                  <div className="languageBar">
                    <Line
                      percent={75}
                      strokeWidth={1.72}
                      strokeColor="#ffc108"
                      trailColor="#191923"
                      trailWidth={1.72}
                    />
                  </div>
                </div>
              </div>
              <div className="librariesList pt-4 mb-4">
                <ul>
                  <li>
                    <IconCheck color="#ffc108" size={24} />
                    <span>Bootstrap, Materialize, Tailwind</span>
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
              <div className="cvDownload py-4 ">
                <a href="/cv.pdf" download className="flex">
                  <span className="pr-2 cvLink">Download CV</span>
                  <IconDownload color="#ffc108" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="socials px-9 py-auto h-14 flex justify-between items-center">
          <a href="https://www.linkedin.com/in/morrowbenjamin/">
            <IconBrandLinkedin size={30} />
          </a>
          <a href="https://github.com/TheResinger">
            <IconBrandGithub size={30} />
          </a>
          <a href="https://twitter.com/TheRezinger">
            <IconBrandTwitter size={30} />
          </a>
        </div>
      </aside>
    </div>
  );
}
