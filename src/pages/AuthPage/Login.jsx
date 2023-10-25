import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../assets/images/login.svg';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { user, login } = useContext(AuthContext);

    useEffect(() => {
        if (user?.email) {
            navigate('/', { replace: true });
        }
    }, [user?.email]);

    const onSubmit = ({ email, password }) => {
        console.log(email, password);
        login(email, password)
            .then(result => {

            })
            .catch(e => console.log(e))
    };
    return (
        <div className="flex max-w-7xl h-screen items-center mx-auto">
            <div className="w-1/2">
                <img src={loginImage} className="h-full w-full" alt="" />
            </div>
            <div className="w-1/2 grid place-items-center">
                <div className="bg-primary/5 w-full max-w-sm rounded-lg grid place-items-center p-10">
                    <h1 className="mb-10 font-medium text-2xl">Login</h1>
                    <form className="space-y-3 w-full" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col items-start">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full rounded-md"
                                {...register('email')}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full rounded-md"
                                {...register('password')}
                            />
                        </div>
                        <div className="relative !mt-8">
                            <button type="submit" className="px-4 py-3 bg-orange-600 rounded-lg text-white w-full">
                                Login
                            </button>
                        </div>
                        <div>
                            <p>
                                Don&apos;t have an account?{' '}
                                <span
                                    className="text-primary hover:underline cursor-pointer"
                                    onClick={() => navigate('/signup')}
                                >
                                    Sign up
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;