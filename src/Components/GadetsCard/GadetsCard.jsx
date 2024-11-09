import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Cards from '../Cards/Cards';

const GadetsCard = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    const { category } = useParams();
    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        if (category) {
            const filteredByCategory = data.filter(gadget => gadget.category === category);
            setGadgets(filteredByCategory);
        } else {
            setGadgets(data);
        }
    }, [category, data]);

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 ml-9 max-w-screen-2xl '>
                {gadgets.map(gadget => (
                    <Cards key={gadget.id} gadget={gadget} />
                ))}
            </div>
            
        </>
    );
};

export default GadetsCard;
