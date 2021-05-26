import GetAll from './Components/GetAll';
import Search from './Components/Search';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import DeleteSearch from './Components/DeleteSearch';


function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/getAll">
          <GetAll/>
        </Route>
        <Route path="/getOne">
          <Search/>
        </Route>
        <Route path="/remove">
          <DeleteSearch/>
        </Route>
      </Switch>
    </Router>
  ); 
}

export default App;
