import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
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