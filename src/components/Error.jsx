import styles from "../styles/Error.module.scss";
import Section, { Block } from "./Section";
import { BlockTitle, BreakText } from "./Text";

export default function Error() {
  return (
    <div className={styles.error}>
      <Section title="HIBA" className={styles["error-sec"]}>
        <Block className={styles.cica}>
          <img src="/favicon.svg" alt="Hiba történt" />
        </Block>
        <Block className={styles.content}>
          <BlockTitle>Valami nincs rendben!</BlockTitle>
          <BreakText>
            Nézz vissza később, amíg mi elintézzük a problémát!
          </BreakText>
        </Block>
      </Section>
    </div>
  );
}
