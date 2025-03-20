import styles from "../styles/Kapcsolat.module.scss";

import Section, { Block } from "./Section";
import { BlockTitle } from "./Text";

import { ReactComponent as Face } from "../assets/bottom/FacebookIcon.svg";
import { ReactComponent as Insta } from "../assets/bottom/InstaIcon.svg";
import { ReactComponent as Tiktok } from "../assets/bottom/TikTokIcon.svg";
import { file, social } from "../utils/var";

export default function Kapcsolat() {
  return (
    <Section
      title="KAPCSOLAT"
      id="kapcsolat"
      className={styles.kapcsolat}
      variant="2"
    >
      <Block className={styles.content}>
        <BlockTitle>Hol találsz meg minket?</BlockTitle>
        <Contact text="Karmosi Mesék" link={social.FACEBOOK}>
          <Face id={styles.face} />
        </Contact>
        <Contact text="@karmosimesek" link={social.INSTA}>
          <Insta id={styles.insta} />
        </Contact>
        <Contact text="@karmosimesek" link={social.TIKTOK}>
          <Tiktok id={styles.tiktok} />
        </Contact>
      </Block>
      <div className={styles.image}>
        <img src={file("kapcsolat.png")} alt="Karmosi úr elérhetőség" />
      </div>
    </Section>
  );
}

function Contact({ children, text, link }) {
  return (
    <div className={styles.contact}>
      {children}
      <a href={link}>{text}</a>
    </div>
  );
}
