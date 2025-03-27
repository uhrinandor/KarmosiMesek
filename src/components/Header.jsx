import React from "react";
import styles from "../styles/Header.module.scss";
import { ReactComponent as KarmosiLogo } from "../assets/header/KarmosiLogo.svg";
import { ReactComponent as Home } from "../assets/header/KezdőlapIcon.svg";
import { ReactComponent as Char } from "../assets/header/SzereplőkIcon.svg";
import { ReactComponent as Kaosz } from "../assets/header/KáoszKutyákIcon.svg";
import { ReactComponent as Support } from "../assets/header/RendelésIcon.svg";
import { ReactComponent as Contact } from "../assets/header/KapcsolatIcon.svg";
import { useNavigate } from "react-router";
import { file } from "../utils/var";

export default function Header({ data }) {
  return (
    <header className={styles.header} id="header">
      <div className={styles.content}>
        <KarmosiLogo className={styles.karmosilogo} />
        <img
          src={file("/cicafej.png")}
          alt="Cicafej"
          className={styles.cicafej}
        />
      </div>
      <div className={styles.navbar}>
        <MenuItem title={data.kezdolap} to="">
          <Home className={`${styles.icon} ${styles.home}`} />
        </MenuItem>
        <MenuItem title="SZEREPLŐK" to="szereplok">
          <Char className={`${styles.icon} ${styles.char}`} />
        </MenuItem>
        <MenuItem title="KÁOSZ KUTYÁK" to="kaoszkutyak">
          <Kaosz className={`${styles.icon} ${styles.kaosz}`} />
        </MenuItem>
        <MenuItem title="RENDELÉS" to="rendeles">
          <Support className={`${styles.icon} ${styles.order}`} />
        </MenuItem>
        <MenuItem title="KAPCSOLAT" to="kapcsolat">
          <Contact className={`${styles.icon} ${styles.contact}`} />
        </MenuItem>
      </div>
    </header>
  );
}

function MenuItem({ children, title, to }) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`#${to}`);
  };
  return (
    <div className={styles["menu-item"]} onClick={onClick}>
      {children}
      <p>{title}</p>
    </div>
  );
}
