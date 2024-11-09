import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BannerDeatils from '../banner/BannerDeatils';
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { addToStoredReadList, addToStoredWishList } from '../../utility/addToDb';

const CardDetails = () => {
  const data = useLoaderData();
  const { product_id } = useParams();
  const [gadget, setGadgets] = useState({});
  const [wishlistDisabled, setWishlistDisabled] = useState(false);

  useEffect(() => {
    const singleData = data.find(gadget => gadget.product_id == product_id);
    setGadgets(singleData);

   
    const storedWishList = JSON.parse(localStorage.getItem('wish-list')) || [];
    if (storedWishList.includes(product_id)) {
      setWishlistDisabled(true);
    }
  }, [data, product_id]);

  const { product_title, product_image, price, description, Specification, availability, rating } = gadget;

  const handleCart = (id) => {
    addToStoredReadList(id);
  };

  const handleAddToWishList = (id) => {
    addToStoredWishList(id);
    setWishlistDisabled(true);
  };

  return (
    <div className='max-w-screen-2xl'>
      <BannerDeatils className='relative' />
      <div className="flex w-[60rem] mx-auto absolute top-72 bg-white right-64 rounded-lg ">
        <div className="w-2/4 p-8">
          <img className="border-2 rounded-lg" src={product_image} alt={product_title} />
        </div>
        <div className="pt-7">
          <h1 className="text-3xl font-bold mb-2">{product_title}</h1>
          <p className="text-xl mb-2">Price: ${price}</p>
          <p className={availability ? 'bg-green-200 rounded-lg border-2 border-green-600 mb-2 text-green-600 p-1 w-20 font-semibold' : 'w-36 font-semibold p-1 rounded-lg bg-red-200 border-2 mb-2 border-red-600 text-red-600'}>
            {availability ? 'In Stock' : 'Out of Stock'}
          </p>
          <p className='text-[#09080f99]'>{description}</p>

          <h2 className="text-xl font-semibold mt-4">Specifications:</h2>
          <ol className="list-decimal list-inside text-[#09080f99] ">
            {Specification && Specification.map((spec, index) => (
              <li  key={index}>{spec}</li>
            ))}
          </ol>
          <p className='font-extrabold mt-2'>Rating</p>
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
            <span className='ml-3'>{rating}</span>
          </div>
          <div className='flex justify-start gap-4 mt-5 items-center'>
            <button onClick={() => handleCart(product_id)} className='block btn w-48 p-4 bg-purple-500'>
              Add to the cart <BsCart2 className='inline ml-2 pt-0' />
            </button>
            <button
              onClick={() => handleAddToWishList(product_id)}
              className='border-2 rounded-full p-2'
              disabled={wishlistDisabled}
              style={{ color: wishlistDisabled ? 'gray' : 'inherit' }}
            >
              <CiHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
