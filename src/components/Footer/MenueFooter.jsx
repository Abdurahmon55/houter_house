import React from 'react'

function MenueFooter({ name, tell, email, icon3, icon4 }) {
    return (
        <div className='my-4 cursor-pointer relative'>
            <p className=' hover:bg-orange-200 px-2 rounded-lg'>{name}</p>
            <p className='my-5  hover:bg'>{tell}</p>
            <p>{email}</p>
            <div className='wraper w-1/3 absolute top-52'>
                <img src={icon3} alt="" />
                <img src={icon4} alt="" />
            </div>
        </div>
    )
}

export default MenueFooter