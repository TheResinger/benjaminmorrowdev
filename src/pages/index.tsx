/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next'
import Sidebar from '../components/sidebar'
import MainPageContent from '../components/mainSection'
import { useState } from 'react'
import { IconDotsVertical } from '@tabler/icons'
import Head from 'next/head'

const Home: NextPage = () => {
  const [navActive, setNavActive] = useState<boolean>(false)

  const toggleNav = () => {
    setNavActive(current => !current)
    console.log(navActive)
  }

  return (
    <div>
      <Head>
        <title>Benjamin Morrow Dev</title>
      </Head>
      <div className="container mx-auto">
        <div className="mobileBar flex lg:hidden lg:w-0 mx-auto">
          <div className="mobileBarContent p-5">
            <div className="">
              <IconDotsVertical onClick={toggleNav} />
            </div>
          </div>
        </div>
        <div className="mx-auto flex py-0 lg:py-4 heightCalc">
          <Sidebar status={navActive} />
          <MainPageContent status={navActive} />
        </div>
      </div>
    </div>
  )
}

export default Home
