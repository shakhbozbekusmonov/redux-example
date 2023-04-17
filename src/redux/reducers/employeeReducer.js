import { UPDATE_STATE } from "../types/employeeTypes";

const initialState = {
    open: false,
    employees: [],
    deleteModal: false,
    selectedIndex: "",
    selectedItem: {},
    loading: true,
};

export const employeeReducer = (state = initialState, action) => {
    if (action.type === UPDATE_STATE) {
        return {
            ...state,
            ...action.payload,
        };
    }
    return state;
};
