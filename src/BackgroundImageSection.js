import styles from './BackgroundImageSection.module.css';
import BackgroundImage1 from './img/hero-1.png';
import BackgroundImage2 from './img/hero-2.png';
import BackgroundImage3 from './img/hero-3.png';
import BackgroundImage4 from './img/hero-4.png';

// import styles from './Test.module.css';

export default function BackgroundImageSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row1}>
        <img className={styles.image1} alt="3D form" src={BackgroundImage1} />
        <img className={styles.image2} alt="3D form" src={BackgroundImage2} />
      </div>
      <div className={styles.row2}>
        <img className={styles.image3} alt="3D form" src={BackgroundImage3} />
        <img className={styles.image4} alt="3D form" src={BackgroundImage4} />
      </div>
    </div>
  );
}
