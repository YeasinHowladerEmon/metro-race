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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Destination from './Components/Destination/Destination'

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
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
            <PrivateRoute path="/destination/:id">
              <Destination />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
