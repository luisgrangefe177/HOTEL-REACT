import { PropTypes } from "prop-types";
import Swal from "sweetalert2";



export const HotelTableR = ({ title, items, onComplete, onDelete }) => {
   const complete = (number_romm) => {
    console.log(`numHabitacion`, number_romm);
  };

  const deleteReser = (number_romm) => {
    console.log(`numHabitacion`, number_romm);
  };

  const confirmar= (number_romm)=>{

    Swal.fire({
      title: "¿Estás seguro?",
      text: "Se eliminara la reserva",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "si, eliminar",
      cancelButtonText: "Cancelar"

    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(number_romm);
        Swal.fire({
          title: "Eliminado",
          text: "Reserva eliminada",
          icon: "success",
          timer: 2000
        });
      }
    });
  }

  const openToast = (number_romm) =>{
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    
    Toast.fire({
      icon: "success",
      title: "Habitación disponible"
    });
    onComplete(number_romm)
  
  }

  return (
    <>

      <div className="container mt-3">
        <h3>{title}</h3>
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>Persona que reserva</th>
              <th>Numero habitación</th>
              <th>Tipo habitación</th>
              <th>Fecha inicio reserva</th>
              <th>Fecha fin reserva</th>
              <th>Letra habitación</th>
              <th>Días reservados</th>
              <th>Precio habitación</th>
              <th>Precio total</th>
              <th>Disponible</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx}>
                <td>{item.nombrePersonR}</td>
                <td>{item.Num_Romm}</td>
                <td>{item.tipoHabitacion}</td>
                <td>{item.fecha_Inicio}</td>
                <td>{item.fecha_fin}</td>
                <td>{item.letraH}</td>
                <td>{item.dias_fechas}</td>
                <td>{item.precioHabitacion}</td>
                <td>{item.precio_Total}</td>
                <td>
                  {item.reservada === false ? "Reservada" : "No reservado"}
                </td>
                <td>
                  {" "}
                  <div className="btn-group">
                    <button
                      className="btn btn-success"
                      onClick={() => openToast(item.Num_Romm)}
                    >
                      <i className="fa-solid fa-bell-concierge"></i>
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => confirmar(item.Num_Romm)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

HotelTableR.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};
