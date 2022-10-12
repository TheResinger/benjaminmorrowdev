/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import Sidebar from "../components/sidebar";
import MainPageContent from "../components/mainSection";
import { useState } from "react";
import { IconDotsVertical } from "@tabler/icons";

const Home: NextPage = () => {
  const [navActive, setNavActive] = useState<boolean>(false);
  
  const toggleNav = () => {
    setNavActive(current => !current);
    console.log(navActive);
  }

  return (
    <div>
      <div className="container mobileBar h-16 lg:h-0 flex lg:hidden lg:w-0 mx-auto">
        <div className="mobileBarContent p-5">
          <div className="">
            <IconDotsVertical onClick={toggleNav}/>
          </div>
        </div>
      </div>
      <div className={`container mx-auto flex no-scroll-bar p-0 md:pt-4 heightNoMobileBar sm:heightCalc md:heightCalc lg:heightCalc`} >
        <Sidebar status={navActive}/>
        <MainPageContent status={navActive}/>
      </div>
    </div>
  );
};

export default Home;
