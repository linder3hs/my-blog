import { NextPage } from "next";
import { Tiptap } from "../../../components";

const AdminBlog: NextPage = () => {
  return (
    <div className="p-6 m-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
      <h1 className="text-2xl text-center">Crear Blog</h1>
      <form className="mt-10">
        <div className="flex ">
          <div className="mb-6">
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3"
              placeholder="john.doe@company.com"
            />
          </div>
        </div>
        <div className="mt-3">
          <h4>adasd</h4>
          <Tiptap />
        </div>
      </form>
    </div>
  );
};

export default AdminBlog;
