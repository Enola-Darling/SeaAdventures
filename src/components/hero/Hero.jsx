import styles from "./hero.module.scss";

const Hero = () => {
  // VARIABLES ----------------
  // CONDITIONS ---------------
  // FUNCTIONS ----------------
  // RETURN -------------------
  return (
    <div className={styles.hero}>
      <div className={styles.img}></div>
      <div className={styles.textContainer}>
        <h1>Lorem ipsum dolor sit amet.</h1>
      </div>
    </div>
  );
};

export default Hero;
