import Card from './Card';
import './ItemList.css';

function ItemlList({productos}) {

    return (
        <div>
            
                {productos && productos.map((producto, i) => (
                        <Card key={i} producto={producto} i={i}/>
                ))}
            
        </div>
          );
}

export default ItemlList;