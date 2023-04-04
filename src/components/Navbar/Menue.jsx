import React from 'react'

function Menue({name}) {
  return (
    <h4 className='hover:bg-amber-400 cursor-pointer py-2'>{name}</h4>
  )
}

export default Menue