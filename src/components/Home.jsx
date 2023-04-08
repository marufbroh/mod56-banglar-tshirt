import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from './TShirt';
import Cart from './Cart';
import toast from 'react-hot-toast';
// let quantity = 1;

const Home = () => {
    const tShirts = useLoaderData();

    const tShirtWithQuantity = tShirts.map(obj => ({ ...obj, quantity: 0 }))

    const [cart, setCart] = useState([]);

    const handleAddToCart = (tShirt) => {
        const exists = cart.find(ts => ts._id === tShirt._id)
        if (exists) {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(ts => ts._id !== exists._id);
            setCart([...remaining, exists])
            toast('You have increased the quantity')
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
        <section className='lg:flex lg:gap-6 my-6'>
            <div className='grid lg:grid-cols-3 gap-6 mx-auto basis-3/4'>
                {
                    tShirtWithQuantity.map(tShirt => <TShirt key={tShirt.index} tShirt={tShirt} handleAddToCart={handleAddToCart} />)
                }
            </div>
            <div className='basis-1/4'>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
            </div>
        </section>
    );
};

export default Home;