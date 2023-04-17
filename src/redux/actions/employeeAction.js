import { UPDATE_STATE } from "../types/employeeTypes";
import { API_PATH } from "../../utils/constants";
import axios from "axios";
import { toast } from "react-toastify";

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
    return function (dispatch, getState) {
        if (getState().employee.selectedItem.id) {
            axios
                .put(API_PATH + getState().employee.selectedItem.id, values)
                .then((res) => {
                    dispatch(updateState({ open: false, selectedItem: {} }));
                    dispatch(getEmployee());
                    toast.success("Muvaffaqiyatli o'zgartirildi!");
                })
                .catch((err) => {
                    toast.error(err.message);
                });
        } else {
            axios
                .post(API_PATH, values)
                .then((res) => {
                    dispatch(updateState({ open: false }));
                    dispatch(getEmployee());
                    toast.success("Muvaffaqiyatli saqlandi!");
                })
                .catch((err) => {
                    toast.error(err.message);
                });
        }
    };
}

export const deleteEmployee = () => (dispatch, getState) => {
    axios
        .delete(API_PATH + getState().employee.selectedIndex)
        .then((res) => {
            dispatch(getEmployee());
            dispatch(updateState({ deleteModal: false, selectedIndex: "" }));
            toast.success("Muvaffaqiyatli o'chirildi!");
        })
        .catch((err) => {
            toast.error(err.message);
        });
};
