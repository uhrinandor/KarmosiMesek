import { ReactComponent as ButtonSvg } from "../assets/components/Button.svg";
import styles from "../styles/Button.module.scss";

export function Button({ children, onClick, className }) {
  return (
    <div onClick={onClick} className={`${styles.button} ${className}`}>
      <ButtonSvg className={styles.svg} />
      <p>{children}</p>
    </div>
  );
}
