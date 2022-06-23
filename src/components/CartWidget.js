import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';


function CartWidget() {
  return     ( 
 <div className='CartWidget'>
   <a src='#' className='icons'>
    <FontAwesomeIcon icon={faCartShopping}/>
   </a>
</div>
 );
}

export default CartWidget;

