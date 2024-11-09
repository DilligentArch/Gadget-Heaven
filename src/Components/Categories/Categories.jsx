import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
  console.log(categories.length);
    return (
        <div className='border-2 rounded-xl py-5 max-w-screen-2xl px-1'>
             <NavLink to="/" className={({isActive})=> ` w-40 btn btn-lg ${isActive?'bg-purple-700': 'text-[#09080f99]'}`
                        }>All Product</NavLink>
            {
                
                categories.map(category => (
                    
                    <h1 className='text-2xl mt-8 '>
                       
                        <NavLink to={`/category/${category.category}`} className={({isActive})=> ` w-40 btn btn-lg ${isActive?'bg-purple-700': 'text-[#09080f99]'}`
                        }>
                            {category.category}
                        </NavLink>
                    </h1>


                ))
            }
        </div>
    );
};

export default Categories;