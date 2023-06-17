import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { salaryInc } from './component/Action/ProfileAction'
export default function Profile() {

    let profileData=useSelector(store=>store.profile)
    console.log(profileData)
    let dispatch=useDispatch()
  return (
    <>
   <div>{profileData.name}</div>
   <div>{profileData.age}</div>
   <div>{profileData.salary}</div>
   <button onClick={()=>dispatch(salaryInc())}>Increament Salary</button>

    </>
  )
}


// redux
// 1. action define return type
//2.reduce =>action type ke according updates
//3.register new reduce in conmbine reducer file
//4.create store pass combine reducer and redux devtool extension
//5.root file access store by provide method

//main file     useSelector =>select data from store / combine reducer   //useDispatch 
// onclick  dispatch(action function called)