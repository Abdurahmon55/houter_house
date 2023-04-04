import React from 'react'

function Info({gold,h2,p}) {
  return (
    <div>
        <div className='b relative'>
              <h4 className="gold font-medium text-sm">{gold}</h4>
        </div>
      
        <h2 className='text-2xl font-semibold'>{h2}</h2>
        <p className="mt-4">{p}</p>
    </div>
  )
}

export default Info