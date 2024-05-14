import { createContext, useState } from "react";

export const HotelContex = createContext();

export const HotelProvider = ({ children }) => {
  const [reservas, setreservas] = useState([]);

  const addReserva = (reseva) => {
    setreservas((prevState) => [...prevState, reseva]);
    console.log(`reservas`, reservas);
  };

  const completReserva = (number_romm) => {
    const reservaACompletar = reservas.find(x=>x.Num_Romm===number_romm)
        reservaACompletar.reservada=true;
        setreservas((prevState) => [...prevState]);
    console.log(`reservas`, reservas);
  };
  const deleteReserva = (number_romm) => {
    const reservaACompletar = reservas.filter(x=>x.Num_Romm!==number_romm)
        console.log(`reservaAEliminar`,reservaACompletar);
        setreservas(reservaACompletar);
  };
  return (
    <HotelContex.Provider value={{ reservas, addReserva, completReserva,deleteReserva}}>
      {children}
    </HotelContex.Provider>
  );
};
