import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid'

const ProductCard = ({ product }) => {
    const { title, price, description, image, rating } = product;
    return (
        <div className='h-full border-2 border-gray rounded-lg'>
            <div className='px-8 py-6'>
                <div className='h-64 flex justify-center'>
                    <img src={image} alt="" className='rounded max-h-56' />
                </div>
                <div className='mt-2'>
                    <h1 title={title} className='font-light truncate '><span className='font-medium'>Brand,</span> {title}</h1>
                    <p className='py-2 flex'>
                        {[...Array(Math.round(rating.rate))].map((e, i) => (
                            <StarIcon
                                key={`star-${i}`}
                                className='text-orange-500 w-4'
                                aria-hidden="true"
                            />
                        ))}
                        {[...Array(5 - Math.round(rating.rate))].map((e, i) => (
                            <StarIcon
                                key={`empty-star-${i}`}
                                className='text-zinc-900/80  w-4'
                                aria-hidden="true"
                            />
                        ))}
                        ({rating.count})
                    </p>
                    <h1 className='text-2xl text-primary py-2'>Tk. {price}</h1>
                </div>
                <button className='inline-flex justify-center w-full rounded-md shadow-sm shadow-zinc-900/10 text-sm text-zinc-50 px-2 py-2 bg-orange-500 hover:bg-orange-700'>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;