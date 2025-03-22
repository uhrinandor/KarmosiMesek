import styles from "../styles/Kapcsolat.module.scss";

import Section, { Block } from "./Section";
import { BlockTitle } from "./Text";

import { ReactComponent as Face } from "../assets/bottom/FacebookIcon.svg";
import { ReactComponent as Insta } from "../assets/bottom/InstaIcon.svg";
import { ReactComponent as Tiktok } from "../assets/bottom/TikTokIcon.svg";
import { file } from "../utils/var";

export default function Kapcsolat({ data }) {
  return (
    <Section
      title="KAPCSOLAT"
      id="kapcsolat"
      className={styles.kapcsolat}
      variant="2"
    >
      <Block className={styles.content}>
        <BlockTitle>{data.blokkcim}</BlockTitle>
        <Contact text={data.facebook.szoveg} link={data.facebook.link}>
          <Face id={styles.face} />
        </Contact>
        <Contact text={data.instagram.szoveg} link={data.instagram.link}>
          <Insta id={styles.insta} />
        </Contact>
        <Contact text={data.tiktok.szoveg} link={data.tiktok.link}>
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
