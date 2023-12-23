import {Link} from 'react-router-dom'



const BarraBusqueda = () => {
  return (
    <>
      <nav>
        <div className="navBar">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/productos">
            <button>Productos</button>
          </Link>
          <Link to="">
            <button>Buscar</button>
          </Link>
          <Link to="/acerca">
            <button>Acerca</button>
          </Link>
          <Link to="/carrito">
            <button>Carrito</button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default BarraBusqueda;