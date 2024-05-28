import { getToken } from "../../util";

const URL_API = "http://localhost:3000/todoSimple";
const URL_ALL_API = "http://localhost:3000/todos";

export const getTodosServer = (cb) => {
  try {
    fetch(URL_API)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const finalTodos = response.map((item) => {
          return {
            id: item.ts_id,
            descripcion: item.ts_description,
            prioridad: item.ts_priority,
            completada: item.ts_completed === 0 ? false : true,
          };
        });
        cb(finalTodos);
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

export const getTodosServerSync = async (cb) => {
  try {
    let response = await fetch(URL_API);
    response = await response.json();
    const finalTodos = response.map((item) => {
      return {
        id: item.ts_id,
        descripcion: item.ts_description,
        prioridad: item.ts_priority,
        completada: item.ts_completed === 0 ? false : true,
      };
    });
    cb(finalTodos);
  } catch (error) {
    console.log(error);
  }
};

export const getTodoByIdServerSync = async (id) => {
  let response = {};
  try {
    response = await fetch(`${URL_API}/${id}`);
    response = await response.json();
    response = response.map((item) => {
      return {
        id: item.ts_id,
        descripcion: item.ts_description,
        prioridad: item.ts_priority,
        completada: item.ts_completed === 0 ? false : true,
      };
    });
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const completeTodoServer = (id) => {
  try {
    fetch(`${URL_API}/${id}`, {
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

export const updateTodoServer = (id, todo) => {
  try {
    const todoToUpdate = {
      description: todo.descripcion,
      priority: todo.prioridad,
      completed: todo.completada,
    };
    fetch(`${URL_API}/${id}`, {
      method: "PUT",
      body: JSON.stringify(todoToUpdate),
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

export const deleteTodoServer = (id) => {
  try {
    fetch(`${URL_API}/${id}`, {
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
