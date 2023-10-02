import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaHospital, FaBath, FaArrowsAlt, FaRegHeart, FaBed } from "react-icons/fa";
import {  useLoaderData, useParams } from 'react-router-dom';
const CardDetails = () => {
   
    const { id } = useParams();
    console.log(id)
    const aaa = useLoaderData();
    console.log(Array.isArray(aaa)
    )

    const result = aaa.find(item => item.id == id);
    const {pictureURL,location,name,roomNumber,bathNumber,bedNumber,sft,rentPricePerMonth }=result;
    if (result) {
        console.log(result);
        
         // Output: Item 2
    } else {
        console.log('Item not found');
    }


    //    const dataWithId = aaa.find(obj=>{
    //     return obj.id === id
    //    })
    //     console.log(dataWithId)

    // const {pictureURL,location,name,roomNumber,bathNumber,bedNumber,sft,rentPricePerMonth}=house;

    return (

        <div className='mx-auto bg-white p-4 my-2 rounded-xl'>
        <div className='w-full relative'>
         <img className='w-1/2 rounded-xl mx-auto ' src={pictureURL} alt="" />
         
             
        
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
        
        </div>
     </div>
    );
};

export default CardDetails;