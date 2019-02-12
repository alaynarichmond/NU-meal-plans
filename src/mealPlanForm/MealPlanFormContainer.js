import { connect } from 'react-redux';
import MealPlanForm from './MealPlanForm'
import { setMealPlan,
    setView,
    submitForm,
    setWeekdayMeals,
    setWeekendMeals,
    setWeeklyMeals
} from './mealPlanFormActions';

const mapStateToProps = state => ({
    mealPlan: state.mealPlanForm.mealPlan,
    view: state.mealPlanForm.view
});

const mapDispatchToProps = dispatch => ({
    onMealPlanSelect: (plan) => dispatch(setMealPlan(plan)),
    onViewChange: (view) => dispatch(setView(view)),
    onSubmit: () => dispatch(submitForm()),
    onWeekdayChange: (number) => dispatch(setWeekdayMeals(number)),
    onWeekendChange: (number) => dispatch(setWeekendMeals(number)),
    onWeeklyChange: (number) => dispatch(setWeeklyMeals(number))
});

const MealPlanFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MealPlanForm);

export default MealPlanFormContainer;