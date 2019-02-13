import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Results from './Results'


class ResultsContainer extends Component {
    constructor() {
        super();
    }
    
    render() {
        const { mealPlan, view, mealsEaten, price, diningDollars } = this.props;
        console.log(mealPlan);
        const results = calculateResults(view, mealsEaten, price, diningDollars);
        return (
            <Results avgPrice = {results.avgPrice}/>
        );
    }
}

const calculateResults = (view, mealsEaten, price, diningDollars) => {
    var results = {};
    results.mealsPerWeek =
        view === 'DAILY' ? 
        5 * mealsEaten.weekday + 2 * mealsEaten.weekend :
        mealsEaten.weekly;
    results.weeksPerQuarter = 11;
    results.priceNoDiningDollars = price - diningDollars;
    results.pricePerWeek = results.priceNoDiningDollars / results.weeksPerQuarter;
    results.avgPrice = results.pricePerWeek / results.mealsPerWeek;
    console.log(mealsEaten)
    return results;
}
    

ResultsContainer.propTypes = {
    mealPlan: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
    mealsEaten: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    diningDollars: PropTypes.number.isRequired,
}

const mapStateToProps = state => {
    return (
    {
    mealPlan: state.mealPlanForm.mealPlan,
    view: state.mealPlanForm.view,
    mealsEaten: state.mealPlanForm.mealsEaten,
    formSubmitted: state.mealPlanForm.submitted,
    price: state.mealPlanData[state.mealPlanForm.mealPlan].price,
    diningDollars: state.mealPlanData[state.mealPlanForm.mealPlan].diningDollars


});
};


const mapDispatchToProps = dispatch => ({

});

ResultsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultsContainer);

export default ResultsContainer;