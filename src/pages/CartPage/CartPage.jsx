import React, { useContext } from 'react';
import { CartContext } from '../../contexts/AuthProvider';
import CartCard from '../../components/ui/CartCard';

const CartPage = () => {
    const { cartItems, totalAmount } = useContext(CartContext);
    console.log(cartItems, totalAmount);
    return (
        <div className='container mx-auto py-32'>
            <h1 className='text-2xl font-bold'>Cart</h1>
            <div>
                {
                    cartItems.map(item => <CartCard key={item.id} item={item} />)
                }
            </div>
            <h1 className='mt-10 text-2xl font-bold'>Total Amount = Tk. {totalAmount}</h1>
            <button>Checkout</button>
        </div>
    );
};

export default CartPage;