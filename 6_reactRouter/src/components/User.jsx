import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const { userId } = useParams()
  return (
    <div className='bg-gray-500 w-screen h-8 font-bold text-xl flex justify-center content-center' >User : {Number.isInteger(Number(userId)) ? userId : "not a user"}</div>
  )
}

export default User


// now based on your userId you can make db calls and so many things just give time to your brain . 😁