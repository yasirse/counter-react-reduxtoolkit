import {  useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";
const Controls=()=>
{
    const inputElement=useRef();
    const dispatch=useDispatch();
    const handIncrement=()=>{
        dispatch(counterActions.increment());
    };
    const handDecrement=()=>{
        dispatch(counterActions.decrement());
    };
    const handleAdd=()=>{
        dispatch(counterActions.add(inputElement.current.value));
        inputElement.current.value="";
    };
    const handleSubtract=()=>{
        dispatch(counterActions.subtract(inputElement.current.value));
        inputElement.current.value="";
    };
    const handlePrivacy=()=>{
        dispatch(privacyActions.toggle());
    };
    return (
            <>
                <div className=" d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-primary" onClick={handIncrement}>+1</button>
                    <button type="button" className="btn btn-success" onClick={handDecrement}>-1</button>
                    <button type="button" className="btn btn-warning" onClick={handlePrivacy}>Privacy</button>
                </div>
                <div className=" d-grid gap-2 d-sm-flex justify-content-sm-center add-margin">
                    <input ref={inputElement} type="text" className="number-input" placeholder="Enter number" />
                    <button type="button" className="btn btn-info" onClick={handleAdd}>Add</button>
                    <button type="button" className="btn btn-success margin" onClick={handleSubtract}>Subtract</button>
                </div>
            </>
        );
    }
export default Controls;



