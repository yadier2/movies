import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { firebase } from "../firebase/firebase-config";
import { login } from "../actions/Auth";
import { useDispatch } from "react-redux";


import PublicRouter from "./PublicRouter";
import PriveteRouter from "./PrivateRouter";
import { InfinityScroll } from "../componets/InfinityScroll";
import {Navbar} from '../componets/Navbar'
import { Landing } from "../componets/home/Landing";
import { Movie } from "../componets/home/Movie";
import {Admin} from '../componets/Admin'
import Login from '../componets/Login'
const AppRoute = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
    
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.photoURL));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]);

  return (
    
    <Router>
        <div>
      <Navbar  isLoggedIn={isLoggedIn}/>
      <Switch>
        <Route exact path="/" component={InfinityScroll} />
        <PublicRouter
          exact
          path="/login"
          component={Login}
          isAuthenticated={isLoggedIn}
        />
      
      <Route exact path="/search" component={Landing}/>
      <Route exact path="/movie/:id" component={Movie}/>
    
        <PriveteRouter
          exact
          path="/admin"
          isAuthenticated={isLoggedIn}
          component={Admin}
        />

         <Redirect to="/" /> 
      </Switch>
     
      </div>

    </Router>

  );
};

export default AppRoute;
