import React from "react";
import { Formik } from "formik";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import {
    updateState,
    saveEmployee,
    getEmployee,
    deleteEmployee,
} from "../../redux/actions/employeeAction";
import { FadeLoader } from "react-spinners";

const Employee = (props) => {
    React.useEffect(() => {
        props.getEmployee();
        props.updateState({ loading: false });
    }, []);
    return (
        <>
            {props.loading ? (
                <FadeLoader
                    color={"#00ff00"}
                    loading={props.loading}
                    size={150}
                    aria-label='Loading Spinner'
                    data-testid='loader'
                />
            ) : (
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 my-5'>
                            <button
                                className='btn btn-primary ms-auto d-block'
                                type='button'
                                onClick={() =>
                                    props.updateState({ open: true })
                                }>
                                Add
                            </button>
                        </div>
                        {props.employees.length > 0 &&
                            props.employees.map((employee) => (
                                <div className='col-4 mb-3' key={employee.id}>
                                    <div className='card'>
                                        <div className='card-header'>
                                            <h3 className='text-center'>
                                                {employee.first_name +
                                                    " " +
                                                    employee.last_name}
                                            </h3>
                                        </div>
                                        <div className='card-body'>
                                            <p className='mb-2'>
                                                Age: {employee.age}
                                            </p>
                                            <p className='mb-2'>
                                                Salary:{" "}
                                                {employee.salary
                                                    ? "$" + employee.salary
                                                    : "$0"}
                                            </p>
                                            <p className='mb-2'>
                                                Position: {employee.position}
                                            </p>
                                        </div>
                                        <div className='card-footer d-flex justify-content-between'>
                                            <button
                                                className='btn btn-primary'
                                                type='button'
                                                onClick={() =>
                                                    props.updateState({
                                                        open: true,
                                                        selectedItem: employee,
                                                    })
                                                }>
                                                Edit
                                            </button>
                                            <button
                                                className='btn btn-danger'
                                                type='button'
                                                onClick={() =>
                                                    props.updateState({
                                                        deleteModal: true,
                                                        selectedIndex:
                                                            employee.id,
                                                    })
                                                }>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            )}

            <Modal
                isOpen={props.open}
                toggle={() => props.updateState({ open: false })}>
                <ModalHeader>
                    <h2>Add Employee</h2>
                </ModalHeader>
                <Formik
                    initialValues={{
                        first_name: "",
                        last_name: "",
                        age: "",
                        salary: "",
                        position: "",
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        props.saveEmployee(values);
                    }}>
                    {({ values, handleChange, handleSubmit, isSubmitting }) => (
                        <form onSubmit={handleSubmit}>
                            <ModalBody>
                                <input
                                    className='form-control mb-3'
                                    type='text'
                                    name='first_name'
                                    onChange={handleChange}
                                    value={values.first_name}
                                    placeholder='Firstname'
                                />
                                <input
                                    className='form-control mb-3'
                                    type='text'
                                    name='last_name'
                                    onChange={handleChange}
                                    value={values.last_name}
                                    placeholder='Lastname'
                                />
                                <input
                                    className='form-control mb-3'
                                    type='number'
                                    name='age'
                                    onChange={handleChange}
                                    value={values.age}
                                    placeholder='Age'
                                />
                                <input
                                    className='form-control mb-3'
                                    type='number'
                                    name='salary'
                                    onChange={handleChange}
                                    value={values.salary}
                                    placeholder='Salary'
                                />
                                <select className='form-select' name='position'>
                                    <option>Enter your position</option>
                                    <option value='ceo'>CEO</option>
                                    <option value='product owner'>
                                        Product Owner
                                    </option>
                                    <option value='software engineer'>
                                        Software Engineer
                                    </option>
                                </select>
                            </ModalBody>
                            <ModalFooter>
                                <button
                                    className='btn btn-primary'
                                    type='submit'
                                    disabled={isSubmitting}>
                                    Save
                                </button>
                                <button
                                    className='btn btn-secondary'
                                    type='button'
                                    onClick={() =>
                                        props.updateState({ open: false })
                                    }>
                                    Cancel
                                </button>
                            </ModalFooter>
                        </form>
                    )}
                </Formik>
            </Modal>

            <Modal
                size='lg'
                isOpen={props.deleteModal}
                toggle={() => props.updateState({ deleteModal: false })}>
                <ModalHeader>
                    <h2>Rostdan ham o'chirmoqchimisiz?</h2>
                </ModalHeader>
                <ModalFooter>
                    <button
                        className='btn btn-danger'
                        type='button'
                        onClick={props.deleteEmployee}>
                        Ha
                    </button>
                    <button
                        className='btn btn-secondary'
                        type='button'
                        onClick={() =>
                            props.updateState({ deleteModal: false })
                        }>
                        Yo'q
                    </button>
                </ModalFooter>
            </Modal>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        open: state.employee.open,
        employees: state.employee.employees,
        deleteModal: state.employee.deleteModal,
        selectedIndex: state.employee.selectedIndex,
        selectedItem: state.employee.selectedItem,
        loading: state.employee.loading,
    };
};

export default connect(mapStateToProps, {
    updateState,
    saveEmployee,
    getEmployee,
    deleteEmployee,
})(Employee);
