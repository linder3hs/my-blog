import { ReactNode } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../styles/Layout.module.css";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <div>
        <nav className={styles.nav}>
          <div>
            <ul>
              <li>
                <Link href="/learn"> Learn</Link>
              </li>
              <li>
                <Link href="/Blog">Blog</Link>
              </li>
              <li>
                <Link href="/Bookmarks">Bookmarks</Link>
              </li>
              <li>
                <Link href="/Projects">Projects</Link>
              </li>
              <li>
                <Link href="/Hassinger">Linder Hassinger</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link href="https://twitter.com/linder3hs">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/linder3hs/">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/linder3hs">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
