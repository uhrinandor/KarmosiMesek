import "../styles/Kapcsolat.scss";

import Section from "./Section";
import { BlockTitle } from "./Text";

import { ReactComponent as Face } from "../assets/bottom/FacebookIcon.svg";
import { ReactComponent as Insta } from "../assets/bottom/InstaIcon.svg";
import { ReactComponent as Tiktok } from "../assets/bottom/TikTokIcon.svg";

export default function Kapcsolat() {
  return (
    <Section title="KAPCSOLAT" id="kapcsolat" className="kapcsolat" variant="2">
      <div className="block kapcsolat-content">
        <BlockTitle>Hol találsz meg minket?</BlockTitle>
        <Contact text="Karmosi Mesék">
          <Face />
        </Contact>
        <Contact text="@karmosimesek">
          <Insta />
        </Contact>
        <Contact text="@karmosimesek">
          <Tiktok />
        </Contact>
      </div>
      <div className="block kapcsolat-image">
        <img src="http://karmosimesek.hu/assets/kapcsolat.png" alt="" />
      </div>
    </Section>
  );
}

function Contact({ children, text, link }) {
  return (
    <div className="contact">
      {children}
      <a href={link}>{text}</a>
    </div>
  );
}
