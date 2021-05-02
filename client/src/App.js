import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './routes/home/home.js';
import Register from './routes/register/register.js';
import Login from './routes/login/login.js';
import Support from './routes/support/support.js';
import Create from './routes/create/create.js';
import Join from './routes/join/join.js';
import Error from './routes/error/error.js';

function App() {
  AOS.init({duration : 1500});
  return (
    <>
    <Router>
      <Switch>
        <Route exact path = "/"><Home></Home></Route>
        <Route path = "/register"><Register></Register></Route>
        <Route path = "/login"><Login></Login></Route>
        <Route path = "/support"><Support></Support></Route>
        <Route path = "/create"><Create></Create></Route>
        <Route path = "/join"><Join></Join></Route>
        <Route component = {Error}></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
