import type { NextPage } from "next";
import Image from "next/image";
import { Data } from "./api/blog";
import linder from "../assets/linder.png";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-evenly h-screen">
      <div className="columns-2">
        <div>
          <h1 className="text-5xl font-bold">Hi I am Linder Hassinger</h1>
          <h1 className="text-5xl font-bold mt-3"> a Software Developer</h1>
          <h4 className="mt-4">
            <span>
              Front End
              <span className="text-red-500 text-2xl">
                &nbsp;&nbsp;*&nbsp;&nbsp;
              </span>
            </span>
            <span>
              Back End{" "}
              <span className="text-red-500 text-2xl">
                &nbsp;&nbsp;*&nbsp;&nbsp;
              </span>
            </span>
            <span>Mobile</span>
          </h4>
        </div>
        <div className="grayscale flex justify-end">
          <Image
            src={linder}
            alt="Linder Hassinger"
            layout="intrinsic"
            width={300}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
