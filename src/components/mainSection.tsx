import Typed from "typed.js";
import { useRef, useEffect, useState } from "react";
import GridItem from "./subcomponents/gridItem";
import ProjectItem from "./subcomponents/projectItem";

export default function MainPageContent({ status }: { status: boolean }) {
  const componentRef = useRef<HTMLSpanElement>(null);
  const data = ["1", "2", "3", "4"]
  const [currentIndex, setCurrentIndex] = useState(0)

  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) return setCurrentIndex(0)
    return setCurrentIndex(currentIndex + 1);
  }
  useEffect(() => {
    const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)
    return () => clearInterval(interval)
  })
  
  useEffect(() => {
    const typed = new Typed(componentRef.current!, {
      strings: [
        "Modern Web Interfaces",
        "Full Stack Applications",
        "Mobile Applications",
        "Serverless Applications",
        "APIs",
      ],
      startDelay: 400,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 800,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div
      className={`flex ${
        status ? "mainContent navActive w-0" : "mainContent"
      }`}
    >
      <div className="curtain flex flex-col">
        <section id="topHeadSection">
          <div
            className="background"
            style={{ backgroundImage: `url(/bg.jpg)` }}
          >
            <div className="topBanner text-center lg:text-left">
              <div className="bannerTitle flex flex-col">
                <h1 className="text-4xl mb-2">
                  Discover My <br /> Talents
                </h1>
                <div className="scrollingText text-md">
                  &lt;<i>code</i>&gt; I build <span ref={componentRef}></span>{" "}
                  &lt;/<i>code</i>&gt;
                </div>
                <div>
                  <div className="mb-4">
                    <button
                      type="button"
                      className="exploreButton py-3 px-8 inline-flex justify-center items-center gap-2 border border-transparent font-semibol text-black hover:bg-yellow-600 transition-all text-sm font-semibold"
                    >
                      Explore Now
                    </button>
                    <button
                      type="button"
                      className="py-3 px-4 inline-flex justify-center items-center gap-2 border border-transparent font-semibold text-white hover:text-yellow-50 transition-all text-xs"
                    >
                      Hire Me &gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="scrollableAreaMain divide-dashed divide-y">
          <section id="statsGrid">
            <div className="grid grid-cols-2 md:grid-cols-4 pt-7">
              <GridItem number={3} plus={true} text="Years Experience" />
              <GridItem number={35} plus={false} text="Projects Completed" />
              <GridItem number={22} plus={false} text="Happy Customers" />
              <GridItem number={1} plus={false} text="Full-Stack Bootcamp" />
            </div>
          </section>
          <section id="completedProjects">
            <div className="grid grid-cols-3 md:grid-cols-4 p-3">
              <div className="col-start-1 col-end-5">
                <h3 className="text-2xl text-center">Completed Projects</h3>
              </div>
            </div>
            <div className="carousel-container">
              { data.map((item, index) => {
                return <h1 className="carousel-item" style={{transform: `translate(-${currentIndex * 100}%)`}} key={index}>{item}</h1>})
              }
            </div>
            {/* <div className="grid gap-3 grid-cols-1 md:grid-cols-4 mx-3 mb-3">
             <ProjectItem imagePath={"./face.png"} imageClickPath={"https://github.com/TheResinger/cards"} projectName={"Cards"} projectDescription={"A website to play Cards Against Humanity online with friends."} githubLink={"https://github.com/TheResinger/cards"} deployedLink={""}/>

            </div> */}
          </section>
          <section>

          </section>
        </div>
      </div>
    </div>
  );
}
