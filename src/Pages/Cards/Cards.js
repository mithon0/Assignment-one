import React from 'react';
import { FaMapMarkerAlt,FaHospital,FaBath,FaArrowsAlt,FaRegHeart, FaBed } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Cards = ({house}) => {
    const {pictureURL,location,name,roomNumber,bathNumber,bedNumber,sft,rentPricePerMonth,id}=house;

    return (
        <div className='mx-auto bg-white p-4 my-2 rounded-xl'>
        <div className='w-[340px] relative'>
         <img className='w-full rounded-xl h-52' src={pictureURL} alt="" />
         
             <div className='flex justify-between items-center'>
            <button className='px-2 py-1 text-indigo-800 font-semibold absolute top-2 bg-white rounded-full'>For Rent</button>
            <button className='p-2 absolute top-0 left-72 text-2xl'><FaRegHeart/></button>
         
         </div>
        
        </div>
        <div className='flex  items-center gap-3 mt-4 mx-2'>
            <FaMapMarkerAlt className='text-orange-600' /> <p className='text-sm text-slate-600'>{location}</p>
        </div>
        <h1 className='text-xl font-bold text-slate-700 mx-2 mt-2'>{name}</h1>
        <div className='grid grid-cols-4 mt-4 mx-2'>
        
            <div className='text-slate-700'>
                <FaHospital/>
                <p className='text-sm font-semibold mt-2'>{roomNumber} Room</p>
            </div>
            <div className='text-slate-700'>
                <FaBed/>
                <p className='text-sm font-semibold mt-2'>{bedNumber} Bed</p>
            </div>
            <div className='text-slate-700'>
                <FaBath/>
                <p className='text-sm font-semibold mt-2'>{bathNumber} Bath</p>
            </div>
            <div className='text-slate-700'>
                <FaArrowsAlt/>
                <p className='text-sm font-semibold mt-2'>{sft} sft</p>
            </div>
         
        </div>
        
        <hr className='' />
        <div className='flex justify-between items-center'>
         <h2 className='font-bold text-xl text-blue-600'>${rentPricePerMonth}/ <span className='text-xs'>month</span></h2>
         <div className='mt-3 flex items-center'>
             
             <button className='py-2 px-3 border-2 rounded-full hover:bg-slate-900 hover:text-white border-blue-900 text-blue-900'><Link to={`/property/${id}`}>Read More</Link></button>
         </div>
        </div>
     </div>
    );
};

export default Cards;