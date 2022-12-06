import Link from "next/link";

import { links } from "../data/headerData";

import styles from "../styles/componentStyles/Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h2>
          <span>T</span>alha <span>E</span>jaz
        </h2>
      </Link>

      <ul>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.to}>
                <p>{link.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
