import { useState } from "react";
import { Rom_Num1, Rom_Num2, suit } from "../hotel/HotelClass";
import { openMessaje } from "../../componentes";


export const HotelForm = ({ onReserve }) => {
  const [reservas, setReservas] = useState([]);
  const [reserva, setReserva] = useState("");
  const [number_romm, setNumber_romm] = useState("");
  const [name_Person, setNombre] = useState("");
  const [date_star, setFechaInicio] = useState("");
  const [date_end, setFechaFinal] = useState("");
  const [type_rom, setTipohabitacion] = useState("");

  // const handleClick = () => {
  //   console.log(reserva);
  //   onMessage(reserva);
  // };

  const anddleAdd = () => {
    setReservas((prevState) => [...prevState, reserva]);
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

  const handleSubmit = (event) => {
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
        result = HabitacionSimple(
          name_Person,
          number_romm,
          type_rom,
          date_star,
          date_end
        );
        openMessaje("Habitacion individual","reservada","success");
      } else if (type_rom === "Habitacion Doble") {
        result = HabitacionDoble(
          name_Person,
          number_romm,
          type_rom,
          date_star,
          date_end
        );
        openMessaje("Habitacion Doble","reservada","success");
        
      } else if (type_rom === "Suit de Lujo") {
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
      onReserve(result);
    }
  };

  console.log(reserva);
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
export default HotelForm;
