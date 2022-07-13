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
    <div className="mainContent flex ease-in-out duration-500">
      <div className="curtain ease-in-out duration-500s">
        <div className="topSection px-7 pt-7 pb-0">
          <div
            className="background"
            style={{ backgroundImage: `url(/bg.jpg)` }}
          >
            <div className="topBanner">
              <div className="bannerTitle">
                <h1 className="text-4xl">
                  Discover My <br /> Talents
                </h1>
                <div className="scrollingText text-lg">
                  &lt;<i>code</i>&gt; I build <span ref={componentRef}></span>{" "}
                  &lt;/<i>code</i>&gt;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
