<<<<<<< HEAD
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
          <Route path="/" exact>
            <Users />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
=======
import React from 'react';
import './App.css';
import GoalList from './components/GoalList'

function App() {
  const courseGoals = [
    { id: 'c1',text: 'Niv' },
    { id: 'c2',text: 'Sorek' },
    { id: 'c3',text: 'is here!' }
  ];
  return <div>
    <h2>Hello, world!</h2>
    <GoalList goals={courseGoals} />
  </div>
>>>>>>> 8beb991a729c4cb0d621d94c156c011a62819ce6
}

export default App;
