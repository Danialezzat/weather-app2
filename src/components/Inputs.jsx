import React, { useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Inputs = ({setQuery, units, setUnits}) => {
  const [city, setCity] = useState('');



  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name
    if(units !== selectedUnit) setUnits(selectedUnit);
  }


  const handleSearchClick = () => {
    if(city !== '') setQuery({q: city})
  };

  const handleLocationClick = () => {
    if(navigator.geolocation) {
      toast.infor('fetching users location')
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success('location fetched!')
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({
          lat, lon,
        });
      });
    }
  }

  return (
    <div className='flex flew-row  justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input
             value={city}
             onChange={e => e.currentTarget.value}
             type="text" className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize' placeholder='search for city...' />
            <UilSearch
            onClick={handleSearchClick}
            size={25} className='text-white cursor-pointer transition ease-out  hover:scale-125'/>
            <UilLocationPoint
            onClick={handleLocationClick}
            size={25} className='text-white cursor-pointer transition ease-out  hover:scale-125'/>
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name='metric' className='text-xl text-white font-light hover:scale-125 transition ease-out' onClick={handleUnitsChange}>°C</button>
            <p className='text-xl text-white mx-1'>|</p>
            <button name='imperial' className='text-xl text-white font-light  hover:scale-125 transition ease-out' onClick={handleUnitsChange}>°F</button>
        </div>
    </div>
  )
}

export default Inputs