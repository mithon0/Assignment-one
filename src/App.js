import React, { useEffect, useState } from 'react';
import Cards from './Pages/Cards/Cards';
import { FaHourglassStart } from 'react-icons/fa';

const App = () => {
  const [houses, setHouses] = useState([]);
  const [number,setnumber]=useState(3);
  console.log()

  useEffect(() => {
    fetch("RentHouseData.json")
      .then(res => res.json())
      .then(data => setHouses(data))
  }, [])
 const threeHousesData=houses.slice(0,number)
const showMoreHandler =()=>{
    setnumber(number+3)
}

  return (
    <div className='bg-indigo-50'>
      <div className='mx-auto w-[470px] pt-5 text-center'>
        <h1 className='text-3xl font-bold text-slate-700'>Feature Listed Property</h1>
        <p className='text-base text-slate-500'>Real state can be bought sold,leased or rented and can be a valueable investment opportunity .the value is real state can be ..</p>
      </div>
      <div>
        <div className='grid grid-cols-3'>
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