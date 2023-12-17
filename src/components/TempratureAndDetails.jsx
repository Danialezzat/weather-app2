import React from 'react';
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset } from "@iconscout/react-unicons";




const TempratureAndDetails = () => {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p>cloudy</p>
        </div>

        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img src='../../images/sunny.png' className='w-20' alt="" />
            <p className='text-5xl'>22</p>
            <div className='flex flex-col space-y-2'>


                <div className='flex font-light text-sm items-centerjc'>
                    <UilTemperature size={18} className='mr-1 '/>
                    Real feel:
                    <span className='font-medium ml-1'>22°</span>
                </div>
                <div className='flex font-light text-sm items-centerjc'>
                    <UilTear size={18} className='mr-1 '/>
                    Humidity:
                    <span className='font-medium ml-1'>70%</span>
                </div>
                <div className='flex font-light text-sm items-centerjc'>
                    <UilWind size={18} className='mr-1 '/>
                    Wind:
                    <span className='font-medium ml-1'>10 km/h</span>
                </div>


            </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun />
            <p className='font-light'>Rise: <span className='font-medium ml-1'>22:34</span></p>
            <p className='font-light'></p>

            <UilSunset />
            <p className='font-light'>Set: <span className='font-medium ml-1'>10:00 pm</span></p>
            <p className='font-light'></p>

            <UilSun />
            <p className='font-light'>High: <span className='font-medium ml-1'>30°</span></p>
            <p className='font-light'></p>

            <UilSun />
            <p className='font-light'>Low: <span className='font-medium ml-1'>2°</span></p>
        </div>
    </div>
  )
}

export default TempratureAndDetails;