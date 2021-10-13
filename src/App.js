import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Ayuda from './Paginas/ayuda';
import Ofertas from './Paginas/ofertas';
import Productos from './Paginas/productos';
import CartWidget from './Components/cartWidget';
import ItemListContainer from './Components/itemListContainer';
import itemCount from './Components/itemCount';



function app() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <hr />
       <itemCount/>
       <hr />
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

export default app;
