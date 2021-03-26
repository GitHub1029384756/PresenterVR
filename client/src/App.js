import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './routes/home/home.js';
import Register from './routes/register/register.js';
import Login from './routes/login/login.js';

function App() {
  AOS.init({duration : 2000});
  return (
    <>
    <Router>
      <Switch>
        <Route exact path = "/"><Home></Home></Route>
        <Route path = "/register"><Register></Register></Route>
        <Route path = "/login"><Login></Login></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
