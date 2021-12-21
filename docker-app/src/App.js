import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Prodocks from './components/Prodocks';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/about">
          <About />
        </Route>
        <Route path = "/prodocks">
          <Prodocks />
        </Route>
      </Switch>

    </BrowserRouter>



  );
}

export default App;
