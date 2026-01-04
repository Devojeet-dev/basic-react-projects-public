import { useState } from 'react'
function App() {
  const [color,setColor] = useState("purple")
  return (
    <div className='h-screen w-full flex flex-wrap  justify-center'
    style={{ background: color }}>
      <h1 className='font-bold text-xl mb-82' >Tap to change the Background color</h1>
      <div className=' flex justify-center items-center gap-40 rounded-xl bg-red-200 w-[800px] mt-5 h-10 fixed-botem ' >
        <button onClick={()=>{setColor("Pink")}} className='bg-pink-800 rounded h-8 w-12 font-bold flex items-center justify-center'>Pink</button>
        <button onClick={()=>{setColor("Blue")}} className='bg-blue-800 rounded h-8 w-12 font-bold flex items-center justify-center'>Blue</button>
        <button onClick={()=>{setColor("Red")}} className='bg-red-800 rounded h-8 w-12 font-bold flex items-center justify-center'>Red</button>
        <button onClick={()=>{setColor("White")}} className='bg-white rounded h-8 w-12 font-bold flex items-center justify-center'>White</button>
      </div>
    </div>
  )
}
export default App
