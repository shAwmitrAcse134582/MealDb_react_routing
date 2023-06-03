import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';
const Meals = () => {
    const meals=useLoaderData();
   
    return (
        <div >
            <h3 className='text-blue-600 font-bold text-lg '>Total Item : {meals.meals.length}</h3>
            <div className='grid sm:grid-cols-5 mt-8 ml-10 gap-2 mb-10'>
            {
                meals.meals.map(meal=>
                    <Meal key={meal.id}
                    meal={meal}
                    ></Meal>
                    )
            }
            </div>
           
        </div>
    );
};

export default Meals;