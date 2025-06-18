import React, { useEffect } from 'react'
import { asyncgetusers } from './store/userAction'
import { useDispatch, useSelector } from "react-redux";



const App = () => {

  const data = useSelector((state) => {state});
  const dispatch = useDispatch();
  console.log(data);
  

  useEffect(() => {
    dispatch(asyncgetusers());
  }, [])
  
  return (
    <div className='w-screen h-screen bg-gray-900 text-9xl text-amber-100'>App</div>
  )
}

export default App