import { NextPage } from "next";

const Banner: NextPage = () => {
  return (
    <div className="bg-gray-900 w-full">
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
  );
};

export default Banner;
