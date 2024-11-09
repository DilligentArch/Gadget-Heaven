// Import toast from react-toastify

import 'react-toastify/dist/ReactToastify.css';
import toast from "react-hot-toast";

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    return storedListStr ? JSON.parse(storedListStr) : [];
};

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        console.log(id, 'already exists in the cart');
        toast.error('already exists in the cart');
    } else {
        storedList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedList));
        toast.success('Added to your cart!');
    }
};

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    return storedWishListStr ? JSON.parse(storedWishListStr) : [];
};

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        console.log(id, 'already exists in the wish list');
        toast.error('This item is already in your wishlist.');
    } else {
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
        toast.success(' Added  to your wishlist!');
    }
};

export { addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList };
