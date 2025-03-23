import Section, { Block } from "./Section";
import styles from "../styles/Quest.module.scss";
import { useEffect, useMemo, useReducer, useRef } from "react";
import { file } from "../utils/var";
import { BlockTitle, BreakText } from "./Text";
import { Button } from "./Button";
import { questMusic } from "../utils/music";
import { ReactComponent as Mancs } from "../assets/components/Mancs.svg";

const initState = {
  showLyrics: false,
  currentSong: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_LYRICS":
      return {
        ...state,
        showLyrics: true,
      };
    case "HIDE_LYRICS":
      return {
        ...state,
        showLyrics: false,
      };
    case "CHANGE_SONG":
      return {
        ...state,
        currentSong: action.payload,
      };
    default:
      return state;
  }
};

export default function Quest({ data }) {
  const [state, dispatch] = useReducer(reducer, initState);
  const { showLyrics, currentSong } = state;
  const song = useMemo(() => questMusic[currentSong], [currentSong]);
  const lyricsBlockRef = useRef(null);
  const level = data.bemutato.level;

  useEffect(() => {
    if (lyricsBlockRef.current) lyricsBlockRef.current.scrollTop = 0;
  }, [currentSong]);

  return (
    <Section
      title={data.cim}
      variant="2"
      id="kaland"
      className={styles.quest}
      style={{
        gridTemplateColumns: showLyrics ? "1fr 2fr" : "2fr 3fr",
      }}
    >
      {showLyrics ? (
        <>
          <Block className={styles["music-list"]}>
            <BlockTitle className={styles["lyrics-title"]}>
              {data.dalszovegek.blokkcim}
            </BlockTitle>
            <div className={styles["song-list-content"]}>
              {questMusic.map((s, i) => (
                <div
                  onClick={() => dispatch({ type: "CHANGE_SONG", payload: i })}
                  key={i}
                  className={styles["playlist-item"]}
                >
                  <p
                    className={
                      currentSong === i ? styles["selected"] : undefined
                    }
                  >
                    {s.nev}
                  </p>
                </div>
              ))}
            </div>
          </Block>
          <Block className={styles.lyrics}>
            <BlockTitle className={styles["lyrics-title"]}>
              {song.nev}
            </BlockTitle>
            <div ref={lyricsBlockRef} className={styles["lyrics-content"]}>
              {song.lyrics.map((column, i) => (
                <div key={i} className={styles["lyrics-column"]}>
                  {column.map((line, j) => (
                    <BreakText key={j} className={styles["lyrics-block"]}>
                      {line}
                    </BreakText>
                  ))}
                </div>
              ))}
            </div>
          </Block>
        </>
      ) : (
        <>
          <Block className={styles.content}>
            <BlockTitle>{data.bemutato.blokkcim}</BlockTitle>
            {data.bemutato.szovegek.map((szoveg, i) => (
              <BreakText key={i}>{szoveg}</BreakText>
            ))}
            <Button
              onClick={() => dispatch({ type: "SHOW_LYRICS" })}
              className={styles.button}
            >
              {data.bemutato.gombCim}
            </Button>
          </Block>
          <Block className={styles.image}>
            <div className={styles.letter}>
              <img src={file("level.png")} alt="Káosz Kutyák levél" />
              <div className={styles["letter-content"]}>
                <p className={styles.title}>Kedves Rajongóink!</p>
                <span>{level.szoveg1}</span>
                <span className={styles.kiemel}>
                  {level.szoveg2.blokk1}
                  <p>{level.szoveg2.kiemel1}</p>
                  {level.szoveg2.blokk2}
                  <p>{level.szoveg2.kiemel2}</p>
                  {level.szoveg2.blokk3}
                  <p>{level.szoveg2.kiemel3}</p>
                  {level.szoveg2.blokk4}
                </span>
                <span className={styles.ui}>{level.zaro}</span>
                <span className={styles.banda}>
                  {level.alairas["1"]}
                  <br />
                  {level.alairas["2"].elso}
                  <p>{level.alairas["2"].kiemel}</p>
                </span>
                <Mancs className={styles.mancs} id={styles["mancs1"]} />
                <Mancs className={styles.mancs} id={styles["mancs2"]} />
                <Mancs className={styles.mancs} id={styles["mancs3"]} />
              </div>
            </div>
          </Block>
        </>
      )}
    </Section>
  );
}
