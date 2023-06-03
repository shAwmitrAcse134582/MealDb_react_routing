import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Meal = ({meal}) => {
    const {idMeal,strMeal,strArea,strMealThumb}=meal;
    return (
        <div className='h-100 w-60 border-2 border-black '>

            <div className='h-52 w-60' >
            <img  src={strMealThumb} alt=" "></img>
            </div>

            <div className='text-left mt-12 h-32 ml-3'>
            <p>id:{idMeal}</p>
            <h3 className='text-xl font-bold'>name:{strMeal}</h3>
            <p>type:{strArea}</p>
            </div>
            <button className='bg-cyan-800 w-full flex items-center justify-center p-2 hover:bg-amber-300'>
               <p className=' text-white font-medium mr-2'>Order Now</p> 
               <ShoppingCartIcon className="h-6 w-6 text-white" />
             </button>
        </div>
    );
};

export default Meal;