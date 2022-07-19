/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import Sidebar from "../components/sidebar";
import MainPageContent from "../components/mainSection";

const Home: NextPage = () => {
  return (
    <div>
      {/* <div className="container mobileBar h-16 lg:h-0 flex lg:hidden lg:w-0 mx-auto">
        <div className="mobileBarContent p-5">
          <div className="">
            <IconDotsVertical onClick={openInfoBar} />
          </div>
        </div>
      </div> */}
      <div className="container mx-auto flex no-scroll-bar p-0 md:p-4">
        <Sidebar />
        <MainPageContent />
      </div>
    </div>
  );
};

export default Home;
