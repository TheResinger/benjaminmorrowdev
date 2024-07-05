import { useRef } from 'react'
import AboutMe from './sections/aboutme'
import StatsGrid from './sections/statsgrid'
import CompletedProjects from './sections/completedprojects'
import TopSection from './sections/topsection'
import React from 'react'

export default function MainPageContent({ status }: { status: boolean }) {
  const scrollToElementRef = useRef<any | null>(null)

  return (
    <div className={`flex ${status ? 'mainContent navActive w-0' : 'mainContent'}`}>
      <div className="curtain scrollableAreaMain flex flex-col">
        <TopSection scrollToElementRef={scrollToElementRef} />
        <StatsGrid />
        <AboutMe />
        {/* <CompletedProjects ref={scrollToElementRef} /> */}
      </div>
    </div>
  )
}
