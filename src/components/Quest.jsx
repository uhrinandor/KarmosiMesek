import Section, { Block } from "./Section";
import styles from "../styles/Quest.module.scss";
import { useMemo, useReducer } from "react";
import { file } from "../utils/var";
import { BlockTitle, BreakText } from "./Text";
import { Button } from "./Button";
import { questMusic } from "../utils/music";

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

export default function Quest() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { showLyrics, currentSong } = state;
  const song = useMemo(() => questMusic[currentSong], [currentSong]);

  return (
    <Section title="FELADAT" variant="2" id="feladat" className={styles.quest}>
      {showLyrics ? (
        <>
          <Block className={styles["music-list"]}>
            <BlockTitle className={styles["lyrics-title"]}>
              Gőzölgő Velőscsont
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
            <div className={styles["lyrics-content"]}>
              {song.lyrics.map((b, i) => (
                <BreakText className={styles["lyrics-block"]} key={i}>
                  {b}
                </BreakText>
              ))}
            </div>
          </Block>
        </>
      ) : (
        <>
          <Block className={styles.content}>
            <BlockTitle>Állj be a bandába!</BlockTitle>
            <BreakText>
              A KáoszKutyáknak a te segítségedre van szüksége! Szerezzetek új
              dalokat a családdal!
            </BreakText>
            <BreakText>Készen állsz?</BreakText>
            <Button
              onClick={() => dispatch({ type: "SHOW_LYRICS" })}
              className={styles.button}
            >
              DALSZÖVEGEK
            </Button>
          </Block>
          <Block className={styles.image}>
            <img src={file("kapcsolat.png")} alt="SideQuest" />
          </Block>
        </>
      )}
    </Section>
  );
}
