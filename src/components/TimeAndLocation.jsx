import React from 'react'
import { formatToLocalTime } from '../services/weatherservice'

const TimeAndLocation = () => {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
              time and the loctaion of the city
            </p>
        </div>
        
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>berlin ,DE</p>
        </div>
    </div>
  )
}

export default TimeAndLocation