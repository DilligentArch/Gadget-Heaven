import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { getStoredReadList } from '../../utility/addToDb';
import { MdOutlineDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { Toaster, toast } from 'react-hot-toast';

const Cart = ({ data }) => {
    const [cart, setCart] = useState([]);
    const [price, setPrice] = useState(0);
    const [money, setMoney] = useState(price);
    const navigate = useNavigate(); 

    useEffect(() => {
        const storedCart = getStoredReadList();
        const storedCartInt = storedCart.map(id => parseInt(id));
        const cartList = data.filter(gadget => storedCartInt.includes(gadget.product_id));
        setCart(cartList);

        const total = cartList.reduce((acc, item) => acc + item.price, 0);
        setPrice(total);
    }, [data]);

    const handleDelete = (item) => {
        const updatedCart = cart.filter(cartItem => cartItem.product_id !== item.product_id);
        setCart(updatedCart);

        const storedList = getStoredReadList().filter(id => id !== item.product_id.toString());
        localStorage.setItem('read-list', JSON.stringify(storedList));

        DeletMoney(item.price);

      
        toast.error('Removed an item from your cart');
    };

    const DeletMoney = (m) => {
        setPrice(price - m);
    };

    const handlePurchase = () => {
        document.getElementById('my_modal_5').showModal();
        setCart([]);
        setMoney(price);
        setPrice(0);
        localStorage.removeItem('read-list');
    };

    const handleSortByPrice = () => {
        const sortedCart = [...cart].sort((a, b) => b.price - a.price);
        setCart(sortedCart);
    };

    const handleCloseModal = () => {
        navigate('/'); 
    };

    return (
        <div className='w-3/4 mx-auto max-w-screen-2xl my-10'>
           
            <div className='mb-14 w-5/6 mx-auto flex justify-between'>
                <h1 className='text-3xl font-bold'>Cart</h1>
                <div className='flex items-center gap-5 justify-end'>
                    <h1 className='text-xl font-bold'>Total Price: ${price}</h1>
                    <button onClick={handleSortByPrice} className='btn rounded-lg border-2 text-purple-600'>
                        Sort By Price
                    </button>
                    <button
                        onClick={handlePurchase}
                        className='btn rounded-lg bg-purple-600 text-white'
                        disabled={cart.length === 0}
                    >
                        Purchase
                    </button>
                </div>
            </div>
            {cart.map((item) => (
                <div className='flex justify-between py-4 w-5/6 mx-auto border-2 rounded-2xl' key={item.product_id}>
                    <div>
                        <img className='w-48' src={item.product_image} alt={item.product_title} />
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold pb-3'>{item.product_title}</h2>
                        <p className='text-lg mb-3 text-[#09080f99]'>{item.description}</p>
                        <p className='font-bold'>Price: ${item.price}</p>
                    </div>
                    <div>
                        <MdOutlineDelete
                            className='text-xl mt-16 text-red-600 mr-3 cursor-pointer'
                            onClick={() => handleDelete(item)}
                        />
                    </div>
                </div>
            ))}
            {/* Modal */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                 <div className='w-20 mx-auto'>
                 <img src='/Group.png'/>
                    </div>
                    <p className="py-4 font-bold text-center border-b-2 text-xl">Payment Successful</p>
                    <p className='text-center mt-4'>Thanks For Purchasing</p>
                    <p className='text-center'>Total: ${money}</p>
                    <div className="modal-action">
                        <button onClick={handleCloseModal} className="btn border-2 border-purple-600 text-purple-600">
                            Close
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Cart;
