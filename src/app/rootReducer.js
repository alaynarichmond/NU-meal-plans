import { combineReducers } from 'redux';
import mealPlanFormReducer from '../mealPlanForm/mealPlanFormReducer';

export const rootReducer = combineReducers({
    mealPlanForm: mealPlanFormReducer
});