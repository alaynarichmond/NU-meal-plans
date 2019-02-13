const mealPlanData = {
    OPEN_ACCESS: {
        price: 2176,
        diningDollars: 125
    },
    FLEX_330: {
        price: 2004,
        diningDollars: 275
    },
    BASE_14: {
        price: 2142,
        diningDollars: 225
    },
    PURPLE_5050: {
        price: 596,
        diningDollars: 50
    }
}

const mealPlanDataReducer = (state = mealPlanData, action) => state;
export default mealPlanDataReducer;