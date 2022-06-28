import Card from './Card';
import './ItemListContainer.css';


function ItemListContainer() {
  return ( 

   <div className='ItemListContainer'>
    <p>Lista de productos</p>
    <Card titulo="Face Wash" precio="350" />
    

   </div>
  );
}

export default ItemListContainer;