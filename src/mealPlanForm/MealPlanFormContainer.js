import { connect } from 'react-redux';
import MealPlanForm from './MealPlanForm'

const mapStateToProps = state => ({
    mealPlan: state.mealPlanForm.mealPlan
});

const mapDispatchToProps = dispatch => ({
    onMealPlanSubmit: (plan) => {
        dispatch({ type: 'SET_MEAL_PLAN', text: plan});
    }
});

const MealPlanFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MealPlanForm);

export default MealPlanFormContainer;