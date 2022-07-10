import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <a href="/home" className={styles.link}>
        Ir al Blog
      </a>
    </div>
  );
};

export default Home;
