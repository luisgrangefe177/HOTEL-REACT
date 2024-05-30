import { useHotelApp } from "../../context/useHotelApp";
import {HotelTableR} from "../HotelTable/HotelTableR";



function Hotel(){
    // const [items, setItems] = useState([]);

     const {reservas,completReserva,deleteReserva}=useHotelApp();

      const handleComplete=(id_rooms)=>{
        completReserva(id_rooms);
      }
    
      const handleDelete=(id_rooms)=>{
        deleteReserva(id_rooms);
      }
      
    return(
        <>
        {/* <HotelForm onReserve={handleAdd} /> */}
        <HotelTableR items={reservas} title={"Reservas de Hotel"} onComplete={handleComplete} onDelete={handleDelete}/>
        </>
         
    )
        
}

export default Hotel;