import React from 'react';

const CartPage = () => {
    return (
        <div className='container mx-auto py-32'>
            <h1 className='text-2xl font-bold'>Cart</h1>
            <div>
                {/* <CartCard /> */}
            </div>
            <h1 className='mt-10 text-2xl font-bold'>Total Amount = Tk. 500</h1>
            <button>Checkout</button>
        </div>
    );
};

export default CartPage;