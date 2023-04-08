import React from 'react';

const TShirt = ({ tShirt, handleAddToCart }) => {
    // console.log(tShirt);
    const { _id, price, picture, name, gender } = tShirt
    return (
        <div className="card w-full bg-base-100 shadow-2xl">
            <figure className='p-3'><img className='h-64' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className='text-lg font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(tShirt)} className="btn btn-outline btn-info">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default TShirt;