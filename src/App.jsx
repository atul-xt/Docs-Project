import React from 'react'
import Background from './components/Background'

function App() {
  function clicked() {
    alert("hello")
  }
  return (
    <div className='h-screen relative w-full  bg-[#8a8a8a]'>
      {/* <button onClick={clicked} className='z-10 absolute top-[4%] left-[85%] translate-x-[-50%] translate-y-[-50%] text-3xl text-white'>+</button> */}
      <Background />
      

    </div>
  )
}

export default App