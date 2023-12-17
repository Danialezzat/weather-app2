import React from 'react'

const Forcast = () => {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>hourly forcats</p>
        </div>
        <hr className='my-2'/>

        <div className='flex flex-row items-center justify-between text-white'>
            
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                 4:4 ap
            </p>
            <img src='../../images/sunny.png' className='w-12 my-1' alt="" />
            <p className='font-medium'>22°</p>
        </div>
        </div>
    </div>
  )
}

export default Forcast