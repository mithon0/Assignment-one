import React, { useEffect, useState } from 'react';
import Cards from './Pages/Cards/Cards';

const App = () => {
  const [houses,setHouses]=useState([]);
  console.log()

  useEffect(()=>{
    fetch("RentHouseData.json")
    .then(res=>res.json())
    .then(data=>setHouses(data))
  },[])
  console.log(houses)
  return (
    <div className='bg-indigo-50'>
      <div className='mx-auto w-[470px] pt-5 text-center'>
        <h1 className='text-3xl font-bold text-slate-700'>Feature Listed Property</h1>
        <p className='text-base text-slate-500'>Real state can be bought sold,leased or rented and can be a valueable investment opportunity .the value is real state can be ..</p>
      </div>
      <div>
          <div className='grid grid-cols-3'>
              {
                houses.map(house=><Cards
                key={house.id}
                house={house}
                ></Cards>)
              }
          </div>
      </div>
    </div>
  );
};

export default App;