import { NextPage } from "next";
import { Tiptap } from "../../../components";

const AdminBlog: NextPage = () => {
  return (
    <div className="m-6">
      <div className="bg-white rounded-lg border border-gray-200 shadow-md w-full p-4">
        <h1 className="text-3xl text-center">Crear Blog</h1>
        <div className="mt-20">
          <div className="flex">
            <div className="mb-6 mr-5 grow">
              <input
                type="text"
                className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg p-3"
                placeholder="Titulo"
              />
            </div>
            <div className="mb-6 mr-5 grow">
              <input
                type="text"
                className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg p-3"
                placeholder="Nombre de autor"
              />
            </div>
            <div className="mb-6 mr-5 grow">
              <input
                type="text"
                className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg p-3"
                placeholder="Link de la foto"
              />
            </div>
          </div>
          <div>
            <Tiptap />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminBlog;
