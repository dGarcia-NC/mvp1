import hero from "../images/hero2.jpeg";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div>
      <img className={styles.imageContainer} src={hero} alt="bitcoin hero" />
    </div>
  );
};

export default Hero;
