import React from 'react';
import SearchField from '../../../components/ui/SearchField';

const Banner = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center md:pl-32" style={{ backgroundImage: `url('https://t3.ftcdn.net/jpg/02/64/92/28/360_F_264922838_NErJEovZiP9MTa49apqL1Vs3f88ZT8Dg.jpg')`,backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
            <div className='md:w-1/2'>
                <h1 className='text-white text-2xl md:text-7xl font-bold text-center'>Shop With Us</h1>
                <p className='text-white mt-3 text-center'>Buy quality products at best price</p>
            </div>
            <SearchField/>
        </div>
    );
};

export default Banner;