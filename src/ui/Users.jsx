import React from 'react'

function Users({avatar_url,login,border}) {
  return (
    <div className={`flex items-center w-52 rounded-full  p-2 ${border}`}>
        <img className='mt-2 w-12 rounded-full p-1' src={avatar_url} alt="" />
        <div>
            <h4 className="carduser">{login}</h4>
            <p className="cardp text-xs">Successfully Getting Home</p>
        </div>
    </div>
  )
}

export default Users