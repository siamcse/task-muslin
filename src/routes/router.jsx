import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../components/layout/MainLayout";
import Products from "../pages/Home/Products/Products";
import CartPage from "../pages/CartPage/CartPage";
import Login from "../pages/AuthPage/Login";
import SignUp from "../pages/AuthPage/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/cart',
                element: <CartPage />
            }
        ]
    }
])

export default router;