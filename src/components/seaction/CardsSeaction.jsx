import React from 'react'
import Users from '../../ui/Users';

function CardsSeaction({ avatar_url, login, id, events_url
}) {
    ;
    return (
        <div>
            <div className='mr-4'>
                <img className='w-80 h-80 rounded-lg' src={`https://source.unsplash.com/1600x900/?london/room${id}`} alt="" />
                <h4 className="house">{events_url
                }</h4>
            </div>
            <Users avatar_url={avatar_url} login={login} />
        </div>
    )
}

export default CardsSeaction