import { UPDATE_STATE } from "../types/employeeTypes";
import { API_PATH } from "../../utils/constants";
import axios from "axios";

export function updateState(data) {
    return {
        type: UPDATE_STATE,
        payload: data,
    };
}

export const getEmployee = () => (dispatch) => {
    axios.get(API_PATH).then((res) => {
        dispatch(updateState({ employees: res.data }));
    });
};

export function saveEmployee(values) {
    return function (dispatch) {
        axios.post(API_PATH, values).then((res) => {
            dispatch(updateState({ open: false }));
            dispatch(getEmployee());
        });
    };
}

export const deleteEmployee = () => (dispatch, getState) => {
    axios.delete(API_PATH + getState().employee.selectedIndex).then((res) => {
        dispatch(getEmployee());
        dispatch(updateState({ deleteModal: false, selectedIndex: "" }));
    });
};
