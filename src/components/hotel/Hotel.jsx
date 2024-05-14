import {HotelTableR} from "../HotelTable/HotelTableR";
import { useHotelApp } from "../../context/useHotelApp";


function Hotel(){
    // const [items, setItems] = useState([]);

     const {reservas,completReserva,deleteReserva}=useHotelApp();

      const handleComplete=(number_romm)=>{
        completReserva(number_romm);
      }
    
      const handleDelete=(number_romm)=>{
        deleteReserva(number_romm);
      }
      
    return(
        <>
        {/* <HotelForm onReserve={handleAdd} /> */}
        <HotelTableR items={reservas} title={"Reservas de Hotel"} onComplete={handleComplete} onDelete={handleDelete}/>
        </>
         
    )
        
}

export default Hotel;