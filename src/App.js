import React, { useEffect, useState } from 'react';
import Cards from './Pages/Cards/Cards';
import { FaHourglassStart } from 'react-icons/fa';

const App = () => {
  const [houses, setHouses] = useState([]);
  const [filterdHouses, setFilterdHouses] = useState([]);
  const [number, setnumber] = useState(3);
  const [numberOfCity, setNumberOfCity] = useState(4);
  const [filteredId, setfilteredId] = useState('');
  console.log()

  useEffect(() => {
    fetch("RentHouseData.json")
      .then(res => res.json())
      .then(data => setHouses(data))
  }, [])
  const threeHousesData = houses.slice(0, number)
  const FourHousesDataForCity = houses.slice(0, numberOfCity)
  const showMoreHandler = () => {
    setnumber(number + 3)
  }
  const viewAllCityHandler = () => {
    setNumberOfCity(10)
  }
  const findHomeWithCity =(city,id)=>{
    const filteredData = houses.filter(h=>{
      if(h.city==city){
        return h
      }

    })

    const filteredId =houses.find(h=>{
      if(h.id==id){
        return id
      }
    })
    setfilteredId(filteredId.city)
        console.log(filteredData)
    setFilterdHouses(filteredData)
  }

  console.log(filteredId)
  return (
    <div className='bg-indigo-50'>
      <div className='mx-auto w-[470px] pt-5 text-center'>
        <h1 className='text-3xl font-bold text-slate-700'>Feature Listed Property</h1>
        <p className='text-base text-slate-500'>Real state can be bought sold,leased or rented and can be a valueable investment opportunity .the value is real state can be ..</p>
      </div>
      <div>
        <div className='flex justify-between '>
          <div>
            {
              FourHousesDataForCity.map(val => <button onClick={()=>findHomeWithCity(val.city,val.id)} className={`p-2 ms-5 hover:bg-blue-800 active:bg-orange-600  rounded-full text-white ${filteredId === val.city ?"bg-blue-900":"bg-indigo-300"}`}>{val.city}</button>)
            }
          </div>
          <div>
            <button onClick={viewAllCityHandler} className='text-indigo-700 border-2 border-indigo-700 px-3 rounded-full'>View all</button>
          </div>
        </div>

        <div className='grid grid-cols-3'>
          {
             !filterdHouses ? threeHousesData.map(house => <Cards
              key={house.id}
              house={house}
            ></Cards>):filterdHouses.map(house => <Cards
              key={house.id}
              house={house}
            ></Cards>)
          }
  {
    threeHousesData.map(house => <Cards
      key={house.id}
      house={house}
    ></Cards>)
  }

        </div>
        <div className='mx-auto flex justify-center mb-10 mt-5'>
          <button onClick={showMoreHandler} className='text-white flex items-center hover:bg-blue-500 gap-2 px-3 py-1 bg-blue-900 rounded-full'><FaHourglassStart />show More</button>
        </div>
      </div>
     
    </div>
  );
};

export default App;