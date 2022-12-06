import styles from "../styles/componentStyles/Hero.module.scss";

import Image from "next/image";
import portrait from "../assets/Portrait.jpg";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div>
        <h3>Hello!</h3>
        <h1>I am Talha Ejaz</h1>
        <p>
          An engineer who loves to create and has over a decade of experience.
        </p>
      </div>

      <Image src={portrait} alt="Portrait" objectFit="contain" />
    </section>
  );
};
