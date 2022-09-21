import React from 'react'
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user'

export default function Login() {
    const dispatch = useDispatch()
  return (
    <div>
       <button 
            onClick={() => {
                dispatch(login({ name: "colton", age: 30, email: "col@gmail.com" }))
            }}
        >
            Login
        </button> 

        <button onClick={()=>{
            dispatch(logout())
        }}>LOGOUT</button>
    </div>
  )
}
