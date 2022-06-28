import './Card.css';
import ItemCount from './ItemCount';

function Card(props) {
  return     ( 
    <div className="card">
    <img src="./assets/faceWash.jpg" className="card-img-top" alt="Face Wash"></img>
    <div className="card-body">
      <h5 className="card-title">{props.titulo}</h5>
      <p className="card-text">Precio ${props.precio}</p>
       <ItemCount stock='5' initial='1' />
    </div>
  </div>
  );
}

export default Card;