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
                <Link href="/bookmarks">
                  <span className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                    Bookmarks
                  </span>
                </Link>
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
