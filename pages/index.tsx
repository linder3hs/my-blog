import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

type Props = {
  data: any;
};

const Home: NextPage<Props> = ({ data }) => {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        height: "80vh",
      }}
    >
      <Head>
        <title>Linder Hassinger</title>
      </Head>
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
  );
};

export default Home;

export async function getServerSideProps() {
  try {
    const response = await fetch("https://api.github.com/users/linder3hs");
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (e: any) {
    console.log(e.message);
  }
}
