import type { NextPage } from "next";
import Link from "next/link";

type Props = {
  title: string;
  type: string;
  url: string;
};

const Button: NextPage<Props> = ({ title, type, url }) => {
  const btnType: { [key: string]: string } = {
    primary: "bg-red-500 text-white py-2 px-6 rounded mr-2",
    secondary: "bg-slate-900 text-white py-2 px-6 rounded mr-2",
  };

  return (
    <button className={btnType[type]}>
      <Link href={url} target="_blank">{title}</Link>
    </button>
  );
};

export default Button;
