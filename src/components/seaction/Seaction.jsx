import React from 'react'
import { card, info, navabr} from '../../data/data'
import Info from '../../ui/Info'
import SeactionBtn from './SeactionBtn';
import vector from '../../image/Vector (4).png'
import vector2 from '../../image/Vector (5).png'
import CardsSeaction from './CardsSeaction';
import { useFetchPostsQuery } from '../../data/taskApi';
import InfoLeft from './InfoLeft';
import InfoRight from './InfoRight';
import MenueInfo from './MenueInfo';


function Seaction() {
  const { data, isSuccess } = useFetchPostsQuery()
  return (
    <div className=''>
      <div className='py-9 px-48 flex justify-between'>
        <div>
          <Info gold='Our Recommendation' h2='Featured House' />
        </div>
        <div className='wraper'>
          {navabr[0].Property.map((item, index) => (
            <SeactionBtn key={index}{...item} />
          ))}
          <div className='wraper'>
            <div className='border p-4 w-14 mr-2 rounded-full bg-slate-200 btnbg'>
              <img src={vector} alt="" />
            </div>
            <div className='border p-4 w-14 rounded-full btnbg  bg-slate-200'>
              <img src={vector2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='wraper'>
        {isSuccess && data.slice(0, 5).map((item) => (
          <CardsSeaction key={item.id}{...item} />
        ))}
      </div>
      <div className='py-9 px-48'>
        <div className='wraper mt-48'>
          <div className='w-1/3 h-[420px] flex flex-col justify-between'>
            <div>
              <Info gold='Benefit' h2='Benefit You Get When Using Our Services' />
            </div>
            <div>
              <InfoLeft number='600+' p='Home Furniture throughout Indonesia' />
            </div>
            <div>
              <InfoLeft number='135+' p='Staff ready to help you' />
            </div>
          </div>
          <div className='bg-[#F6FAFA] rounded-md' >
            <div className=' h-[420px] flex flex-col justify-between p-14'>
              {card.map((item, index) => (
                <InfoRight key={index}{...item} />
              ))}
            </div>
          </div>
        </div>
        <div className='mt-48 wraper'>
          <div className='w-1/2 mr-12'>
            <Info gold='Ready to Sell!' h2='et’s tour and see our house!' p='Houses recommended by our partners that have been curated to become the home of your dreams!' />
            <h2 className='font-bold  text-sm text-[
#1B1C57] mt-4'>House Detail</h2>
            <div className='flex justify-start mt-5'>
              <div>
                {info.slice(0,2).map((item,index)=>(
                <MenueInfo key={index}{...item}/>
              ))}
              </div>
              <div>
                {info.slice(2,4).map((item,index)=>(
                <MenueInfo key={index}{...item}/>
              ))}
              </div>
              
            </div>
          </div> 
          <div className='w-1/2 border-4 red relative   nrounded-lg'>
            <img className='p-8 rounded-md green' src="https://source.unsplash.com/1600x900/?room/house" alt="" />
            </div>   
        </div>
      </div>
      <div>
        <div className='text-center mt-32'>
         <Info gold='See tips and trick from our partnership' h2='Find out more about selling and buying homes'/> 
        </div>
      </div>
    </div>
  )
}

export default Seaction