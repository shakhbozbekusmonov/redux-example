import { INCREMENT_NUMBER, DECREMENT_NUMBER } from "../types/counterTypes";

export function incrementNumber() {
    return {
        type: INCREMENT_NUMBER,
    };
}

export function decrementNumber() {
    return {
        type: DECREMENT_NUMBER,
    };
}
