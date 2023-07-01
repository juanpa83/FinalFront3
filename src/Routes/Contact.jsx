import React from "react";
import Form from "../Components/Form";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { tema } = useContext(ContextGlobal);

  return (
    <div className="contact" style={{ background: tema.contact }}>
      <h2>Contacta con nosotros</h2>
      <p>Dejanos tus datos y tu consulta </p>
      <Form />
    </div>
  );
};

export default Contact;
