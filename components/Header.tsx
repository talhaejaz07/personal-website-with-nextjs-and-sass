import Link from "next/link";

import styles from "../styles/componentStyles/Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h2>
          <span>T</span>alha <span>E</span>jaz
        </h2>
      </Link>
    </header>
  );
};
