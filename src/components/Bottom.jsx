import styles from "../styles/Bottom.module.scss";
import { ReactComponent as Face } from "../assets/bottom/FacebookIcon.svg";
import { ReactComponent as Insta } from "../assets/bottom/InstaIcon.svg";
import { ReactComponent as Tiktok } from "../assets/bottom/TikTokIcon.svg";
import { link, social } from "../utils/var";

export default function Bottom() {
  return (
    <div className={styles.bottom}>
      <p>Karmosi Mesék</p>
      <Face
        id={styles.face}
        className={styles.icon}
        onClick={() => link(social.FACEBOOK)}
      />
      <Insta
        id={styles.insta}
        className={styles.icon}
        onClick={() => link(social.INSTA)}
      />
      <Tiktok
        id={styles.tiktok}
        className={styles.icon}
        onClick={() => link(social.TIKTOK)}
      />
    </div>
  );
}
