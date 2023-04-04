import React from 'react'
import Input from '../../ui/Input'
import vector from '../../image/Vector.png'
import { travelNam } from '../../data/data'
import Travel from './Travel'
import Users from '../../ui/Users'
import { useFetchPostsQuery } from '../../data/taskApi'
function Header() {
  const {data, isSuccess} = useFetchPostsQuery()
  return (
    <div className='flex items-end justify-between'>
       <div className='py-9 px-48 w-4/6'>
        <div className=''>
            <h1>Good Living Better live your dreams easily here</h1>
            <p className="h1p mt-6">Everything you need about finding your place to live will be here, where it will be easier for you. Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
            <div className='mt-12 '>
              <Input placeholder={'Search for the location you want!'} img={vector} button='Search'/>
            </div>
            <h2 className="travel mt-20">Our Partnership </h2>
            <div className='wraper'>
              {travelNam.map((item,index)=>(
                <Travel key={index}{...item}/>
              ))}
            </div>
        </div>
    </div> 
    <div className="headerUsers mb-8 ">
      <dir className='flex gap-2 '>
        {isSuccess && data.slice(0,2).map((item)=>(
          <Users key={item.id}{...item} border='border'/>
        ))}
      </dir>
    </div>
    </div>
  )
}

export default Header