import React, { useState } from 'react'

const Databinding = () => {
    const[data, setData]=useState('');
  return (
    <div>
      <input type='text'
      placeholder='Enter text'
      value={data}
      onChange={(e)=> setData(e.target.value)}
      ></input>
      <button disabled={data.length < 1}>Submit</button>
      <p>{data}</p>

    </div>
  )
}

export default Databinding
