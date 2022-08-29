import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <div>
        <nav className="flex justify-between p-8">
          <div>
            <ul>
              <li>
                <Link href="/">
                  <h3 className="text-2xl">linder3hs</h3>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex justify-between">
              <li className="pr-5">
                <Link href="/learn"> Learn</Link>
              </li>
              <li className="pr-5">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="pr-5">
                <Link href="/bookmarks">Bookmarks</Link>
              </li>
              <li className="pr-5">
                <Link href="/projects">Projects</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>{children}</div>
    </div>
  );
}
