import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './Paginas/Inicio';
import Ayuda from './Paginas/Ayuda';
import Paises from './Paginas/Paises';
import Ciudades from './Paginas/Ciudades';


function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Switch>
         <Route path='/' exact component={Inicio}/>
         <Route path='/Ciudades' component={Ciudades}/>
         <Route path='/Paises' component={Paises}/>
         <Route path='/Ayuda' component={Ayuda}/>
       </Switch>
     </Router>



    </div>
  );
}

export default App;
