import React from 'react';
import PropTypes from 'prop-types';


const MealPlanForm = ({ mealPlan, onMealPlanSubmit }) => {
    return (
    <form>
        <select value={mealPlan} onChange={(e) => onMealPlanSubmit(e.target.value)}>
            <option value='OPEN_ACCESS'>Open Access</option>
            <option value='FLEX_330'>Flex 330</option>
            <option value='BASE_14'>Base 14</option>
            <option value='PURPLE_5050'>Purple 50/50</option>
        </select>
    </form>
    );
}

MealPlanForm.propTypes = {
    mealPlan: PropTypes.string.isRequired,
    onMealPlanSubmit: PropTypes.func.isRequired,
}

export default MealPlanForm;