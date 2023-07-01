import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 3 || !email.includes("@")) {
      setError("Por favor verifique su información");
      return;
    }

    setSuccessMessage(
      `Gracias ${name}, te contactaremos vía email a la brevedad`
    );
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input className="tipo"
          type="text"
          placeholder="Ingrese Nombre Completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <input className="tipo"
          type="email"
          placeholder="Ingrese su correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <div className="textAmplio">
        <textarea className="tipoText"
          type="text"
          placeholder="Ingrese su consulta"          
          
        />
        </div>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Form;
