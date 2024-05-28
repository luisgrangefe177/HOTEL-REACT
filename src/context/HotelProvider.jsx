import { createContext, useEffect, useState } from "react";
import { getAllHotelServer } from "../components/network/hotelSimpleNetwork";

export const HotelContex = createContext();

export const HotelProvider = ({ children }) => {
  const [reservas, setreservas] = useState([]);

  useEffect(() => {
    // getTodosServer();
    // getTodosServerSync(setTodos);
    getAllHotelServer();
    
  }, []);

  const addReserva = (reseva) => {
    setreservas((prevState) => [...prevState, reseva]);
    console.log(`reservas`, reservas);
  };

  const completReserva = (id_rooms) => {
    const reservaACompletar = reservas.find(x=>x.id_rooms===id_rooms)
        reservaACompletar.reservada=true;
        setreservas((prevState) => [...prevState]);
    console.log(`reservas`, reservas);
  };
  const deleteReserva = (number_romm) => {
    const reservaACompletar = reservas.filter(x=>x.Num_Romm!==number_romm)
        console.log(`reservaAEliminar`,reservaACompletar);
        setreservas(reservaACompletar);
  };
  
  // const updateTodo = (id, updatedTodo) => {
  //   const index = todos.findIndex((todo) => todo.id === id);
  //   if (index !== -1) {
  //     const newTodos = [...todos];
  //     newTodos[index] = updatedTodo;
  //     if (updatedTodo.fechaVencimiento) {
  //       updateTodoDateServer(id, updatedTodo);
  //     } else {
  //       updateTodoServer(id, updatedTodo);
  //     }
  //     setTodos(newTodos);
  //   }
  // };
  return (
    <HotelContex.Provider value={{ reservas, addReserva, completReserva,deleteReserva}}>
      {children}
    </HotelContex.Provider>
  );
};
