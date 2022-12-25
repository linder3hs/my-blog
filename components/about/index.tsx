import { type NextPage } from "next";
import Image from "next/image";
import Button from "../button";

type Props = {
  data: any;
};

const About: NextPage<Props> = ({ data }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="p-4">
          <Image
            src={data.avatar_url}
            width={200}
            height={200}
            alt={data.login}
            className="rounded-full"
          />
        </div>

        <div className="p-4">
          <h1 className="text-2xl mb-4 center font-bold">{data.name}</h1>
          <h1 className="text-1xl mb-3 center">{data.bio}</h1>
          <h1 className="text-1xl mb-3 center">{data.login}</h1>
          <h1 className="text-1xl mb-3 center">{data.company}</h1>
          <h1 className="text-1xl mb-3 center">{data.location}</h1>
        </div>
      </div>
      <div className="flex mt-10 justify-center w-full">
        <div className="text-center">
          <Button
            title="Blog"
            type="secondary"
            url="https://medium.com/@linderhassinger"
          />
          <Button
            title="Learn"
            type="primary"
            url="https://www.youtube.com/channel/UCPAg4A1jRtkY3lPdGKGS2Vg"
          />
          <Button title="Bookmarks" type="secondary" url="/" />
          <Button
            title="Projects"
            type="primary"
            url="https://github.com/linder3hs?tab=repositories"
          />
        </div>
      </div>
    </>
  );
};

export default About;
