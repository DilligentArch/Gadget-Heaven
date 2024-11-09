import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ gadget }) => {
    const { product_title, product_image, price,product_id} = gadget || {};
    // console.log(product_id);
    return (
        <div className='flex relative w-11/12 mx-auto border-2 rounded-2xl max-w-screen-2xl p-2'>
            <div>
                <figure className=' h-72 overflow-hidden border-2 rounded-2xl'>
                    <img className='w-72' src={product_image} alt='' />
                </figure>
                <div className='p-4 h-28'>
                    <h1 className='text-lg font-bold'> {product_title}</h1>
                    <p className='text-[#09080f99]'>Price: ${price}</p>
                </div>
                <div>
                    <Link  to={`/product/${product_id}`} className='btn border-2 border-purple-600 text-purple-600'>View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;
