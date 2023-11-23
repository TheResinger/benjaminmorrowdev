import Typed from "typed.js";
import { useRef, useEffect } from "react";
import GridItem from "./subcomponents/gridItem";
import Carousel from "./subcomponents/carousel";

export default function MainPageContent({ status }: { status: boolean }) {
  const componentRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

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
      backDelay: 1000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div
      className={`flex ${status ? "mainContent navActive w-0" : "mainContent"}`}
    >
      <div className="curtain scrollableAreaMain flex flex-col">
        <section id="topHeadSection">
          <div
            className="background"
            style={{ backgroundImage: `url(/bg.avif)` }}
          >
            <div className="topBanner text-center lg:text-left">
              <div className="bannerTitle flex flex-col ">
                <h1 className="text-4xl m-2">
                  Discover My <br /> Talents
                </h1>
                <div className="scrollingText text-sm pb-3 sm:text-md">
                  &lt;<i>code</i>&gt;
                  <br />
                  &#8194;&#8194;I build <span ref={componentRef}></span>
                  <br />
                  &lt;/<i>code</i>&gt;
                </div>
                <div>
                  <div className="mb-4 ">
                    <button
                      type="button"
                      className="exploreButton py-3 px-8 inline-flex justify-center items-center gap-2 border border-transparent font-semibol text-black hover:bg-yellow-600 transition-all text-sm font-semibold"
                      onClick={() => {
                        sectionRef.current?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
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
        <section id="statsGrid" className="py-4">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4 px-4">
            <GridItem number={3} plus={true} text="Years Experience" />
            <GridItem number={35} plus={false} text="Projects Completed" />
            <GridItem number={22} plus={false} text="Happy Customers" />
            <GridItem number={1} plus={false} text="Full-Stack Bootcamp" />
          </div>
        </section>
        <section id="aboutMe" className="py-2">
          <div className="grid grid-cols-3 md:grid-cols-4 px-4 pb-4">
            <div className="col-start-1 col-end-5">
              <h3 className="text-2xl text-center">About Me</h3>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 px-12">
            <div className="card border border-gray-200 rounded-lg shadow dark:border-gray-700 col-start-1 col-end-5">
              <div className="p-5 flex-grow">
                <div className="header">
                  <h4 className="text-3xl">Hello there! 👋 I'm Benjamin</h4>
                </div>
                <div>
                  <p>I'm a passionate and dedicated Full Stack Software Developer with a flair for crafting robust and user-friendly applications. I thrive in the dynamic world of web development, where creativity meets functionality.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="completedProjects" className="pb-4 pt-2" ref={sectionRef}>
          <div className="grid grid-cols-3 md:grid-cols-4 px-3 pb-4">
            <div className="col-start-1 col-end-5">
              <h5 className="text-2xl text-center">Completed Projects</h5>
            </div>
          </div>
          <Carousel />
        </section>
        
      </div>
    </div>
  );
}
