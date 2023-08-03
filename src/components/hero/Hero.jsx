import styles from './hero.module.scss'
import hero from '../../assets/hero.jpeg'



const Hero = () => {
  // VARIABLES ----------------
  // CONDITIONS ---------------
 
  // FUNCTIONS ----------------
  // RETURN -------------------
  return (
    <div className={styles.hero}>
      <div className={styles.hero__image}>
       <img src='../../assets/hero.jpeg' alt="Hero Image" />
       </div>
       <div className={styles.textContainer}>
        <h1>Lorem ipsum dolor sit amet.</h1>
      </div>
    </div>
  );
}

export default Hero;