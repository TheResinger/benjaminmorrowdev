/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/sidebar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Benjamin Morrow Dev</title>
        <meta name="description" content="Benjamin Morrows Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Sidebar />
    </>
  );
};

export default Home;
