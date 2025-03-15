import Section, { Block } from "./Section";
import styles from "../styles/Characters.module.scss";
import { BlockTitle, CharText, QuoteText } from "./Text";
import characters from "../utils/characters";

const charImages = [
  "http://karmosimesek.hu/assets/karakterek/karmosi.png",
  "http://karmosimesek.hu/assets/karakterek/wilhelmina.png",
  "http://karmosimesek.hu/assets/karakterek/kukacek.png",
  "http://karmosimesek.hu/assets/karakterek/lapidus.png",
  "http://karmosimesek.hu/assets/karakterek/monopator.png",
  "http://karmosimesek.hu/assets/karakterek/pacal.png",
  "http://karmosimesek.hu/assets/karakterek/kaoszszofi.png",
  "http://karmosimesek.hu/assets/karakterek/ubi.png",
  "http://karmosimesek.hu/assets/karakterek/paszomany.png",
  "http://karmosimesek.hu/assets/karakterek/tuk.png",
  "http://karmosimesek.hu/assets/karakterek/etcsotejcso.png",
  "http://karmosimesek.hu/assets/karakterek/hotdog.png",
  "http://karmosimesek.hu/assets/karakterek/brigecpurcel.png",
  "http://karmosimesek.hu/assets/karakterek/csiba.png",
];

export default function Characters() {
  const arr = Array.from({ length: 14 }, (_, i) => i + 1);
  return (
    <Section id="szereplok" title="SZEREPLŐK" className={styles.characters}>
      {arr.map((i) => {
        const isOdd = i % 2 === 1;
        const char = characters[i - 1];
        const image = (
          <Block
            className={isOdd ? styles["image-left"] : styles["image-right"]}
          >
            <img src={charImages[i - 1]} alt="Karmosi úr" />
          </Block>
        );

        const content = (
          <Block
            className={isOdd ? styles["content-right"] : styles["content-left"]}
          >
            <BlockTitle>{char.nev}</BlockTitle>
            <QuoteText>{char.idezet}</QuoteText>
            <CharText>{char.bemutato}</CharText>
            <CharText>
              {char.hol.eleje}
              <p className={styles["mese"]}> {char.hol.mese} </p>
              {char.hol.end}
            </CharText>
          </Block>
        );

        return (
          <>
            {isOdd ? image : content}
            {isOdd ? content : image}
          </>
        );
      })}
    </Section>
  );
}
