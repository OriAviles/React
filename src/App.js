import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Body from './components/Body';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
     <Navbar />
     <ItemListContainer/>
     <Body />
    </div>
  );
}

export default App;
