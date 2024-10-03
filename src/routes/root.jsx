import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useHotelApp } from "../context/useHotelApp";
import "./Root.css";
import Dream from "../assets/dream.svg";
import Table from "../assets/table.svg";
import Planet from "../assets/planet.svg";
import Car from "../assets/car.svg";
import globo from "../assets/atraccion.svg";
import Newuser from "../assets/Newuser.svg";
import User from "../assets/user.svg";

export default function Root() {
  const { getLoggedUser, logoutUser } = useHotelApp();
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {/* Botón para alternar la visibilidad del sidebar */}

      <div id="sidebar" className={isSidebarVisible ? "show" : ""}>
        <button id="toggle-sidebar" onClick={toggleSidebar}>
          {isSidebarVisible ? "Cerrar" : "Abrir"} Sidebar
        </button>
        {getLoggedUser() && (
          <>
            <h1>
              {getLoggedUser().email}
              <br />
              <a onClick={logoutUser}>Cerrar sesión</a>
            </h1>
          </>
        )}
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Buscar"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
        </div>
        <nav>
          <ul>
            <li className="d-felx">
              <Link to={`form`}>
                <img src={Dream} alt="Alojamiento" />
                Alojamiento
              </Link>
            </li>
            <li>
              <Link to={`report`}>
                <img src={Table} alt="Reporte" />
                Reporte reserva
              </Link>
            </li>
            <li>
              <Link>
                {" "}
                <img src={Planet} alt="avion" />
                Vuelos
              </Link>
            </li>
            <li>
              <Link>
                <img src={Car} alt="carro" />
                Alquiler de vehículos
              </Link>
            </li>
            <li>
              <Link>
                <img src={globo} alt="turismo" />
                Atracciones Turisticas
              </Link>
            </li>
            <li>
              <Link>
                <img src={Newuser} alt="usuario con lapiz" />
                Crear nuevo usuario
              </Link>
            </li>
            <li>
              <Link>
                <img src={User} alt="usuario " />
                Iniciar sesión
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
