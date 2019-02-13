import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import MealPlanFormContainer from '../mealPlanForm/MealPlanFormContainer';
import ResultsContainer from '../results/ResultsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MealPlanFormContainer/>
        <ResultsContainer/>
      </div>
    );
  }
}

export default App;
