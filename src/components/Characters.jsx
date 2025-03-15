import Section from "./Section";
import "../styles/Characters.scss";
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
    <Section id="szereplok" title="SZEREPLŐK" className="characters">
      {arr.map((i) => {
        if (i % 2 === 1) {
          return (
            <>
              <div className="image-left block">
                <img src={charImages[i - 1]} alt="Karmosi úr" />
              </div>
              <div className="char-content-right block">
                <BlockTitle>{characters[i - 1].nev}</BlockTitle>
                <QuoteText>{characters[i - 1].idezet}</QuoteText>
                <CharText>{characters[i - 1].bemutato}</CharText>
                <CharText>
                  {characters[i - 1].hol.eleje}
                  <p className="hol-mese"> {characters[i - 1].hol.mese} </p>
                  {characters[i - 1].hol.end}
                </CharText>
              </div>
            </>
          );
        }

        return (
          <>
            <div className="char-content-left block">
              <BlockTitle>{characters[i - 1].nev}</BlockTitle>
              <QuoteText>{characters[i - 1].idezet}</QuoteText>
              <CharText>{characters[i - 1].bemutato}</CharText>
              <CharText>
                {characters[i - 1].hol.eleje}
                <p className="hol-mese"> {characters[i - 1].hol.mese} </p>
                {characters[i - 1].hol.end}
              </CharText>
            </div>
            <div className="image-right block">
              <img src={charImages[i - 1]} alt="Karmosi úr" />
            </div>
          </>
        );
      })}
    </Section>
  );
}
