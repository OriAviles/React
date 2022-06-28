import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
     <Navbar />
     <ItemListContainer inicial="1" stock="10"/>
    </div>
  );
}

export default App;
