import { createContext, useEffect, useState } from "react";
import { getAllHotelServer, updateHotelServer,deleteReservaServer } from "../components/network/hotelNetwork";



export const HotelContex = createContext();

export const HotelProvider = ({ children }) => {
  const [reservas, setreservas] = useState([]);

  useEffect(() => {
    // getTodosServer();
    getAllHotelServer(setreservas);
  }, []);

  const addHotel = (reseva) => {
    setreservas((prevState) => [...prevState, reseva]);
    console.log(`reservas`, reservas);
  };

  const completReserva = (id_rooms) => {
    const reservaACompletar = reservas.find((x) => x.id_rooms === id_rooms);
    reservaACompletar.reservada = true;
    setreservas((prevState) => [...prevState]);
    console.log(`reservas`, reservas);
  };
  const deleteReserva = (id_rooms) => {
    const reservaACompletar = reservas.filter(
      (x) => x.id_rooms !== id_rooms
    );
    setreservas(reservaACompletar);
    deleteReservaServer(id_rooms)
  };
  const findHotel = (id_rooms) => {
    const reservaABuscar = reservas.find((x) => x.id_rooms == Number(id_rooms));
    // let reservaABuscar = await getHotelByIdServerSync(id);
    // reservaABuscar = reservaABuscar[0];
    return reservaABuscar;
  };

  const updateHotelR = (id_rooms, updatedReser) => {
    const index = reservas.findIndex((x) => x.id_rooms === id_rooms);
    if (index !== -1) {
      const newReservas = [...reservas];
      newReservas[index] = updatedReser;
      updateHotelServer(id_rooms, updatedReser);

      setreservas(newReservas);
    }
  };
  return (
    <HotelContex.Provider
      value={{
        reservas,
        addHotel,
        completReserva,
        deleteReserva,
        findHotel,
        updateHotelR,
      }}
    >
      {children}
    </HotelContex.Provider>
  );
};
