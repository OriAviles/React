
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css';


function ItemListContainer({titulo}) {
  const [productos, setProductos] = useState([])
  useEffect(()=>{
      setTimeout(
      () => fetch('products.json')
      .then(resp=>resp.json())
      .then(data=>setProductos(data)), 2000)
  }, [])
  return (
          <div className='itemlistcont'>
              <p>{titulo}</p>
              <ItemList productos={productos}/>
          </div>
          
  )
}
export default ItemListContainer;