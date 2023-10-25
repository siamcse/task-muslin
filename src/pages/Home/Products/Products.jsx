import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/ui/ProductCard';
import axios from 'axios';

const Products = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filterCategory, setFilterCategory] = useState('all');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(['all', ...data]))
    }, [])

    useEffect(() => {
        let url;
        if (filterCategory !== 'all') {
            url = `https://fakestoreapi.com/products/category/${filterCategory}`;
        }
        else {
            url = `https://fakestoreapi.com/products`;
        }
        if (url) {
            axios.get(url)
                .then(res => setProducts(res.data))
        }
    }, [filterCategory])

    const handleCategories = (category) => {
        setFilterCategory(category);
    }
    return (
        <div className='container mx-auto my-20'>
            <div>
                <h1 className='text-4xl font-bold text-center pb-5'>Our Products</h1>
            </div>
            <hr />
            <div className='py-4 flex justify-center items-center gap-10'>
                {
                    categories?.map((category, i) => <button key={i} onClick={() => handleCategories(category)} className='px-4 py-3 capitalize text-2xl hover:text-orange-600 transition duration-200'>{category}</button>)
                }
            </div>
            <hr />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20'>
                {
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;