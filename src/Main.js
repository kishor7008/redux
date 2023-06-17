import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IncFunc, DecFunc } from './component/Action/CounterAction'
export const data="Kishor"
export default function Main() {
    const count = useSelector(state => state.counter)
    let dispatch = useDispatch()
    console.log(count)
    return (
        <>
            <div>{count}</div>
            <button onClick={() => dispatch(IncFunc(5))}>Increament</button>
            <button onClick={() => dispatch(IncFunc(10))}>Increament</button>
            <button onClick={() => dispatch(DecFunc())}>Decreament</button>


        </>
    )
}
//redux ==> state manegment
//store ==>register state variable

// comp A                           comp B




// increase decrase  multiply divide   10
//action file  increase decrase  multiply divide
//reduce file    10+     5-       8*       4/
//redux       store  /state variables   A    /state variables   B








//state variables               //state variable 




















//action -  type or payload
//reducer  - type or initial value  //
//combine reduce  // combine all reducers
//store   //combine or devtool link5
