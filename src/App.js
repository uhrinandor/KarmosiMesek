import Back from "./components/Back";
import Bottom from "./components/Bottom";
import { Character, Characters } from "./components/Characters";
import Header from "./components/Header";
import Kaosz from "./components/Kaosz";
import Kapcsolat from "./components/Kapcsolat";
import Konyv from "./components/Konyv";
import Quest from "./components/Quest";
import Rendeles from "./components/Rendeles";
import { SectionNoTitle } from "./components/Section";
import styles from "./App.module.scss";

function App() {
  const charArr = Array.from({ length: 13 }, (_, i) => i + 1);

  return (
    <div className="app">
      <Header />
      <p className="welcome-text">
        Örülök, hogy itt vagy! Köszöntelek a Karmosi mesék világában! Itt minden
        nap egy új kaland vár rád, ahol Karmosi Úr, a csibész kis macska lesz a
        vezetőd!
      </p>
      <Konyv />
      <Characters />
      {charArr.map((i) => {
        return (
          <SectionNoTitle
            className={
              i === charArr.length ? styles["last-character"] : undefined
            }
          >
            <Character i={i + 1} />
          </SectionNoTitle>
        );
      })}
      <Kaosz />
      <Quest />
      <Rendeles />
      <Kapcsolat />
      <Back />
      <Bottom />
    </div>
  );
}

export default App;
