import React from 'react'
import MenueFooter from './MenueFooter'

function RightFooter({name,Property}) {
  return (
    <div >
        <h2>{name}</h2>
        <div>
            {Property.map((item,index)=>(
                <MenueFooter key={index}{...item}/>
            ))}
        </div>
    </div>
  )
}

export default RightFooter