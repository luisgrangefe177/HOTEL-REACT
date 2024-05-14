import { useContext } from "react";
import { HotelContex } from "./HotelProvider";

export const useHotelApp = () => {
    // tiene que traer el estado compartido para que no arroje el error
    const context = useContext(HotelContex);
    if (!context) {
      throw new Error("useHotelApp must be used within a MyProvider");
    }
    return context;
  };