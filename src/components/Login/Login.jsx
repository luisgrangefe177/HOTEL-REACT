import { useEffect, useState } from "react";
import { authServer } from "../network/authNetwork";
import { showMessage } from "../../util";
import { useNavigate } from "react-router-dom";
import { useHotelApp } from "../../context/useHotelApp";

export const Login = () => {
  const navigate = useNavigate();
  const { loginUser, getLoggedUser } = useHotelApp();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { state, data, message } = await authServer(user, password);
    if (state) {
      //login correcto
      showMessage(
        "success",
        "bienvenido",
        `${data.user.name} ${data.user.lastName}`
      );
      loginUser(data.user, data.token);
      //obtengo la información de data
    } else {
      //login incorrecto, muestro el mensaje
      showMessage("warning", message, "");
    }
  };

  useEffect(() => {
    if (getLoggedUser()) {
      navigate("/form/");
    } else {
      setIsLoading(false);
    }
  }, [getLoggedUser, navigate]);

  if (isLoading) return "";

  return (
    <>
      <div className="container my-5">
        <div className="bg-light text-secondary p-5 rounded-3 border mx-auto w-lg-50 w-md-75 w-sm-100">
          <h1 className="display-5 fw-bold text-center">Iniciar Sesión</h1>
          <form onSubmit={handleSubmit} className="was-validated p-4">
            <div className="mb-3">
              <label htmlFor="uname" className="form-label">
                Nombre de usuario:
              </label>
              <input
                type="text"
                className="form-control"
                id="uname"
                placeholder="Ingrese nombre de usuario"
                name="uname"
                onChange={(event) => setUser(event.target.value)}
                required
              />
              <div className="valid-feedback">Correcto</div>
              <div className="invalid-feedback">El campo es requerido.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="pwd" className="form-label">
                Contraseña:
              </label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Ingrese contraseña"
                name="pswd"
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="false"
              />
              <div className="valid-feedback">Correcto</div>
              <div className="invalid-feedback">El campo es requerido.</div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn w-50 btn-outline-dark">
                Iniciar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
