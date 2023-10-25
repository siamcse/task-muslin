import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/ui/ProductCard';

const Products = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(['all', ...data]))
    }, [])
    console.log(categories);
    return (
        <div className='container mx-auto my-20'>
            <div>
                <h1 className='text-4xl font-bold text-center pb-5'>Our Products</h1>
            </div>
            <hr />
            <div className='py-4 flex justify-center items-center gap-10'>
                {
                    categories?.map((category, i) => <button key={i} className='px-4 py-3 capitalize text-2xl hover:text-orange-600 transition duration-200'>{category}</button>)
                }
            </div>
            <hr />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default Products;