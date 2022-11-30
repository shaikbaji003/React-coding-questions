import React, { useState } from 'react'

const Showhide = () => {
const [show, setShow]=useState(true);

  return (
    <>

    <button onClick={()=> setShow(!show)}>Click</button>
    {show && <dv>
        <h2>order sucessfull</h2>
        </dv>}
    </>
  )
}

export default Showhide
