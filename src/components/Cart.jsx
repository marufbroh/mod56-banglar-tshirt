import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    console.log();
    return (
        <div className="card w-full glass">
            <div className="card-body">
                <h2 className="card-title mx-auto">Order Summary {cart.lenght}</h2>
                {
                    cart.map((tShirt, index) => <p key={index}>{tShirt.name} <button onClick={() => handleRemoveFromCart(tShirt._id)}>X</button></p>)
                }
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-info">Review Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;