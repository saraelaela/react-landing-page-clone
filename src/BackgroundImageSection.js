import styles from './BackgroundImageSection.module.css';
import BackgroundImage1 from './img/hero-1.png';
import BackgroundImage3 from './img/hero-3.png';

export default function BackgroundImageSection() {
  return (
    <div className={styles.backgroundImage} style={{ BackgroundImageSection }}>
      <img alt="floating 3D Element" src={BackgroundImage1} />
      <img alt="floating 3D Element" src={BackgroundImage3} />
    </div>
  );
}
