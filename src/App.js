import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Ayuda from './Paginas/Ayuda';
import Ofertas from './Paginas/Ofertas';
import Productos from './Paginas/Productos';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Switch>
         <Route path='/' exact component={ItemListContainer}/>
         <Route path='/Ofertas' component={Ofertas}/>
         <Route path='/Productos' component={Productos}/>
         <Route path='/Ayuda' component={Ayuda}/>
       </Switch>
       
     </Router>



    </div>
  );
}

export default App;
