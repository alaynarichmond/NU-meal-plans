import { combineReducers } from 'redux';
import mealPlanFormReducer from '../mealPlanForm/reducer';

export const rootReducer = combineReducers({
    mealPlanForm: mealPlanFormReducer
});