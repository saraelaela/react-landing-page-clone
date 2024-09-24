import Star from './img/star.png';
import styles from './Infobox.module.css';

export default function InfoBox() {
  return (
    <div className={styles.infoBox}>
      <h2>Playfull & captivating</h2>
      <img alt="3D Artwork" src={Star} />
      <p>
        Add sense of playfulness into your projects that's perfect for capturing
        attention and creating memorable experiences.
      </p>
    </div>
  );
}
