import React from 'react'
import logo from '../../image/logo.png'
import Input from '../../ui/Input'
import vetor10 from '../../image/Vector (10).png'
import { navabr } from '../../data/data'
import RightFooter from './RightFooter'
function Footer() {
    console.log(navabr);
  return (
    <div className='m py-9 px-12 wraper mt-24'>
        <div className="lefInfo">
        <div className='log w-1/2'>
            <img src={logo} alt="" />
            <p className='mt-3'>We provide information about properties such as houses, villas and apartments to help people find their dream home</p>
            <p className='mt-8'>Subscribe to our newsletter!</p>
            <div className='mt-5'>
                <Input placeholder={'Search for the location you want!'} img={vetor10} button='Subsribe'/>  
            </div>
          <div className='mt-12 flex'>
            <h4 className='mr-12'>Terms & Conditions</h4>
            <h4>Privacy Policy</h4>
          </div>
        </div>
        </div>
        <div className='rightInfo  w-1/2 flex justify-between'>
            {navabr.map((item)=>(
                <RightFooter key={item.id}{...item}/>
            ))}
        </div>
    </div>
  )
}

export default Footer