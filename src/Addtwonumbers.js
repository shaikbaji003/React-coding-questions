import React, { useState } from 'react'

const Addtwonumbers = () => {
    const[numberone,setNumberone]=useState();
    const[numbertwo,setNumbertwo]=useState();
    const [total, setTotal]=useState();

    const handleChange=()=>{
        setTotal(numberone+numbertwo)
    }
  return (
    <>
      <input type='number'
      placeholder='Enter number'
      value={numberone} onChange={(e)=> setNumberone(+e.target.value)}/><br></br>

       <input type='number'
      placeholder='Enter number'
      value={numbertwo}  onChange={(e)=> setNumbertwo(+e.target.value)}/><br></br>


      <button onClick={handleChange }>Calculate</button>
      <h3>Total: {total}</h3>


    </>
  )
}

export default Addtwonumbers
