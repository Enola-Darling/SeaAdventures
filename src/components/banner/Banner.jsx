import styles from "./banner.module.scss";

const Banner = () => {
  // VARIABLES ----------------
  // CONDITIONS ---------------
  // FUNCTIONS ----------------
  // RETURN -------------------
  return (
    <div className={styles.banner}>
      <div className={styles.img}></div>
      <div className={styles.textContainer}>
        <h1>+20 <spa> Destinazioni </spa></h1>
        <h1>+15 <spa> Imbarcazioni </spa></h1>
        <h1>+40 <spa> Itinerari </spa></h1>
      </div>
    </div>
  );
};

export default Banner;
