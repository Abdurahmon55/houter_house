import React from 'react'
import Button from './Button'

function Input({placeholder,img,button}) {
  return (
    <div className='border wraper rounded-full pl-8 p-1'>
        <img src={img} alt="" />
        <input type="text" placeholder={placeholder} />
        <div className='border yellow w'>
           <Button titel={button}/>  
        </div>
    </div>
  )
}

export default Input