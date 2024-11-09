import { useEffect, useState } from "react";
import { getStoredWishList, addToStoredReadList } from "../../utility/addToDb";
import { MdOutlineDelete } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import 'react-toastify/dist/ReactToastify.css';
import toast from "react-hot-toast";

const WishList = ({ data }) => {
    const [wish, setWish] = useState([]);

    useEffect(() => {
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        const wishListItems = data.filter(gadget => storedWishListInt.includes(gadget.product_id));
        setWish(wishListItems);
    }, [data]);

    const handleDelete = (item) => {
        setWish(prevWish => prevWish.filter(wishItem => wishItem.product_id !== item.product_id));
        
        const updatedWishList = getStoredWishList().filter(id => id !== item.product_id.toString());
        localStorage.setItem('wish-list', JSON.stringify(updatedWishList));
        
        toast.error('Removed an item from your wishlist');
    };
    
    const handleAddToCart = (item) => {
        addToStoredReadList(item.product_id);
        toast.success('Added to your cart!');
    };

    return (
        <div className='w-3/4 mx-auto my-10'>
            
           
            <div className='mb-14 w-5/6 mx-auto flex justify-between'>
                <h1 className='text-3xl font-bold'>WishList</h1>
            </div>
            {wish.length > 0 ? (
                wish.map((item) => (
                    <div className='flex justify-between gap-4 py-4 w-5/6 mx-auto border-2 rounded-2xl' key={item.product_id}>
                        <div className="w-[20rem]">
                            <img className='' src={item.product_image} alt={item.product_title} />
                        </div>
                        <div className="ml-0">
                            <h2 className='text-2xl font-bold pb-3'>{item.product_title}</h2>
                            <p className='text-lg mb-3 font-bold'>Description: <span className="font-normal text-[#09080f99]">{item.description}</span> </p>
                            <p className='text-lg mb-3 font-bold' >Price: ${item.price}</p>
                            <button 
                                onClick={() => handleAddToCart(item)} 
                                className='block my-4 btn w-48 p-4 bg-purple-500'
                            >
                                Add to the cart <BsCart2 className='inline ml-2 pt-0' />
                            </button>
                        </div>
                        <div>
                            <MdOutlineDelete
                                className='text-xl mt-16 text-red-600 mr-3 cursor-pointer'
                                onClick={() => handleDelete(item)}
                            />
                        </div>
                    </div>
                ))
            ) : (
                <p className='text-center text-xl border-2 text-purple-600'>Your wishlist is empty.</p>
            )}
        </div>
    );
};

export default WishList;
