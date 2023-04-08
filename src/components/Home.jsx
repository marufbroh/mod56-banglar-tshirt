import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from './TShirt';
import Cart from './Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tShirt) => {
        // console.log(tShirt);
        const exists = cart.find(ts => ts._id === tShirt._id)
        console.log(exists);
        if (exists) {
            toast('You have already added this t-Shirt')
        }
        else {
            const newCart = [...cart, tShirt];
            setCart(newCart)
        }

    }
    const handleRemoveFromCart = (id) => {
        toast('You have removed an item')
        // console.log(id);
        const remainingCart = cart.filter(ts => ts._id !== id);
        // console.log(remainingCart);
        setCart(remainingCart)
    }
    return (
        <section className='flex gap-6 my-6'>
            <div className='grid grid-cols-3 gap-6 mx-auto basis-3/4'>
                {
                    tShirts.map(tShirt => <TShirt key={tShirt.index} tShirt={tShirt} handleAddToCart={handleAddToCart} />)
                }
            </div>
            <div className='basis-1/4'>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
            </div>
        </section>
    );
};

export default Home;