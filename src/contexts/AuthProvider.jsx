import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
export const CartContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    console.log(totalAmount);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
        });
        return () => unSubscribe();
    }, [])

    useEffect(() => {
        let total = 0;
        cartItems.forEach(item => {
            total += parseFloat(item.price);
        });
        setTotalAmount(total);
    }, [cartItems])

    const authInfo = {
        user,
        createUser,
        login,
        logout
    }

    const cartInfo = {
        cartItems,
        setCartItems,
        totalAmount
    }
    return (
        <AuthContext.Provider value={authInfo}>
            <CartContext.Provider value={cartInfo}>
                {children}
            </CartContext.Provider>
        </AuthContext.Provider>
    );
};

export default AuthProvider;