import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import MealPlanFormContainer from '../mealPlanForm/MealPlanFormContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MealPlanFormContainer/>
      </div>
    );
  }
}

export default App;
