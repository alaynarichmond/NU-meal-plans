
const initialState = {
    mealPlan: 'OPEN_ACCESS',
    view: 'DAILY',
    submitted: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_MEAL_PLAN':
            return {
                ...state,
                mealPlan: action.text
            }
        case 'SET_VIEW':
            return {
                ...state,
                view: action.text,
            }
        case 'SET_WEEKDAY_MEALS':
            return {
                ...state,
                mealsEaten: {
                    ...state.mealsEaten,
                    weekday: action.text
                }
            }
        case 'SET_WEEKEND_MEALS':
            return {
                ...state,
                mealsEaten: {
                    ...state.mealsEaten,
                    weekend: action.text
                }
            }
        case 'SET_WEEKLY_MEALS':
            return {
                ...state,
                mealsEaten: {
                    ...state.mealsEaten,
                    weekly: action.text
                }
            }
        case 'SUBMIT_FORM':
            return {
                ...state,
                submitted: true
            }
        default:
            return state;
    }
}

export default reducer;