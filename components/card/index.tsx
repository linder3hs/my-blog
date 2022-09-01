import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  date: string;
  description: string;
  image: string;
}

const Card = ({ name, date, description, image }: Props) => {
  return (
    <div>
      <p>{date}</p>
      <Link href={`/post/${name}`}>
        <a>
          <h2>{name}</h2>
        </a>
      </Link>
      <div>
        <div>
          <p>{description}</p>
        </div>
        <div>
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            // layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
      <div>
        <span>NodeJS</span>
        <span>mvp</span>
        <span>Software</span>
        <b>2 min read</b>
      </div>
      <hr />
    </div>
  );
};

export default Card;
