import React from 'react'
import { navabr } from '../../data/data'
import logo from '../../image/logo.png'
import Button from '../../ui/Button';
import MinNabar from './MinNabar';

function Navabr() {
  return (
    <div className='m py-9 px-48 wraper'>
        <div className='log'>
            <img src={logo} alt="" />
        </div>
        <div className='wraper'>
            {navabr.map((item,index)=>(
              <MinNabar key={index}{...item} />
            ))}
            <div className='border yellow'>
         <Button titel={'Sign Up!'}/> 
        </div>
        </div>
    </div>
  )
}

export default Navabr