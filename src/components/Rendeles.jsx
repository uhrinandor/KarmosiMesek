import styles from "../styles/Rendeles.module.scss";
import Section, { Block } from "./Section";
import { BlockTitle, BreakText } from "./Text";
import { Button } from "./Button";
import { file, sectionLinks } from "../utils/var";

export default function Rendeles({ data }) {
  const toRendeles = () => {
    window.location.href = data.rendelesLink;
  };

  return (
    <Section
      className={styles.rendeles}
      id={sectionLinks.RENDELES}
      title={data.cim}
      variant="1"
    >
      <Block className={styles.image}>
        <img src={file("rendeles.png")} alt="Rendelés" />
      </Block>
      <Block className={styles.content}>
        <BlockTitle>{data.blokkcim}</BlockTitle>
        {data.szovegek.map((szoveg, i) => (
          <BreakText key={i}>{szoveg}</BreakText>
        ))}
        <Button onClick={toRendeles} className={styles.button}>
          {data.gombCim}
        </Button>
      </Block>
    </Section>
  );
}
