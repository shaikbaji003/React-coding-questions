import React, { useEffect, useState } from 'react'

const Counterapp = () => {
const[value, setValue]= useState(0);

useEffect(()=>{
   if (value ===0) {
      

   } else {
   }

})

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={()=> setValue(value+1)}>increment</button>
      <button onClick={()=> setValue(value-1)}>decrement</button>
    </div>
  )
}

export default Counterapp
