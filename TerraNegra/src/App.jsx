
import { Routes, Route } from "react-router";
import Home from './assets/Componentes/Home/Home';
import Acerca from './assets/Componentes/Acerca/Acerca';
import Productos from './assets/Componentes/Productos/Productos';
import Carrito from './assets/Componentes/Carrito/Carrito';
import BarraBusqueda from './assets/Componentes/BarraBusqueda/BarraBusqueda';
import "./App.css";

function App() {

  return (
    <>
      <BarraBusqueda />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/acerca" element={<Acerca />}></Route>
        <Route path="/productos" element={<Productos />}></Route>
        <Route path="/carrito" element={<Carrito />}></Route>
      </Routes>
    </>

  );
};

export default App;
