import React from "react";
import {
    incrementNumber,
    decrementNumber,
} from "../../redux/actions/counterAction";
import { connect } from "react-redux";

const Counter = (props) => {
    // console.log(props);
    return (
        <>
            <div className='container'>
                <div className='row w-100 vh-100 d-flex justify-content-center align-items-center'>
                    <div className='col-4'>
                        <div className='card'>
                            <div className='card-header'>
                                <h2 className='text-center'>Counter</h2>
                            </div>
                            <div className='card-body'>
                                <h1 className='text-center'>{props.number}</h1>
                            </div>
                            <div className='card-footer d-flex justify-content-between'>
                                <button
                                    className='btn btn-primary'
                                    type='button'
                                    onClick={props.incrementNumber}>
                                    +
                                </button>
                                <button
                                    className='btn btn-danger'
                                    type='button'
                                    onClick={props.decrementNumber}>
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        number: state.counter.number,
    };
};

export default connect(mapStateToProps, { incrementNumber, decrementNumber })(
    Counter
);
