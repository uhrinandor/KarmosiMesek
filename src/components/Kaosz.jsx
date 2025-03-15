import Section, { Block } from "./Section";
import styles from "../styles/Kaosz.module.scss";
import { BlockTitle, BreakText, CharText } from "./Text";
import { Button } from "./Button";
import { useState } from "react";

export default function Kaosz() {
  const [toPlay, setPlay] = useState(false);
  const onClick = () => setPlay(true);

  return (
    <Section
      id="kaoszkutyak"
      title="KÁOSZ KUTYÁK"
      variant="1"
      className={styles.kaosz}
    >
      {toPlay ? <Player /> : <Root onClick={onClick} />}
    </Section>
  );
}

function Root({ onClick }) {
  return (
    <>
      <Block className={styles.content}>
        <BlockTitle>Végre itt vannak!</BlockTitle>
        <BreakText>Az utca rosszcsontjai új albummal debütáltak!</BreakText>
        <CharText>
          Hallgasd meg most <p>Gőzölgő Velőscsont</p> című albumukat!
        </CharText>
        <Button onClick={onClick} className={styles.play}>
          LEJÁTSZÁS
        </Button>
      </Block>
      <Block className={styles.image}>
        <img
          src="http://karmosimesek.hu/assets/kaoszkutyak.png"
          alt="Káosz kutyák"
        />
      </Block>
    </>
  );
}

function Player() {
  const [currentMusic, setMusic] = useState(0);
  const [duration, setDuration] = useState(0);

  const chooseMusic = (i) => () => setMusic(i);

  return (
    <>
      <div className="block player">
        <img
          src="http://karmosimesek.hu/assets/karakterek/kaoszszofi.png"
          alt=""
        />
      </div>
      <div className="block"></div>
    </>
  );
}
