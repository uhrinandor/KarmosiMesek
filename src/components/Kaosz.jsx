import Section, { Block } from "./Section";
import styles from "../styles/Kaosz.module.scss";
import { BlockTitle, BreakText, CharText } from "./Text";
import { Button } from "./Button";
import { useState } from "react";
import { file } from "../utils/var";

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
          Hallgasd meg most <span>Gőzölgő Velőscsont</span> című albumukat!
        </CharText>
        <Button onClick={onClick} className={styles.play}>
          LEJÁTSZÁS
        </Button>
      </Block>
      <Block className={styles.image}>
        <img src={file("kaoszkutyak.png")} alt="Káosz kutyák" />
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
      <Block className={styles.player}>
        <img src={file("karakterek/kaoszszofi.png")} alt="" />
      </Block>
      <Block className=""></Block>
    </>
  );
}
