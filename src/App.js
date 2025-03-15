import Characters from "./components/Characters";
import Header from "./components/Header";
import Konyv from "./components/Konyv";

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
    </div>
  );
}

export default App;
