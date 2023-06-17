import React, { useState } from 'react'
import Comp2 from './Comp2'

export default function Comp1() {
    const [data, setData] = useState("hello")
    return (
        <>
            <div>Comp1</div>
            <Comp2 data={data} />
        </>
    )
}





// redux


//store :  data register 

//use  :: cook    Action.js
//how to use :: cooking  process   Reducer.js


