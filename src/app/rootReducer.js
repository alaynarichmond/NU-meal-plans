import { combineReducers } from 'redux';
import mealPlanFormReducer from '../mealPlanForm/reducer';
import mealPlanDataReducer from './mealPlanDataReducer';
import resultsReducer from '../results/reducer'


export const rootReducer = combineReducers({
    mealPlanForm: mealPlanFormReducer,
    mealPlanData: mealPlanDataReducer,
    userResults: resultsReducer
});