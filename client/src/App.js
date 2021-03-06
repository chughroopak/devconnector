import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";
import AddExperience from "./components/add-credentials/AddExperience";
import AddEducation from "./components/add-credentials/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import NotFound from "./components/not-found/NotFound";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";

import "./AppNew.css";

//check for token
if (localStorage.getItem("jwtToken")) {
  //set auth token header auth
  setAuthToken(localStorage.getItem("jwtToken"));
  //decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //logout user
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfile());
    //Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path='/' component={Landing}></Route>
            <div className='container'>
              <Route exact path='/register' component={Register}></Route>
              <Route exact path='/login' component={Login}></Route>
              <Route exact path='/profiles' component={Profiles}></Route>
              <Route exact path='/profile/:handle' component={Profile}></Route>
              <Route exact path='/not-found' component={NotFound}></Route>
              <Switch>
                <PrivateRoute
                  exact
                  path='/dashboard'
                  component={Dashboard}></PrivateRoute>
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path='/create-profile'
                  component={CreateProfile}></PrivateRoute>
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path='/edit-profile'
                  component={EditProfile}></PrivateRoute>
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path='/add-experience'
                  component={AddExperience}></PrivateRoute>
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path='/add-education'
                  component={AddEducation}></PrivateRoute>
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path='/feed'
                  component={Posts}></PrivateRoute>
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path='/post/:id'
                  component={Post}></PrivateRoute>
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
