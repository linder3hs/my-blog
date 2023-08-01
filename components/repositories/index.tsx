import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import star from "../../assets/icons/star.svg";

interface Props {
  data: any;
}

const Repositories: NextPage<Props> = ({ data }) => {
  const router = useRouter();

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
              <h1
                className="text-xl font-bold cursor-pointer hover:text-red-500"
                onClick={() => {
                  router.push(repo.html_url);
                }}
              >
                {repo.name}
              </h1>
              <p className="text-gray-500 mt-3">{repo.description}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <Image
                    src={star}
                    width={20}
                    height={20}
                    alt=""
                    className="rounded-full"
                  />
                  <p className="text-gray-500 ml-2">
                    {repo.stargazers_count} - {repo.language}
                  </p>
                </div>
              </div>
              {repo.topics.length > 0 && <hr className="my-3" />}
              {repo.topics.map((topic: string) => (
                <span
                  key={topic}
                  className="bg-gray-200 text-gray-500 text-sm rounded-full px-2 py-1 mr-4"
                >
                  {topic}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repositories;
