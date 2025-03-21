import Section, { Block } from "./Section";
import styles from "../styles/Characters.module.scss";
import { BlockTitle, CharText, QuoteText } from "./Text";
import characters from "../utils/characters";
import { file } from "../utils/var";

const charImages = [
  file("karakterek/karmosi.png"),
  file("karakterek/wilhelmina.png"),
  file("karakterek/kukacek.png"),
  file("karakterek/lapidus.png"),
  file("karakterek/monopator.png"),
  file("karakterek/pacal.png"),
  file("karakterek/kaoszszofi.png"),
  file("karakterek/ubi.png"),
  file("karakterek/paszomany.png"),
  file("karakterek/tuk.png"),
  file("karakterek/etcsotejcso.png"),
  file("karakterek/hotdog.png"),
  file("karakterek/brigecpurcel.png"),
  file("karakterek/csiba.png"),
];

export default function Characters() {
  const arr = Array.from({ length: 14 }, (_, i) => i + 1);
  return (
    <Section id="szereplok" title="SZEREPLŐK" className={styles.characters}>
      {arr.map((i) => (
        <Character key={i} i={i} />
      ))}
    </Section>
  );
}

function Character({ i }) {
  const isOdd = i % 2 === 1;
  const char = characters[i - 1];
  const image = (
    <Block
      key={i}
      className={isOdd ? styles["image-left"] : styles["image-right"]}
    >
      <img src={charImages[i - 1]} alt="Karmosi úr" />
    </Block>
  );

  const content = (
    <Block
      className={isOdd ? styles["content-right"] : styles["content-left"]}
      key={char.nev}
    >
      <BlockTitle
        className={
          char.nev === "Kukac, Vattacukor, Zserbó" ? styles.kukac : undefined
        }
      >
        {char.nev}
      </BlockTitle>
      <QuoteText>{char.idezet}</QuoteText>
      <CharText>{char.bemutato}</CharText>
      <CharText>
        {char.hol.eleje}
        <span className={styles["mese"]}> {char.hol.mese} </span>
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
}
