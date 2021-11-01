import '../src/assets/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Ayuda from './pages/Ayuda';
import Ofertas from './pages/Ofertas';
import Productos from './pages/Productos';
import ItemDetailContainer from './components/ItemDetailContainer';

function app() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path ="/Ofertas" component={Ofertas} />
          <Route exact path ="/Productos" component={Productos} />
          <Route exact path ="/Ayuda" component={Ayuda} />
          <Route exact path="/"  component={ItemDetailContainer} />
        </Switch>
        
      </Router>
    </div>
  );
} 

export default app;
