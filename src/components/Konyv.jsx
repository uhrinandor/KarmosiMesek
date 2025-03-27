import Section, { Block } from "./Section";
import { BlockTitle, BreakText } from "./Text";
import styles from "../styles/Konyv.module.scss";
import { file, sectionLinks } from "../utils/var";

export default function Konyv({ data }) {
  return (
    <Section
      id={sectionLinks.KONYV}
      title={data.cim}
      variant="1"
      className={styles.konyv}
    >
      <Block className={styles.content}>
        <BlockTitle>{data.blokkcim}</BlockTitle>
        {data.szovegek.map((szoveg, i) => (
          <BreakText key={i}>{szoveg}</BreakText>
        ))}
      </Block>
      <Block>
        <img
          src={file("konyv.png")}
          id={styles.konyvdesign}
          alt="Karmosi mesék könyv"
        />
      </Block>
    </Section>
  );
}
