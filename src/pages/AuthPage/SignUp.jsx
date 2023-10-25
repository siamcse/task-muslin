import React from 'react';
import loginImage from '../../assets/images/login.svg';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { handleSubmit, register } = useForm();

    const onSubmit = ({ name, email, password }) => {
        console.log(name, email, password);
    };
    return (
        <div className="flex max-w-7xl mx-auto h-screen items-center">
            <div className="w-1/2">
                <img src={loginImage} className="h-full w-full" alt="" />
            </div>
            <div className="w-1/2  grid place-items-center">
                <div className="bg-primary/5 w-full max-w-sm rounded-lg grid place-items-center p-10">
                    <h1 className="mb-10 font-medium text-2xl">Sign up</h1>
                    <form className="space-y-5 w-full" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col items-start">
                            <label htmlFor="email">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full rounded-md"
                                {...register('name')}
                            />
                        </div>
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
                        <div className="!mt-8 ">
                            <button
                                type="submit"
                                className="px-4 py-3 bg-orange-600 rounded-lg text-white w-full"
                               
                            >
                                Sign up
                            </button>
                        </div>
                        <div>
                            <p>
                                Already have an account?{' '}
                                <span
                                    className="text-primary hover:underline cursor-pointer"
                                    onClick={() => navigate('/login')}
                                >
                                    Login
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;