import { NextPage } from "next";
import Image from "next/image";

interface Props {
  data: any;
}

const Repositories: NextPage<Props> = ({ data }) => {
  return (
    <div className="p-12">
      <div className="mt-6">
        <h1 className="text-2xl">Public Repositories</h1>
      </div>
      <div className="mt-6 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-4">
          {data.map((repo: any) => (
            <div
              key={repo.id}
              className="bg-white rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <h1 className="text-xl font-bold">{repo.name}</h1>
              <p className="text-gray-500">{repo.description}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <p className="text-gray-500 ml-2">
                    <Image
                      src={`https://api.iconify.design/fa-brands/${repo.language?.toLowerCase()}.svg?width=32&height=32`}
                      width={32}
                      height={32}
                      alt=""
                      className="rounded-full"
                    />
                  </p>
                  <div className="flex items-center">
                    <p className="text-gray-500 ml-2">
                      {repo.stargazers_count}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repositories;
