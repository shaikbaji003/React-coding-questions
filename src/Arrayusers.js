import React from 'react'


const users=[
    {name:'baji' ,id:1},
    {name:'hari', id:2},
    {name:'sai', id:3},
  ]

  const output=users.map((user)=> <li key={user.id}>
    {user.name}
  </li>)


const Arrayusers = () => {
  return (
    <div>
      <h2><ul>{output}</ul></h2>
    </div>
  )
}

export default Arrayusers
