import Section, { Block } from "./Section";
import styles from "../styles/Characters.module.scss";
import { BlockTitle, CharText, QuoteText } from "./Text";
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

export function Characters({ karmosi }) {
  return (
    <Section id="szereplok" title="SZEREPLŐK" className={styles.characters}>
      <Character i={0} data={karmosi} />
    </Section>
  );
}

export function Character({ data, i }) {
  const isOdd = i % 2 === 1;
  const image = (
    <Block
      key={i}
      className={isOdd ? styles["image-left"] : styles["image-right"]}
    >
      <img src={charImages[i]} alt="Karmosi úr" />
    </Block>
  );

  const content = (
    <Block
      className={isOdd ? styles["content-right"] : styles["content-left"]}
      key={data.nev}
    >
      <BlockTitle
        className={
          data.nev === "Kukac, Vattacukor, Zserbó" ? styles.kukac : undefined
        }
      >
        {data.nev}
      </BlockTitle>
      <QuoteText>{data.idezet}</QuoteText>
      <CharText>{data.bemutato}</CharText>
      <CharText>
        {data.hol.eleje}
        <span className={styles["mese"]}> {data.hol.mese} </span>
        {data.hol.end}
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
