import React from 'react'
import { FaPlay } from "react-icons/fa";
import { ImageUrl } from '../constants/constant';

function Banner({banner}) {
    return (
        <div className='relative h-[85vh]'>
            <div className='absolute top-0 left-0 w-full h-full'>
                <div className='bg-gradient-to-l from-transparent to-black h-full w-full opacity-100'></div>
            </div>
            <div className='absolute top-1/2 left-1/4 w-80 transform -translate-x-1/2 -translate-y-1/2  text-white z-10'>
                {banner&&(
                <h2 className='text-4xl font-bold'>{banner.title? banner.title :banner.name  }</h2>
                )}
                <p className='w-80 mt-3'>{banner?.overview}</p>
                <div className='flex mt-3'>
                    <button className='flex align-middle justify-center max-w-auto px-4 py-1 rounded-sm bg-white text-black' > <FaPlay className='m-auto' /> Play</button>
                    <button className='flex align-middle justify-center max-w-auto px-4 py-1 ml-3 rounded-sm bg-white opacity-50 text-black'>More info</button>
                </div>
            </div>
            <img className='h-full object-cover w-full' src={banner ? ImageUrl+banner.backdrop_path : ''} alt="Movie banner" />
        </div>
    )
}

export default Banner