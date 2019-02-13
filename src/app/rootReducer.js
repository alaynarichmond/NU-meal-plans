import { combineReducers } from 'redux';
import mealPlanFormReducer from '../mealPlanForm/mealPlanFormReducer';
import mealPlanDataReducer from './mealPlanDataReducer';


export const rootReducer = combineReducers({
    mealPlanForm: mealPlanFormReducer,
    mealPlanData: mealPlanDataReducer
});