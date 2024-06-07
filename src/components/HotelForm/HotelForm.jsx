import { useEffect, useState } from "react";
import { Rom_Num1, Rom_Num2, suit } from "../hotel/HotelClass";
import { openMessaje } from "../../componentes";
import { useHotelApp } from "../../context/useHotelApp";
import { useParams } from "react-router-dom";
import { showMessage } from "../../util"; 


export const HotelForm = () => {
  const [reservas, setReservas] = useState([]);
  // const [reserva, setReserva] = useState("");
  const [number_romm, setNumber_romm] = useState("");
  const [name_Person, setNombre] = useState("");
  const [date_star, setFechaInicio] = useState("");
  const [date_end, setFechaFinal] = useState("");
  let [type_rom, setTipohabitacion] = useState("");
  const {addReserva} =useHotelApp();

  const { addHotel, findHotel, updateHotel } = useHotelApp();
  const { id_rooms: urlId } = useParams();

  const getHotelById = (id_rooms) => {
    const response = findHotel(id_rooms);
    return response;
  };

  const convertDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split("T")[0];
    return formattedDate;
  };

  useEffect(() => {
    console.log(urlId);
    const HotelFound = getHotelById(urlId);
    console.log(`HotelFound`, HotelFound);
    if (HotelFound) {
      setNombre(HotelFound.nombrePersonR);
      setNumber_romm(HotelFound.Num_Romm);
      setFechaInicio(convertDate(HotelFound.fecha_Inicio));
      setFechaFinal(convertDate(HotelFound.fecha_fin));
      setTipohabitacion(HotelFound.tipoHabitacion);
    }
  }, [urlId]);

  const anddleAdd = () => {
    setReservas((prevState) => [...prevState, reservas]);
  };

  function HabitacionSimple(
    nombrePersonR,
    Num_Romm,
    tipoHabitacion,
    fecha_Inicio,
    fecha_fin
  ) {
    const reserva = new Rom_Num1(
      nombrePersonR,
      Num_Romm,
      tipoHabitacion,
      fecha_Inicio,
      fecha_fin
    );
    reserva.obtenerDias();
    reserva.obtenerPreciototal();
    reserva.obtenerPrecioPornoche();
    reserva.obtenerLetraA();
    return reserva;
  }

  function HabitacionDoble(
    nombrePersonR,
    Num_Romm,
    tipoHabitacion,
    fecha_Inicio,
    fecha_fin
  ) {
    const reserva = new Rom_Num2(
      nombrePersonR,
      Num_Romm,
      tipoHabitacion,
      fecha_Inicio,
      fecha_fin
      // (letraH = "B")
    );
    reserva.obtenerDias();
    reserva.obtenerPreciototal();
    reserva.obtenerPrecioPornoche();
    reserva.obtenerLetraB();
    return reserva;
  }

  function HabitacionSuit(
    nombrePersonR,
    Num_Romm,
    tipoHabitacion,
    fecha_Inicio,
    fecha_fin
  ) {
    const reserva = new suit(
      nombrePersonR,
      Num_Romm,
      tipoHabitacion,
      fecha_Inicio,
      fecha_fin
    );
    reserva.obtenerDias();
    reserva.obtenerPreciototal();
    reserva.obtenerPrecioPornoche();
    reserva.obtenerLetraC();
    return reserva;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let result = {};

    if (
      name_Person != "" &&
      number_romm != "" &&
      type_rom != "" &&
      date_star != "" &&
      date_end != ""
    ) {
      if (type_rom === "Habitacion Individual") {
        type_rom === "Habitacion Individual" ? type_rom= 1 : "No se encontro";
        result = HabitacionSimple(
          name_Person,
          number_romm,
          type_rom,
          date_star,
          date_end
        );
        openMessaje("Habitacion individual","reservada","success");
      } else if (type_rom === "Habitacion Doble") {
        type_rom === "Habitacion Doble" ? type_rom= 2 : "No se encontro";
        result = HabitacionDoble(
          name_Person,
          number_romm,
          type_rom,
          date_star,
          date_end
        );
        openMessaje("Habitacion Doble","reservada","success");
        
      } else if (type_rom === "Suit de Lujo") {
        type_rom === "Suit de Lujo" ? type_rom= 3 : "No se encontro";
        result = HabitacionSuit(
          name_Person,
          number_romm,
          type_rom,
          date_star,
          date_end
        );
        openMessaje("Suit de Lujo","reservada","success");
      } else {
        alert("no ha ingresado información");
        return;
      }
      
      let message = "Reserva registrada correctamente";
      let response = false;
      if (urlId) {
        message = "Reserva actualizada correctamente";
        response = await updateHotel(urlId, result);
      } else {
        response = await addHotel(result);
      }
      if (response.state)
        showMessage("success", message, "Todos los datos fueron registrados");
      else {
        showMessage("warning", response.message);
      }
      
      addReserva(result);
    }
  };

  console.log(reservas);
  console.log(reservas);

  return (
    // eso sirve para no poner div donde tiene etiqueta de cierre solo puede existir uno
    <>
      <div className="container p-5 my-5 border container-sm bg-dark col-md-6 rounded-4">
        <h1 className="text-white">HOTEL</h1>
        <form onSubmit={handleSubmit}>
          <label className="form-label float-start text-white">
            Persona que reserva
          </label>
          <br />
          <input
            type="text"
            name="nombrePersonR"
            id="name_Person"
            placeholder="Nombre Completo"
            className="form-control"
            maxLength="35"
            onChange={(event) => setNombre(event.target.value)}
            required
          />
          <br />
          {/* separacion de celdas */}
          <div className="row">
            <div className="col-sm">
              <label className="form-label float-start text-white">
                Fecha de inicio
              </label>
              <br />
              <input
                type="date"
                name="fecha_Inicio"
                id="date_star"
                className="form-control"
                min="2024-04-29"
                max="2024-12-30"
                onChange={(event) => setFechaInicio(event.target.value)}
                required
              />
            </div>
            <div className="col-sm">
              <label className="form-label float-start text-white">
                Fecha de fin
              </label>
              <br />
              <input
                type="date"
                name="fecha_fin"
                id="date_end"
                className="form-control"
                onChange={(event) => setFechaFinal(event.target.value)}
                max="2024-12-30"
                min="2024-04-29"
                required
              />
              <br />
            </div>
          </div>
          {/* segunda seperacion */}
          <div className="row">
            <div className="col-sm">
              <label className="form-label float-start text-white">
                Tipo de habitación
              </label>
              <br />
              <select
                id="type_rom"
                name="tipoHabitacion"
                className="form-select"
                onChange={(event) => setTipohabitacion(event.target.value)}
              >
                <option value="" selected disabled>
                  Seleccione...
                </option>
                <option value="Habitacion Individual">Individual</option>
                <option value="Habitacion Doble">Habitación doble</option>
                <option value="Suit de Lujo">Suit</option>
              </select>
              <br />
            </div>
            <div className="col-sm">
              <label className="form-label float-start text-white">
                # Habitación
              </label>
              <br />
              <input
                type="number"
                name="Num_Romm"
                id="number_romm"
                min="1"
                max="100"
                className="form-control"
                placeholder="Del 1 al 100 "
                onChange={(event) => setNumber_romm(event.target.value)}
              />
              <br />
            </div>
          </div>
          <input type="submit" value="Guardar" className="btn btn-success" />
          <br />
        </form>
      </div>
    </>
  );
};
HotelForm.propTypes = {
  // onTask: PropTypes.function,
}
