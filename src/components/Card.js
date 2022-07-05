import './Card.css';
import ItemCount from './ItemCount';

function Card({producto, i}) {
  return     ( 
    <div className="card">
    <img src={producto.imagen} className="card-img-top" alt={producto.nombre}></img>
    <div className="card-body">
      <h5 className="card-title">{producto.nombre}</h5>
      <p className="text-descripcion">{producto.descripcion}</p>
      <p className="card-text">Precio ${producto.precio}</p>
       <ItemCount stock='29' initial='1' />
    </div>
  </div>
  );
}

export default Card;