import React, { useState } from 'react'

const Principleintrest = () => {
    const [price, setPrice]=useState(0);
    const[time,setTime]=useState(0);
    const[rate, setRate]=useState(0);
const[cal, setCal]=useState(0)

const handleCalculate=()=>{
    const calculate= ((price*time*rate)/100)
setCal(calculate);
}

  return (
    <div>
      <div>
        Prics:<input type='number' onChange={e=> setPrice(e.target.value)}/>
      </div>
      <div>
        Time:<input type='number'onChange={e=> setTime(e.target.value)}/>
      </div>
      <div>
        RateI:<input type='number'onChange={e=> setRate(e.target.value)}/>
      </div>
      <div>
        <button onClick={handleCalculate}>Calculate Intrest</button>
      </div>
      <div>
        <h1>{cal}</h1>
      </div>
      
    </div>
  )
}

export default Principleintrest
