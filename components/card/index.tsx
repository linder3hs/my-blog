import Image from "next/image";
import styles from "../../styles/Home.module.css";

interface Props {
  name: string;
  date: string;
  description: string;
  image: string;
}

const Card = ({ name, date, description, image }: Props) => {
  return (
    <div className={styles.card}>
      <p className={styles.textGray}>{date}</p>
      <h2>{name}</h2>
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