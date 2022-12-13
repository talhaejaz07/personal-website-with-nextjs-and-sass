import styles from "../styles/componentStyles/Hero.module.scss";

import Image from "next/image";
import portrait from "../assets/Portrait.jpg";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div>
        <h3>Hello!</h3>
        <h1>
          I am <span>T</span>alha <span>E</span>jaz
        </h1>
        <p>
          An engineer who loves to create and has over a decade of experience.
        </p>
      </div>

      <Image
        src={portrait}
        alt="Portrait"
        sizes="(max-width: 550px) calc(100vw - 32px), min(calc(50vw - 16px), (600px - 16px))"
      />
    </section>
  );
};
