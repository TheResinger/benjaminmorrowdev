import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

interface ComponentTypes {
  scrollToElementRef?: any
}

const TopSection = ({ scrollToElementRef }: ComponentTypes): JSX.Element => {
  const componentRef = useRef<null | HTMLSpanElement>(null)

  useEffect(() => {
    const typed = new Typed(componentRef.current!, {
      strings: ['Modern Web Interfaces', 'Full Stack Applications', 'Mobile Applications', 'Serverless Applications', 'APIs'],
      startDelay: 400,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    })
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section id="topHeadSection">
      <div className="background" style={{ backgroundImage: 'url(/bg.avif)' }}>
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
              <div className="mb-4">
                <button
                  type="button"
                  className="exploreButton py-3 px-8 inline-flex justify-center items-center gap-2 border border-transparent font-semibol text-black hover:bg-yellow-600 transition-all text-sm font-semibold"
                  onClick={() => {
                    scrollToElementRef?.current?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    })
                  }}>
                  Explore Now
                </button>
                <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 border border-transparent font-semibold text-white hover:text-yellow-50 transition-all text-xs">
                  Hire Me &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

TopSection.displayName = 'TopSection'

export default TopSection
