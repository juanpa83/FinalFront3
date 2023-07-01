import React from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";
import { useState } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const profesionales = JSON.parse(localStorage.getItem("medicos")) || [];
  const { tema } = useContext(ContextGlobal);
  const [favProfesionales, setFavProfesionales] = useState(profesionales);

  const handleRemoveFav = (id) => {
    const nuevosProfesionales = favProfesionales.filter(
      (profesional) => profesional.id !== id
    );
    setFavProfesionales(nuevosProfesionales);
    localStorage.setItem("medicos", JSON.stringify(nuevosProfesionales));
  };

  return (
    <section className="fav" style={{ background: tema.fav }}>
      <h1>Profesionales Favoritos</h1>
      {favProfesionales.length > 0 ? (
        <div className="card-grid">
          {favProfesionales.map((item) => (
            <Card
              name={item.name}
              username={item.username}
              key={item.id}
              id={item.id}
              onRemoveFav={handleRemoveFav}
            />
          ))}
        </div>
      ) : (
        <p>No hay profesionales favoritos.</p>
      )}
    </section>
  );
};

export default Favs;
