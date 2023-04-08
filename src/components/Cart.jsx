import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    // console.log(cart);
    let message
    if (cart.length === 0) {
        message = <p className='text-center'>Please Add Some Products</p>
    }
    else {
        message = <div className='text-center'>
            <p>Rich Man</p>
            <p>Thanks for giving your money</p>
        </div>
    }
    return (
        <div className="card w-full glass">
            <div className="card-body">
                <h2 className="card-title mx-auto">Order Summary {cart.length}</h2>

                {/* <p className={`font-bold ${cart.length === 3 ? 'bg-green-400' : 'bg-red-400'}`}>common css with ternary using css</p>
                {
                    cart.length > 2 ? <p>Aroo kino</p> : <p>2 tar beshi kino</p>
                }
                {message}
                {
                    cart.length === 2 && <div>True, Tmi di 2 ta products kinso</div>
                }
                {
                    cart.length !== 3 || <div>False, 3 ta product hoyeche</div>
                } */}
                
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