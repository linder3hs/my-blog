import styles from "../../styles/Layout.module.css";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <video className={styles.video} autoPlay loop>
        <source src="/cover.mp4" />
      </video>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
