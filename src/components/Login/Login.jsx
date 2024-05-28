import { useEffect, useState } from "react";
import { authServer } from "../network/authNetwork";
import { showMessage } from "../../util";
import { useTodoApp } from "../../context/useTodoApp";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { loginUser, getLoggedUser } = useTodoApp();
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
    <form onSubmit={handleSubmit} className="was-validated">
      <div className="mb-3 mt-3">
        <label htmlFor="uname" className="form-label">
          Username:
        </label>
        <input
          type="text"
          className="form-control"
          id="uname"
          placeholder="Enter username"
          name="uname"
          onChange={(event) => setUser(event.target.value)}
          required
        />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="pwd" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="pwd"
          placeholder="Enter password"
          name="pswd"
          onChange={(event) => setPassword(event.target.value)}
          required
          autoComplete="false"
        />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
