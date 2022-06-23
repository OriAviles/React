import CartWidget from './CartWidget';
import './Navbar.css';

function Navbar() {
  return ( 
    <header className='navBar'>
    <nav>
        <img src='/assets/logo.png'></img>
        <a href="#">Inicio </a>
        <a href="#"> Productos </a>
        <a href="#">Sobre Nosotros</a>
        <CartWidget />
    
    </nav>
    </header>
  );
}

export default Navbar;