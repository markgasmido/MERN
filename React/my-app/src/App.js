import { BrowserRouter as Router,Route, Switch } from "react-router-dom"
import Contact from "./Exercises/09-Routing/Contact";
import Error from "./Exercises/09-Routing/Error";
import error from "./Exercises/09-Routing/Error";
import Home from "./Exercises/09-Routing/Home";
import Users from "./Exercises/09-Routing/Users";
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <>
    <Router>
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/users/:id">
              <Users/>
          </Route>
          <Route path="/contact">
              <Contact/>
          </Route>
          <Route>
            <Error/>
          </Route>
        </Switch>
    </Router>
    </>
  )
}

export default App;
