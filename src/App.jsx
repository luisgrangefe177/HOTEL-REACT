import "./App.css";
import Hotel from "./components/hotel/Hotel";

function App() {
  //Es una variable ya que es un estado mute o cambie de estado
  //hace que se renderice

  return (
    // eso sirve para no poner div donde tiene etiqueta de cierre solo puede existir uno
    <>
      <Hotel />
    </>
  );
}

export default App;
