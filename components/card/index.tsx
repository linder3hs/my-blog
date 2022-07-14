import Image from "next/image";
import styles from "../../styles/Home.module.css";
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
      <p className={styles.textGray}>{date}</p>
      <Link href={`/post/${name}`} className={styles.card}>
        <a>
          <h2>{name}</h2>
        </a>
      </Link>
      <div className={styles.cardContent}>
        <div>
          <p className={styles.description}>{description}</p>
        </div>
        <div>
          <Image src={image} alt={name} width={224} height={224} />
        </div>
      </div>
      <div className={styles.tag}>
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
