import React from "react";
import "../styles/Header.scss";
import { ReactComponent as KarmosiLogo } from "../assets/header/KarmosiLogo.svg";
import { ReactComponent as Home } from "../assets/header/KezdőlapIcon.svg";
import { ReactComponent as Char } from "../assets/header/SzereplőkIcon.svg";
import { ReactComponent as Kaosz } from "../assets/header/KáoszKutyákIcon.svg";
import { ReactComponent as Support } from "../assets/header/RendelésIcon.svg";
import { ReactComponent as Contact } from "../assets/header/KapcsolatIcon.svg";
import { useNavigate } from "react-router";

export default function Header() {
  return (
    <header className="header" id="header">
      <div className="content">
        <KarmosiLogo className="karmosilogo" />
        <img
          src="http://karmosimesek.hu/assets/cicafej.png"
          alt="Cicafej"
          className="cicafej"
        />
      </div>
      <div className="navbar">
        <MenuItem title="KEZDŐLAP" to="">
          <Home className="icon home" />
        </MenuItem>
        <MenuItem title="SZEREPLŐK" to="szereplok">
          <Char className="icon char" />
        </MenuItem>
        <MenuItem title="KÁOSZ KUTYÁK" to="kaoszkutyak">
          <Kaosz className="icon kaosz" />
        </MenuItem>
        <MenuItem title="RENDELÉS" to="rendeles">
          <Support className="icon order" />
        </MenuItem>
        <MenuItem title="KAPCSOLAT" to="kapcsolat">
          <Contact className="icon contact" />
        </MenuItem>
      </div>
    </header>
  );
}

function MenuItem({ children, title, to }) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`#${to}`);
    setTimeout(() => {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };
  return (
    <div className="menu-item" onClick={onClick}>
      {children}
      <p>{title}</p>
    </div>
  );
}
