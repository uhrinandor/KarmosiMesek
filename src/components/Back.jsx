import styles from "../styles/Back.module.scss";
import { Button } from "./Button";

export default function Back({ data }) {
  const toTop = () => window.scrollTo(0, 0);
  return (
    <div className={styles.back}>
      <Button onClick={toTop} className={styles.backbutton}>
        {data.gombCim}
      </Button>
    </div>
  );
}
