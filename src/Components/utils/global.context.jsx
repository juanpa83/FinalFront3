import { createContext, useState } from "react";

export const initialState = {
  temas: {
    claro: {
      navbar: "#99CC99",
      home: "rgb(234, 237, 237)",
      footer: "#99CC99",
      letra: "black",
      fav: "rgb(234, 237, 237)",
      contact: "rgb(234, 237, 237)",
    },
    oscuro: {
      navbar: "#34495E",
      home: "#5D6D7E",
      footer: "#34495E",
      letra: "#EAEDED",
      fav: "#5D6D7E",
      contact: "#5D6D7E",
    },
  },
};

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [tema, setTema] = useState(initialState.temas.claro);

  const handleTema = () => {
    setTema((t) =>
      t === initialState.temas.claro
        ? initialState.temas.oscuro
        : initialState.temas.claro
    );
  };

  return (
    <ContextGlobal.Provider value={{ handleTema, tema }}>
      {children}
    </ContextGlobal.Provider>
  );
};
