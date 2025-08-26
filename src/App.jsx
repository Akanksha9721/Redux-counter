// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from './redux/counter/counterslice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar/>
      <div className="flex flex-col items-center justify-center mt-10 space-y-6">
        <h1 className="text-2xl font-semibold">
          Currently count is <span className="text-blue-600">{count}</span>
        </h1>

        <div className="flex space-x-4">
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-lg shadow-md transition duration-200"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>

          <button 
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-lg shadow-md transition duration-200"
            onClick={() => dispatch(increment())}
          >
            +
          </button>

          <button 
            className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-lg shadow-md transition duration-200"
            onClick={() => dispatch(multiply())}
          >
            *
          </button>
        </div>
      </div>
    </>
  )
}

export default App
