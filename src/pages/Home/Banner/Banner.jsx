import React from 'react';

const Banner = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center" style={{ backgroundImage: `url('https://t3.ftcdn.net/jpg/02/64/92/28/360_F_264922838_NErJEovZiP9MTa49apqL1Vs3f88ZT8Dg.jpg')`,backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
            <div className=''>
                <h1 className='text-white text-5xl font-bold text-center'>Shop With Us</h1>
                <p className='text-white mt-3 text-center'>Buy quality products at cheaper price</p>
            </div>
        </div>
    );
};

export default Banner;