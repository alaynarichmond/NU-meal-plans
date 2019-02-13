import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Results from './Results'


class ResultsContainer extends Component {

    render() {
        const { mealPlan, view, mealsEaten, price, diningDollars } = this.props;
        const results = calculateResults(view, mealsEaten, price, diningDollars);
        return (
            <Results avgPrice = {results.avgPrice}/>
        );
    }
}

const calculateResults = (view, mealsEaten, price, diningDollars) => {
    let results = {};
    results.mealsPerWeek =
        view === 'DAILY' ? 
        5 * mealsEaten.weekday + 2 * mealsEaten.weekend :
        mealsEaten.weekly;
    results.weeksPerQuarter = 11;
    results.priceMinusDD = price - diningDollars;
    results.weeklyPrice= results.priceMinusDD / results.weeksPerQuarter;
    results.avgPrice = results.weeklyPrice / results.mealsPerWeek;
    return results;
} 

ResultsContainer.propTypes = {
    mealPlan: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
    mealsEaten: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    diningDollars: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
    mealPlan: state.mealPlanForm.mealPlan,
    view: state.mealPlanForm.view,
    mealsEaten: state.mealPlanForm.mealsEaten,
    price: state.mealPlanData[state.mealPlanForm.mealPlan].price,
    diningDollars: state.mealPlanData[state.mealPlanForm.mealPlan].diningDollars
});


const mapDispatchToProps = dispatch => ({

});

ResultsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultsContainer);

export default ResultsContainer;