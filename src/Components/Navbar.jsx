import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { tema, handleTema } = useContext(ContextGlobal);

  return (
    <nav className="nav" style={{ background: tema.navbar }}>
      <Link to={'/'}>
        <h2 className='icono' style={{ color: tema.letra }}>Centro Medico DH </h2>
      </Link>
      <Link to={"/"} style={{color: tema.letra}}>Home</Link>
      <Link to={"/contact"} style={{color: tema.letra}}>Contacto</Link>
      <Link to={"/favs"}style={{color: tema.letra}}>Favoritos</Link>

      <button className="button" onClick={handleTema}>
        Cambiar Tema
      </button>
    </nav>
  );
};

export default Navbar;
