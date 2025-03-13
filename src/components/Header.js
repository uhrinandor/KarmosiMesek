import React from "react";
import "../styles/Header.scss";
import { ReactComponent as KarmosiLogo } from "../assets/header/KarmosiLogo.svg";
import { ReactComponent as CicaFej } from "../assets/header/Cicafej.svg";
import { ReactComponent as Home } from "../assets/header/KezdőlapIcon.svg";
import { ReactComponent as Char } from "../assets/header/SzereplőkIcon.svg";
import { ReactComponent as Kaosz } from "../assets/header/KáoszKutyákIcon.svg";
import { ReactComponent as Support } from "../assets/header/RendelésIcon.svg";
import { ReactComponent as Contact } from "../assets/header/KapcsolatIcon.svg";
import { useNavigate } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <div className="content">
        <KarmosiLogo className="karmosilogo" />
        <CicaFej className="cicafej" />
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

  const onClick = () => navigate(`/#${to}`);
  return (
    <div className="menu-item" onClick={onClick}>
      {children}
      <p>{title}</p>
    </div>
  );
}
