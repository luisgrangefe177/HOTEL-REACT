import { createContext, useEffect, useState } from "react";
import { getHotelServer, updateHotelServer,deleteReservaServer, createHotelServer } from "../components/network/hotelNetwork";



export const HotelContex = createContext();

export const HotelProvider = ({ children }) => {
  const [reservas, setreservas] = useState([]);
    const [user, setUser] = useState(null);

  useEffect(() => {
    // getTodosServer();
    getHotelServer(setreservas);
  }, []);

  const addHotel = async (reseva) => {
    let response = {};
      response = await createHotelServer(reseva);
    if (response.state) {
      setreservas((prevState) => [...prevState, reseva]);
    }
    return response;
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

  const loginUser = (user, token) => {
    setUser(user);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.clear();
    window.location = "/";
  };

  const getLoggedUser = () => {
    return user;
  };

  const checkUser = () => {
    const currentUser = localStorage.getItem("user");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
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
        loginUser,
        logoutUser,
        getLoggedUser,
        checkUser

      }}
    >
      {children}
    </HotelContex.Provider>
  );
};
