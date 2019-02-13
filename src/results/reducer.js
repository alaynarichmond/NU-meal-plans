const reducer = (state = {}, action) => {
    switch(action.type) {
        case 'STORE_RESULTS':
            return {
                ...state,
                mealsPerWeek: action.mealsPerWeek,
                avgPrice: action.avgPrice
            }
        default:
            return state;
    }
}

export default reducer;