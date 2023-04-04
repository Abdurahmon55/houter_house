import React, { useState } from 'react'
import dawn from '../../image/Vector (9).png'
import Menue from './Menue'
function MinNabar({ name,Property }) {
    const [show, setShow]=useState(true)
    return (
        <div className='border mx-6 px-4 py-2 opacity-40 bg-lime-500 wraper rounded-full '>
            <h4 onClick={()=>setShow(!show)} className="li pr-3 cursor-pointer">{name}</h4>
            <img className='cursor-pointer' src={dawn} alt="" />
            <div className={show ? 'hidden relative' : null}>
                  <div className='flex flex-col absolute border w-36 bg-white '>
             {Property.map((item,index)=>(
                <Menue key={index}{...item}/>
            ))}   
            </div>  
            </div>
        
            
        </div>
    )
}

export default MinNabar