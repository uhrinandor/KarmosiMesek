import "../styles/Rendeles.scss";
import Section from "./Section";
import { BlockTitle, BreakText } from "./Text";
import { Button } from "./Button";

const RENDELES_LINK = "http://karmosimesek.hu";

export default function Rendeles() {
  const toRendeles = () => {
    window.location.href = RENDELES_LINK;
  };

  return (
    <Section className="rendeles" id="rendeles" title="RENDELÉS" variant="1">
      <div className="block rendeles-image">
        <img src="http://karmosimesek.hu/assets/rendeles.png" alt="Rendelés" />
      </div>
      <div className="block rendeles-content">
        <BlockTitle>Készen állsz a kalandra?</BlockTitle>
        <BreakText>
          A Karmosi Mesék könyv teljes pompájában, most elérhetővé vált mindenki
          számára, weboldalunkon megvásárolhatod kedvezményes áron, különböző
          csomagokban!
        </BreakText>
        <Button onClick={toRendeles} className="rendeles-button">
          RENDELÉS
        </Button>
      </div>
    </Section>
  );
}
