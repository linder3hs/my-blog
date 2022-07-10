import Image from "next/image";
import delab from "../../assets/delab.png";
import styles from "../../styles/Layout.module.css";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <div className={styles.img}></div>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
