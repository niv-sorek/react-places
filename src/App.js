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
}

export default App;
