import { type NextPage } from "next";
import Image from "next/image";
import Button from "../button";
import * as ICONS from "../../assets";

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
          <h1 className="text-1xl mb-3 flex items-center gap-2">
            <Image src={ICONS.laptop} alt="" width={20} height={20} />
            {data.bio}
          </h1>
          <h1 className="text-1xl mb-3 flex items-center gap-2 center">
            <Image src={ICONS.octocat} alt="" width={20} height={20} />
            {data.login}
          </h1>
          <h1 className="text-1xl mb-3 flex items-center gap-2 center">
            <Image src={ICONS.company} alt="" width={20} height={20} />
            {data.company}
          </h1>
          <h1 className="text-1xl mb-3 flex items-center gap-2 center">
            <Image src={ICONS.market} alt="" width={20} height={20} />
            {data.location}
          </h1>
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
