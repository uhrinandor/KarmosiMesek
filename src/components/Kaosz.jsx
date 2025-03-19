import Section, { Block } from "./Section";
import styles from "../styles/Kaosz.module.scss";
import { BlockTitle, BreakText, CharText } from "./Text";
import { Button } from "./Button";
import { useState, useRef, useEffect, useReducer, useMemo } from "react";
import { file } from "../utils/var";
import music from "../utils/music";

import { ReactComponent as PlayIcon } from "../assets/components/Play.svg";
import { ReactComponent as PauseIcon } from "../assets/components/Pause.svg";
import { ReactComponent as NextIcon } from "../assets/components/Next.svg";
import { ReactComponent as PrevIcon } from "../assets/components/Back.svg";
import { ReactComponent as MicIcon } from "../assets/components/Mic.svg";
import { ReactComponent as ListIcon } from "../assets/components/List.svg";

export default function Kaosz() {
  const [toPlay, setPlay] = useState(true);
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

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  if (isNaN(mins) || isNaN(secs)) return "0:00";
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const initialState = {
  currentMusic: 0,
  isPlaying: false,
  progress: 0,
  mp: 0,
  showLyrics: false,
};

const musicReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_LYRICS":
      return {
        ...state,
        showLyrics: !state.showLyrics,
      };
    case "SET_MUSIC":
      return {
        ...state,
        currentMusic:
          action.payload < 0
            ? (action.payload + music.length) % music.length
            : action.payload % music.length,
        progress: 0,
        isPlaying: true,
      };
    case "TOGGLE_PLAY_PAUSE":
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    case "SET_PROGRESS":
      return {
        ...state,
        progress: action.payload.progress,
        mp: action.payload.mp,
      };
    case "SET_MP":
      return {
        ...state,
        mp: action.payload,
      };
    default:
      return state;
  }
};

function Player() {
  const [state, dispatch] = useReducer(musicReducer, initialState);
  const { currentMusic, isPlaying, progress, mp, showLyrics } = state;
  const song = useMemo(() => music[currentMusic], [currentMusic]);
  const audioRef = useRef(null);
  const timeRef = useRef(0);

  const chooseMusic = (i) => () => dispatch({ type: "SET_MUSIC", payload: i });
  const playPause = () => dispatch({ type: "TOGGLE_PLAY_PAUSE" });

  const handleSongChange = (i) => {
    dispatch({ type: "SET_MUSIC", payload: i });
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 50);
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * music[state.currentMusic].duration;
    audioRef.current.currentTime = newTime;
    dispatch({ type: "SET_PROGRESS", payload: e.target.value });
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = music[state.currentMusic].loc;
      timeRef.current = audioRef.current.currentTime;
    }
  }, [state.currentMusic]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        dispatch({
          type: "SET_PROGRESS",
          payload: {
            progress:
              (audioRef.current.currentTime /
                music[state.currentMusic].duration) *
              100,
            mp: audioRef.current.currentTime,
          },
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [state.currentMusic]);

  return (
    <>
      <Block className={styles.player}>
        <img src={file("karakterek/kaoszszofi.png")} alt="" />
        <audio
          ref={audioRef}
          onEnded={() => handleSongChange(currentMusic + 1)}
        />
        <p id={styles.title}>{song.nev}</p>
        <input
          type="range"
          value={progress}
          onChange={handleProgressChange}
          className={styles["progress-bar"]}
        />
        <div className={styles["mp"]}>
          <p>{formatTime(mp)}</p>
          <p>{formatTime(song.duration)}</p>
        </div>
        <div className={styles.buttons}>
          <MusicButton
            className={styles["prev-button"]}
            onClick={() => handleSongChange(currentMusic - 1)}
          >
            <PrevIcon className={styles.prev} />
          </MusicButton>
          <MusicButton className={styles["pause-button"]} onClick={playPause}>
            {isPlaying ? (
              <PauseIcon className={styles.play} />
            ) : (
              <PlayIcon className={styles.play} />
            )}
          </MusicButton>
          <MusicButton
            className={styles["next-button"]}
            onClick={() => handleSongChange(currentMusic + 1)}
          >
            <NextIcon className={styles.next} />
          </MusicButton>
          <MusicButton
            className={styles["lyrics"]}
            onClick={() => dispatch({ type: "TOGGLE_LYRICS" })}
          >
            {state.showLyrics ? (
              <ListIcon className={styles.list} />
            ) : (
              <MicIcon className={styles.mic} />
            )}
          </MusicButton>
        </div>
      </Block>
      {showLyrics ? (
        <Block className="">Hello Lyrics</Block>
      ) : (
        <Block className="">Hello Lista</Block>
      )}
    </>
  );
}

function MusicButton({ children, onClick, className }) {
  return (
    <div onClick={onClick} className={`${styles["music-button"]} ${className}`}>
      {children}
    </div>
  );
}
