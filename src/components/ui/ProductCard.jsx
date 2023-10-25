import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = () => {
    return (
        <div className='w-64 h-full border-2 border-gray rounded-lg'>
            <div className='px-8 py-6'>
                <div className='h-64 flex justify-center'>
                    <img src={'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'} alt="" className='rounded max-h-56' />
                </div>
                <div className='mt-2'>
                    <h1 title='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops' className='font-light truncate '><span className='font-medium'>Brand,</span> Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
                    <p>Rate</p>
                    <h1 className='text-2xl text-primary py-2'>Tk. 109</h1>
                </div>
                <button className='inline-flex justify-center w-full rounded-md shadow-sm shadow-zinc-900/10 text-sm text-zinc-50 px-2 py-2 bg-orange-500 hover:bg-orange-700'>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;