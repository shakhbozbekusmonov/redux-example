import { DECREMENT_NUMBER, INCREMENT_NUMBER } from "../types/counterTypes";

const initialState = {
    number: 0,
};

export const counterReducer = (state = initialState, action) => {
    if (action.type === INCREMENT_NUMBER) {
        return {
            ...state,
            number: state.number + 1,
        };
    }
    if (action.type === DECREMENT_NUMBER) {
        return {
            ...state,
            number: state.number - 1,
        };
    }
    return state;
};
