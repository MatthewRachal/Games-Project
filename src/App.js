import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GamesNavBar from './Components/GamesNavBar';
import Dashboard from './Components/Dashboard';
import TickTackToe from './Components/TickTackToe';
import Hangman from './Components/Hangman';
import Battleship from './Components/Battleship';


function App() {
  return (
    <div className="App" style={{}}>
      <Router>
        <GamesNavBar />
        <Switch>
          <Route path='/Home' component={Dashboard} />
          <Route path="/TickTackToe" component={TickTackToe} />
          <Route path="/Hangman" component={Hangman} />
          <Route path="/Battleship" component={Battleship} />
          <Route path="/" component={Dashboard} />


        </Switch>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" rel="stylesheet"/>
      </Router>
    </div>
  );
}

export default App;
