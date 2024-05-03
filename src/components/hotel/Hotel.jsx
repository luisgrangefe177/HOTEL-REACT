import { useState } from "react";
import {HotelTableR} from "../HotelTable/HotelTableR";
import HotelForm from "../HotelForm/HotelForm";


function Hotel(){
    const [items, setItems] = useState([]);

      const handleAdd = (reserv) => {    
        setItems((prevState) => [...prevState, reserv]);
      };

      const handleComplete=(number_romm)=>{
        const reservaACompletar = items.find(x=>x.Num_Romm===number_romm)
        reservaACompletar.reservada=true;
        setItems((prevState) => [...prevState]);
        console.log(`reservaACompletar`,reservaACompletar);
      }
    
      const handleDelete=(number_romm)=>{
        const reservaACompletar = items.filter(x=>x.Num_Romm!==number_romm)
        console.log(`reservaAEliminar`,reservaACompletar);
        setItems(reservaACompletar);
      }
      
    return(
        <>
        <HotelForm onReserve={handleAdd} />
        <HotelTableR items={items} title={"Reservas de Hotel"} onComplete={handleComplete} onDelete={handleDelete}/>
        </>
         
    )
        
}

export default Hotel;