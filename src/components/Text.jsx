import styles from "../styles/Text.module.scss";

export function BlockTitle({ children, className }) {
  return <p className={`${styles["block-title"]} ${className}`}>{children}</p>;
}

export function BreakText({ children, className }) {
  return <p className={`${className} ${styles["break-text"]}`}>{children}</p>;
}

export function CharText({ children }) {
  return <p className={styles["char-text"]}>{children}</p>;
}

export function QuoteText({ children }) {
  return <p className={styles.quote}>"{children}"</p>;
}
