import React from 'react'

function SeactionBtn({name,icon}) {
  return (
    <div className='flex border p-4 mr-4 rounded-full hover:bg-lime-500'>
        <img src={icon} alt="" />
        <h4 className="li pr-3 cursor-pointer pl-4">{name}</h4>
    </div>
  )
}

export default SeactionBtn