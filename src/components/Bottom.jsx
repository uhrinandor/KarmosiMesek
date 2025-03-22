import styles from "../styles/Bottom.module.scss";
import { ReactComponent as Face } from "../assets/bottom/FacebookIcon.svg";
import { ReactComponent as Insta } from "../assets/bottom/InstaIcon.svg";
import { ReactComponent as Tiktok } from "../assets/bottom/TikTokIcon.svg";
import { link } from "../utils/var";

export default function Bottom({ data }) {
  return (
    <div className={styles.bottom}>
      <p>Karmosi Mesék</p>
      <Face
        id={styles.face}
        className={styles.icon}
        onClick={() => link(data.facebook.link)}
      />
      <Insta
        id={styles.insta}
        className={styles.icon}
        onClick={() => link(data.instagram.link)}
      />
      <Tiktok
        id={styles.tiktok}
        className={styles.icon}
        onClick={() => link(data.tiktok.link)}
      />
    </div>
  );
}
