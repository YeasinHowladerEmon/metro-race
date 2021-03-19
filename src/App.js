import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Tickets from './Components/Tickiets/Tickets';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    isSignedIn:"false",
    name:'',
    email:'',
    photo:'',
    password:'',
    conform :'',
    error:'',
    success: false
  })

  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Router path="/tickets">
              <Tickets />
            </Router>
            <Router exact path="/">
              <Home />
            </Router>
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
