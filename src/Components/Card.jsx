import React from "react";
import { Link } from "react-router-dom";
import img from "../images/doctor.jpg";
import { useState } from "react";
import { useEffect } from "react";

const Card = ({ id, name, username, onRemoveFav }) => {
  const [isFavorito, setIsFavorito] = useState(false);

  useEffect(() => {
    const profesionales = JSON.parse(localStorage.getItem("medicos") || "[]");
    const profesionalAdd = profesionales.find((item) => item.id === id);
    setIsFavorito(!!profesionalAdd);
  }, [id]);

  const addFav = () => {
    const profesionales = JSON.parse(localStorage.getItem("medicos") || "[]");
    const profesionalAdd = profesionales.find((item) => item.id === id);
    if (profesionalAdd) {
      alert(`Error, ${name} ya ha sido agregado a favoritos.`);
      return;
    }

    profesionales.push({ id, name, username });
    localStorage.setItem("medicos", JSON.stringify(profesionales));
    setIsFavorito(true);
  };

  const removeFav = () => {
    const profesionales = JSON.parse(localStorage.getItem("medicos") || "[]");
    const nuevosProfesionales = profesionales.filter((item) => item.id !== id);
    localStorage.setItem("medicos", JSON.stringify(nuevosProfesionales));
    setIsFavorito(false);
    onRemoveFav(id);
  };

  return (
    <div className="card">
      <img className="foto" src={img} alt="imagen-doctor" />
      <h2>
        <Link to={`/${id}`}>{name}</Link>
      </h2>
      <h3>usuario: {username}</h3>
      {isFavorito ? (
        <button onClick={removeFav} className="favButtonEliminar">
          Eliminar de favoritos 🌟
        </button>
      ) : (
        <button onClick={addFav} className="favButtonAgregar">
          Añadir a favoritos 🌟
        </button>
      )}
    </div>
  );
};

export default Card;