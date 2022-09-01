import type { NextPage } from "next";
import Image from "next/image";
import { Banner } from "../components";
import linder from "../assets/linder.png";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <h1 className="text-6xl center">Working it</h1>
    </div>
  );
};

export default Home;
