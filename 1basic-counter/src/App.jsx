import { useState } from "react"
function App() {
  const [count,setCount] = useState(0)
  function IncreaseCount(){
    setCount(count+1)
  }
  function DescreaseCount(){
    if(count==0){
      return
    }
    setCount(count-1)
  }
  return (
    <>
     <h1>basic counter app</h1>
     <h2>counter value: {count}</h2>
     <button onClick={IncreaseCount}>Increase by one </button>
     <button onClick={DescreaseCount}>decrease by one </button>
    </>
  )
}

export default App
