import React from 'react';

const Banner = () => {
    return (
       <div className='absolute top-2 w-full max-w-screen-2xl' >
         <div className='mb-[30rem] relative'>
            <div className='text-center bg-purple-600 p-24 rounded-2xl mb-10 '>
            <h1 className='text-4xl font-extrabold text-white pb-7'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className='text-xl text-white font-semibold mb-9'>
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories,  we have it all!
            </p>
            <p className='btn'>Shop Now! </p>
        </div>
        <div className='w-[49rem] border-2 p-4 absolute top-[20rem] right-[20rem] backdrop-blur-3xl rounded-lg'>
            <img src='/banner.jpg' />
        </div>
        </div>
       </div>
    );
};

export default Banner;