import React from 'react';
import Categories from '../Categories/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from '../banner/Banner';

const Home = () => {
    const categories=useLoaderData()
    return (
     <div className='max-w-screen-2xl' >
        <Banner></Banner>
           <div className='mt-[50rem]'>
            <h1 className='text-4xl font-bold text-center'>
            Explore Cutting-Edge Gadgets
            </h1>
            <div className='md:flex gap-7 '>
                <div className='w-44  ml-11 pt-10'>
                    {
                        <Categories categories={categories}></Categories>
                    }
                </div>
                <div>
                    <Outlet ></Outlet>
                </div>
            </div>
        </div>
     </div>
    );
};

export default Home;