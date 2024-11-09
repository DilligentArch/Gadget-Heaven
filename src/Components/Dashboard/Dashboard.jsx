import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import WishList from '../WishList/WishList';

const Dashboard = () => {
    const data = useLoaderData();
    const [flag, setFlag] = useState(true);

    const func = () => {
        setFlag(false);
    };

    const func1 = () => {
        setFlag(true);
    };

    return (
        <div>
            {/* banner */}
            <div className='bg-purple-600 text-center w-full text-white max-w-screen-2xl py-8'>
                <h1 className='font-bold text-3xl mb-3'>Dashboard</h1>
                <p className='font-medium text-lg mb-5'>
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <button 
                    onClick={func1} 
                    className={`btn w-24 mr-4 ${flag ? 'bg-white text-purple-600' : ' bg-purple-600 text-white '}`}
                >
                    Cart
                </button>
                <button 
                    onClick={func} 
                    className={`btn w-24 ${!flag ? ' bg-white text-purple-600' : 'bg-purple-600 text-white'}`}
                >
                    Wishlist
                </button>
            </div>

            {flag ? <Cart data={data} /> : <WishList data={data} />}
        </div>
    );
};

export default Dashboard;
