import React from 'react'

function InfoRight({img,h1,p}) {
  return (
    <div className='flex items-start'>
        <img className='mr-4' src={img} alt="" />
        <div>
            <h2 className='font-bold text-2xl'>{h1}</h2>
            <p className='text-sm text-[#B1B6CA] w-3/5 font-medium mt-2'>{p}</p>
        </div>
    </div>
  )
}

export default InfoRight