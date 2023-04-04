import React from 'react'

function MenueInfo({ img, title,imgs,titles }) {
    return (
        <div className='flex justify-center p-2 items-center'>
            <div className='wraper '>
                <img className='pr-2' src={img} alt="" />
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default MenueInfo