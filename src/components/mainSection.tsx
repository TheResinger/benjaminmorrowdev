import Typed from "typed.js";
import { useRef, useEffect } from "react";

export default function MainPageContent() {
  const componentRef = useRef<HTMLSpanElement>(null);

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
    <div className="mainContent flex ease-in-out duration-500 md:heightCalc h-screen">
      <div className="curtain ease-in-out duration-500s">
        <div className="overflow-hidden relative px-7">
          <div className="topSection pt-7 pb-0">
            <div
              className="background"
              style={{ backgroundImage: `url(/bg.jpg)` }}
            >
              <div className="topBanner text-center lg:text-left">
                <div className="bannerTitle">
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
          </div>
        </div>
        <div className="overflow-hidden relative px-7">
          <div className="grid grid-cols-2 md:grid-cols-4 pt-7 m-n15">
            <div className="gridItem mb-7">
              <div className="counterFrame flex px-4">
                <div className="counterBox my-auto">
                  <span className="counterText font-semibold text-2xl">3</span>
                  <span className="counterPlus font-semibold text-2xl ml-1">
                    +
                  </span>
                </div>
                <h6 className="align-middle text-sm font-normal">
                  Years Experience
                </h6>
              </div>
            </div>
            <div className="gridItem mb-7">
              <div className="counterFrame flex px-4">
                <div className="counterBox my-auto">
                  <span className="counterText font-semibold text-2xl">35</span>
                  <span></span>
                </div>
                <h6 className="align-middle text-sm font-normal">
                  Projects Completed
                </h6>
              </div>
            </div>
            <div className="gridItem mb-7">
              <div className="counterFrame flex px-4">
                <div className="counterBox my-auto">
                  <span className="counterText font-semibold text-2xl">22</span>
                  <span></span>
                </div>
                <h6 className="align-middle text-sm font-normal">
                  Happy Customers
                </h6>
              </div>
            </div>
            <div className="gridItem mb-7">
              <div className="counterFrame flex px-4">
                <div className="counterBox my-auto">
                  <span className="counterText font-semibold text-2xl">1</span>
                  <span></span>
                </div>
                <h6 className="align-middle text-sm font-normal">
                  Full-Stack Bootcamp
                </h6>
              </div>
            </div>
          </div>

          {/* <div className="px-7 grid grid-cols-2 md:grid-cols-4 pt-7">
            <div className="mb-7">
              <div className="counterFrame flex">
                <div className="counterBox my-auto">
                  <span className="counterText font-semibold text-2xl">3</span>
                  <span></span>
                </div>
                <h6 className="align-middle text-sm font-normal">
                  Years Experience
                </h6>
              </div>
            </div>
            <div className="px-4 mb-7">
              <div className="counterFrame flex">
                <div className="counterBox my-auto pr-2">
                  <span className="counterText font-semibold text-2xl">35</span>
                  <span></span>
                </div>
                <h6 className="align-middle text-sm font-normal">
                  Projects Completed
                </h6>
              </div>
            </div>
            <div className="mb-7 px-4">
              <div className="counterFrame flex">
                <div className="counterBox my-auto pr-2">
                  <span className="counterText font-semibold text-2xl">20</span>
                  <span></span>
                </div>
                <h6 className="align-middle text-sm font-normal">
                  Happy Customers
                </h6>
              </div>
            </div>
            <div className="mb-7 px-4">
              <div className="counterFrame flex">
                <div className="counterBox my-auto pr-2">
                  <span className="counterText font-semibold text-2xl">20</span>
                  <span></span>
                </div>
                <h6 className="align-middle text-sm font-normal">
                  Happy Customers
                </h6>
              </div>
            </div>
          </div> */}
        </div>
        <div className="overflow-hidden relative px-7 mx-auto">
          <div className="m-n15">
            <section className="px-7">
              <div className="sectionTitle">
                <div className="titleFrame">
                  <h4>My Services</h4>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
