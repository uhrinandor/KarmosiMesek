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
import { DataContext } from "./components/DataContext";
import { useContext, useEffect, useMemo } from "react";
import Error from "./components/Error";
import { useLocation } from "react-router";

function App() {
  const location = useLocation();
  const data = useContext(DataContext);
  const hash = useMemo(() => location.hash, [location.hash]);

  const charArr = Array.from({ length: 13 }, (_, i) => i + 1);

  useEffect(() => {
    if (hash) {
      const scrollToElement = () => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          // Retry scrolling in case the element isn't rendered yet
          setTimeout(scrollToElement, 10);
        }
      };
      scrollToElement();
    }
  }, [hash, location]);

  return data ? (
    <div className="app">
      <Header data={data.fejlec} />
      <p className="welcome-text">{data.koszonto}</p>
      <Konyv data={data.konyv} />
      <Characters karmosi={data.szereplok.lista[0]} />
      {charArr.map((i) => {
        return (
          <SectionNoTitle
            key={i}
            className={
              i === charArr.length ? styles["last-character"] : undefined
            }
          >
            <Character data={data.szereplok.lista[i]} i={i} />
          </SectionNoTitle>
        );
      })}
      <Kaosz data={data.kaoszkutyak} />
      <Quest data={data.kaland} />
      <Rendeles data={data.rendeles} />
      <Kapcsolat data={data.kapcsolat} />
      <Back data={data.vissza} />
      <Bottom data={data.kapcsolat} />
    </div>
  ) : (
    <Error />
  );
}

export default App;
