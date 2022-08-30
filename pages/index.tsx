import type { NextPage } from "next";
import Image from "next/image";
import { Data } from "./api/blog";
import linder from "../assets/linder.png";

const Home: NextPage = () => {
  return (
    <div>
      <div className="columns-2 flex items-center justify-evenly h-screen">
        <div>
          <h1 className="text-5xl font-bold">Hi, I am Linder Hassinger</h1>
          <h1 className="text-5xl font-bold mt-3">a Software Developer</h1>
          <h4 className="mt-4 uppercase font-bold">
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
          <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-8 font-bold rounded mt-4">
            Let&apos;s talk
          </button>
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
      <div className="bg-gray-900">
        <div className="flex justify-evenly p-8 text-white">
          <h4>Software</h4>
          <h4 className="text-red-600 text-4xl">*</h4>
          <h4>Development</h4>
          <h4 className="text-red-600 text-4xl">*</h4>
          <h4>Experience</h4>
          <h4 className="text-red-600 text-4xl">*</h4>
          <h4>iOS</h4>
          <h4 className="text-red-600 text-4xl">*</h4>
          <h4>React</h4>
          <h4 className="text-red-600 text-4xl">*</h4>
          <h4>JavaScript</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
