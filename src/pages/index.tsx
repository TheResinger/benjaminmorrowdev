/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import Sidebar from "../components/sidebar";
import MainPageContent from "../components/mainSection";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto flex no-scroll-bar">
      <Sidebar />
      <MainPageContent />
    </div>
  );
};

export default Home;
