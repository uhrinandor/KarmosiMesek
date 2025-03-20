import styles from "../styles/Section.module.scss";
import { ReactComponent as FoltUno } from "../assets/sections/FoltUno.svg";
import { ReactComponent as FoltDos } from "../assets/sections/FoltDos.svg";

export default function Section({
  children,
  title,
  variant,
  id,
  className,
  style,
}) {
  return (
    <section style={style} className={`${styles.sec} ${className}`}>
      <Title variant={variant} id={id}>
        {title}
      </Title>
      {children}
    </section>
  );
}

export function Block({ children, className }) {
  return <div className={`${styles.block} ${className}`}>{children}</div>;
}

function Title({ children, variant, id }) {
  return (
    <div id={id} className={`${variant} ${styles.title}`}>
      {variant === "1" ? (
        <FoltUno className={styles.folt} />
      ) : (
        <FoltDos className={styles.folt} />
      )}
      <p>{children}</p>
    </div>
  );
}
