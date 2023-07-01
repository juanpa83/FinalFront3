import React from "react";
import DH from "../images/DH.png";
import face from "../images/ico-facebook.png";
import instagram from "../images/ico-instagram.png";
import tiktok from "../images/ico-tiktok.png";
import whatsapp from "../images/ico-whatsapp.png";
import { ContextGlobal } from "./utils/global.context";
import { useContext } from "react";

const Footer = () => {
  const { tema } = useContext(ContextGlobal);

  return (
    <footer className="footer" style={{ background: tema.footer }}>
      <p>Powered by</p>
      <div className="redes">
        <a href="https://www.digitalhouse.com/ar">
          <img className="icon" src={DH} alt="DH-logo" />
        </a>
        <a href="https://www.facebook.com">
          <img className="logos" src={face} alt="facebook" />
        </a>
        <a href="https://www.instagram.com">
          <img className="logos" src={instagram} alt="instagram" />
        </a>
        <a href="https://www.tiktok.com">
          <img className="logos" src={tiktok} alt="DH-logo" />
        </a>
        <a href="https://www.whatsapp.com">
          <img className="logos" src={whatsapp} alt="DH-logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
