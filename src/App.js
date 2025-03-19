import Back from "./components/Back";
import Characters from "./components/Characters";
import Header from "./components/Header";
import Kaosz from "./components/Kaosz";
import Kapcsolat from "./components/Kapcsolat";
import Konyv from "./components/Konyv";
import Quest from "./components/Quest";
import Rendeles from "./components/Rendeles";

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
      <Characters />
      <Kaosz />
      <Quest />
      <Rendeles />
      <Kapcsolat />
      <Back />
    </div>
  );
}

export default App;
