import React, { useEffect, useState } from 'react'

const Apidata = () => {

    const [content, setContent]= useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(json => setContent(json))

    },[])

  return (
    <>
   {content.map(items=> <li key={items.id}>email:{items.email}&nbsp;
   
   name:{items.name}
   </li>)}
    </>
  )
}

export default Apidata
