import type { NextPage } from "next";
import { useRouter } from "next/router";

const Post = () => {
  const { name } = useRouter().query;

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Post;
