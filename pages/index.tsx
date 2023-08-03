import type { NextPage } from "next";
import { Repositories, About } from "../components";

interface Props {
  data: any;
}

const Home: NextPage<Props> = ({ data }) => {
  const { user, repos } = data;
  return (
    <div className="lg:mt-20">
      <About data={user} />
      <Repositories data={repos} />
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const [user, repos] = await Promise.all([
    fetch("https://api.github.com/users/linder3hs"),
    fetch(
      "https://api.github.com/users/linder3hs/repos?sort=pushed&per_page=21"
    ),
  ]);

  const [userData, reposData] = await Promise.all([user.json(), repos.json()]);

  return {
    props: {
      data: {
        user: userData,
        repos: reposData,
      },
    },
  };
}
