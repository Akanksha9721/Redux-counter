import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
     const count = useSelector((state) => state.counter.value)

  return (
    <div className='text-2xl justify-center flex-item'> I am navbar and  couter is {count}</div>
  )
}

export default Navbar