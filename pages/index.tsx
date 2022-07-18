import type { NextPage } from "next";
import Card from "../components/card";
import styles from "../styles/Home.module.css";
import { Data } from "./api/blog";

type Props = {
  posts: Data[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      {posts.map((post: Data, index: number) => (
        <Card
          key={index}
          name={post.name}
          date={post.read_time}
          description={post.description}
          image={post.image}
        />
      ))}
    </div>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch("https://linder3hs.github.io/blog-json/blog.json");
  const posts = await res.json();
  return { posts };
};

export default Home;
