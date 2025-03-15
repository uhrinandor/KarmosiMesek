import Section, { Block } from "./Section";
import { BlockTitle, BreakText } from "./Text";
import styles from "../styles/Konyv.module.scss";
import { file } from "../utils/var";

export default function Konyv() {
  return (
    <Section id="akonyv" title="A KÖNYV" variant="1" className={styles.konyv}>
      <Block className={styles.content}>
        <BlockTitle>Mit találsz a könyvben?</BlockTitle>
        <BreakText>
          Izgalmas, humoros és tanulságos történeteket, amelyek a
          kíváncsiságról, bátorságról és barátságról szólnak. A történetek
          főhőse egy kíváncsi kis macsek, aki ebbe a könyvbe kaparta be
          élettörténetét, valamint saját meséit.
        </BreakText>
        <BreakText>
          Lenyűgöző színes illusztrációkat, amelyek részletgazdagságukkal
          elvarázsolnak, és elrepítenek fantázia csodálatos világába.
        </BreakText>
        <BreakText>
          Megismerheted a KáoszKutyák zenekar megalakulásának igaz történetét,
          valamint meghallgathatod a Gőzölgő Velőscsont című albumukat!
        </BreakText>
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
