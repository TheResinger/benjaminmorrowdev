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
        <div className="topSection p-4 pb-0">
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
                  </div>
                  <div>
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
    </div>
  );
}
