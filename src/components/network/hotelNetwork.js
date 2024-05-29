import { getToken } from "../../util";

const URL_API = "http://localhost:3000/hotel";
const URL_ALL_API = "http://localhost:3000/hotel";

export const getHotelServer = (cb) => {
  try {
    fetch(URL_API)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const finalHotels = response.map((item) => {
          return {
            idx: item.id_rooms,
            nombrePersonR: item.tr_nameperson || item.nameperson,
            Num_Romm: item.tr_numRoom || item.numRoom,
            tipoHabitacion: item.tr_typeroom,
            fecha_Inicio: item.tr_starDate,
            fecha_fin: item.tr_dateEnd,
            letraH: item.tr_letterRoom,
            dias_fechas: item.tr_catDays,
            precioHabitacion: item.tr_costRom,
            precio_Total: item.tr_costTotal,
            reservada: item.tr_complet || item.complet === 0 ? false : true,
          };
        });
        cb(finalHotels);
      });
  } catch (error) {
    console.log(error);
  }
};

export const getAllHotelServer = (cb) => {
  try {
    fetch(URL_ALL_API)
      .then((response) => response.json())
      .then((response) => {
        const finalHotels = response.map((item) => {
          return {
            idx: item.id_rooms,
            nombrePersonR: item.tr_nameperson || item.nameperson,
            Num_Romm: item.tr_numRoom || item.numRoom,
            tipoHabitacion: item.tr_typeroom,
            fecha_Inicio: item.tr_starDate,
            fecha_fin: item.tr_dateEnd,
            letraH: item.tr_letterRoom,
            dias_fechas: item.tr_catDays,
            precioHabitacion: item.tr_costRom,
            precio_Total: item.tr_costTotal,
            reservada: item.tr_complet || item.complet === 0 ? false : true,
          };
        });
        cb(finalHotels);
      });
  } catch (error) {
    console.log(error);
  }
};

export const getHotelServerSync = async (cb) => {
  try {
    let response = await fetch(URL_API);
    response = await response.json();
    const finalTodos = response.map((item) => {
      return {
        idx: item.id_rooms,
        nombrePersonR: item.tr_nameperson || item.nameperson,
        Num_Romm: item.tr_numRoom || item.numRoom,
        tipoHabitacion: item.tr_typeroom,
        fecha_Inicio: item.tr_starDate,
        fecha_fin: item.tr_dateEnd,
        letraH: item.tr_letterRoom,
        dias_fechas: item.tr_catDays,
        precioHabitacion: item.tr_costRom,
        precio_Total: item.tr_costTotal,
        reservada: item.tr_complet || item.complet === 0 ? false : true,
      };
    });
    cb(finalTodos);
  } catch (error) {
    console.log(error);
  }
};

export const getHotelByIdServerSync = async (id_rooms) => {
  let response = {};
  try {
    response = await fetch(`${URL_API}/${id_rooms}`);
    response = await response.json();
    response = response.map((item) => {
      return {
        idx: item.id_rooms,
        nombrePersonR: item.tr_nameperson || item.nameperson,
        tipoHabitacion: item.tr_typeroom,
        fecha_Inicio: item.tr_starDate,
        fecha_fin: item.tr_dateEnd,
        reservada: item.tr_complet || item.complet === 0 ? false : true,
      };
    });
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const completeHotelServer = (id_rooms) => {
  try {
    fetch(`${URL_API}/${id_rooms}`, {
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(`response`, response);
      });
  } catch (error) {
    console.log(error);
  }
};

export const updateHotelServer = (id_rooms, reservas) => {
  try {
    const HotelToUpdate = {
      nameperson: reservas.nombrePersonR,
      numRoom: reservas.Num_Romm,
      typeRoom: reservas.tipoHabitacion,
      dataStar: reservas.fecha_Inicio,
      dataEnd: reservas.fecha_fin,
    };
    fetch(`${URL_API}/${id_rooms}`, {
      method: "PUT",
      body: JSON.stringify(HotelToUpdate),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(`response`, response);
      });
  } catch (error) {
    console.log(error);
  }
};

export const deleteReservaServer = (id_rooms) => {
  try {
    fetch(`${URL_API}/${id_rooms}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(`response`, response);
      });
  } catch (error) {
    console.log(error);
  }
};

export const createTodoServer = async (todo) => {
  try {
    const todoToCreate = {
      description: todo.descripcion,
      priority: todo.prioridad,
    };
    let response = await fetch(`${URL_API}`, {
      method: "POST",
      body: JSON.stringify(todoToCreate),
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
      },
    });
    response = await response.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
