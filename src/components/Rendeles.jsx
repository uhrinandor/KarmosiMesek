import styles from "../styles/Rendeles.module.scss";
import Section, { Block } from "./Section";
import { BlockTitle, BreakText } from "./Text";
import { Button } from "./Button";
import { file } from "../utils/var";

const RENDELES_LINK = "http://karmosimesek.hu";

export default function Rendeles() {
  const toRendeles = () => {
    window.location.href = RENDELES_LINK;
  };

  return (
    <Section
      className={styles.rendeles}
      id="rendeles"
      title="RENDELÉS"
      variant="1"
    >
      <Block className={styles.image}>
        <img src={file("rendeles.png")} alt="Rendelés" />
      </Block>
      <Block className={styles.content}>
        <BlockTitle>Készen állsz a kalandra?</BlockTitle>
        <BreakText>
          A Karmosi Mesék könyv teljes pompájában, most elérhetővé vált mindenki
          számára, weboldalunkon megvásárolhatod kedvezményes áron, különböző
          csomagokban!
        </BreakText>
        <Button onClick={toRendeles} className={styles.button}>
          RENDELÉS
        </Button>
      </Block>
    </Section>
  );
}
