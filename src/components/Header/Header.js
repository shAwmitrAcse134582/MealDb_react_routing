import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon,XMarkIcon  } from '@heroicons/react/24/solid'

const Header = () => {
    const [open,setOpen]=useState(false)
    return (
        <div className='bg-cyan-800 w-full'>
            <div onClick={()=>setOpen(!open)} className="h-6 w-6 text-white md:hidden" >
            {
                open?<XMarkIcon/>
                :<Bars3Icon/>
            }
            </div>
            <div className={`p-4 md:block hidden md:bg-cyan-800 w-full text-white text-xl font-medium items-center justify-center flex flex-col md:flex-row absolute md:static duration-500 ease-in ${open ? 'top-4' : '-top-[120px]'}`}>
            <Link className='mr-10  hover:text-orange-500' to='/home'>Home</Link>
            <Link className='mr-10  hover:text-orange-500' to='/about'>About</Link>
            <Link className='mr-10  hover:text-orange-500' to='/meals'>Meals</Link>
            <Link className='mr-10  hover:text-orange-500' to='/orders'>Orders</Link>
            </div> 
            {
                open && (
                    <div className={`p-4 md:hidden bg-[rgba(0,0,0,.5)] md:bg-cyan-800 w-full text-white text-xl font-medium items-center justify-center flex flex-col md:flex-row absolute md:static duration-500 ease-in ${open ? 'top-4' : '-top-[120px]'}`}>
            <Link className='mr-10  hover:text-orange-500' to='/home'>Home</Link>
            <Link className='mr-10  hover:text-orange-500' to='/about'>About</Link>
            <Link className='mr-10  hover:text-orange-500' to='/meals'>Meals</Link>
            <Link className='mr-10  hover:text-orange-500' to='/orders'>Orders</Link>
            </div>
                )
            }  
            
        </div>
    );
};

export default Header;