import React, { createContext, useContext, useState } from "react";

// Step 1: Create a context
// 
const MyContext = createContext();

// Step 2: Create a provider component
// crear componentes de React 

// aplicamos un arrayfuntion
const MyProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState("");


  // cambia la funcion compartida
  // actualiza un valor
  const updateState = (newValue) => {
    // llama al estado interno del componente 
    setSharedState(newValue);
  };

  return (
    // siempre viene con el .provider
    // comparte el estado global en value={{ sharedState, updateState }}
    <MyContext.Provider value={{ sharedState, updateState }}>
      {children}
    </MyContext.Provider>
  );
};
// crear un cosumjidor siempre se caracteriza por tener el usaShareState
// Step 3: Create consumer hooks to access the context
// un componente de react 
const useSharedStatex = () => {
  // tiene que traer el estado compartido para que no arroje el error
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useSharedState must be used within a MyProvider");
  }
  return context;
};

// Step 4: Use the context in your components
const ComponentA = () => {
  // llamando a dos atributos sharedState, updateState atraves de useSharedState()
  // useSharedState(); estado global enviar mensajes y escuchar
  const { sharedState, updateState } = useSharedState();


// funcion llamada en el botton 
  const handleChange = (event) => {
    updateState(event.target.value);
  };

  return (
    <div>
      <h2>Component A</h2>
      <input type="text" value={sharedState} onChange={handleChange} />
    </div>
  );
};

const ComponentB = () => {
  // se pinta lo que contiene useSharedState(); que se este cambiando 
  const { sharedState } = useSharedState();

  return (
    <div>
      <h2>Component B</h2>
      <p>Shared State: {sharedState}</p>
    </div>
  );
};

// Step 5: Wrap your components with the provider
// comunicacion de componente a estado global 
const GlobalState = () => {
  return (
    <MyProvider>
      <ComponentA />
      <ComponentB />
    </MyProvider>
  );
};

export default GlobalState;
