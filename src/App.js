import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from './places/pages/UserPlaces'
import UpdatePlace from "./places/pages/UpdatePlace";
function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/:userId/places">
            <UserPlaces/>
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Route path="/places/:placeId" >
            <UpdatePlace />
          </Route>
          <Route path="/" exact>
            <Users />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
