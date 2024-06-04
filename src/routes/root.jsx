import { Link, Outlet } from "react-router-dom";
import { useHotelApp } from "../context/useHotelApp";
import "./Root.css";
export default function Root() {
  const { getLoggedUser, logoutUser } = useHotelApp();
    return (
      <>
        <div id="sidebar">
        {getLoggedUser() && (
          <>
            <h1>
              {getLoggedUser().email}
              <br />
              <a onClick={logoutUser}>Cerrar sesión</a>
            </h1>
          </>
        )};
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Buscar"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">Enviar</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
              <Link to={`form`}>Resgistro reserva</Link>
              </li>
              <li>
              <Link to={`report`}>Repote reserva</Link>
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