import React from 'react'
import { GoHome } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import { MdOutlineMovieFilter } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { Link, Outlet } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='flex'>
            <div className='fixed top-0 left-0 z-20 flex flex-col justify-center gap-14 align-middle h-[100vh] w-[80px]' >
                <Link to={'/'}><LuSearch className='m-auto text-3xl' /></Link>
                <Link to={'/'}><GoHome className='m-auto text-3xl' /></Link>
                <Link to={'/'}><FaCalendarAlt className='m-auto text-3xl' /></Link>
                <Link to={'/'}><FaDisplay className='m-auto text-3xl' /></Link>
                <Link to={'/'}><MdOutlineMovieFilter className='m-auto text-3xl' /></Link>
                <Link to={'/'}><IoMdAdd className='m-auto text-3xl' /></Link>
            </div>
            {/* <div className='h-[100vh] w-[80px] bg-black' ></div> */}
            <div className='pl-[80px] flex-auto'>
                <Outlet />
            </div>
        </div>
    )
}

export default Sidebar