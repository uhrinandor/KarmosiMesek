import Header from "./components/Header";
import Konyv from "./components/Konyv";
import Section from "./components/Section";
import { BlockTitle, BreakText } from "./components/Text";

function App() {
  return (
    <div className="app">
      <Header />
      <p className="welcome-text">
        Örülök, hogy itt vagy! Köszöntelek a Karmosi mesék világában! Itt minden
        nap egy új kaland vár rád, ahol Karmosi Úr, a csibész kis macska lesz a
        vezetőd!
      </p>
      <Konyv />
      <Konyv />
      <Konyv />
    </div>
  );
}

export default App;
