import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const { user,logout } = useContext(AuthContext);
    const linkClass = `transition hover:text-orange-600 duration-300 text-gray-700`;

    const handleLogout = () => {
        logout()
            .then(() => toast.success("Logout success."))
            .catch(e => console.log(e))
    }
    return (
        <nav className='w-full py-3'>
            <div className="container mx-auto flex justify-between items-center">
                <Link to='/' className="text-2xl  text-gray-700 font-bold font-['Chivo_Mono']">Task<span className="text-primary">Muslin</span></Link>
                <div className="md:flex items-center hidden gap-3 text-white">
                    <Link className={linkClass} to="/">Home </Link>
                    <Link className={linkClass} to="/products">Products</Link>
                    <Link className={linkClass} to="/profile">Profile</Link>
                    {
                        user?.email ?
                            <>
                                <button onClick={handleLogout} className={linkClass}>Logout</button>
                                <Link className={linkClass} to='/cart'><ShoppingCartIcon className='text-black w-5'/></Link>
                            </>
                            :
                            <>
                                <Link className={linkClass} to="/login">Login</Link>
                                <Link className={linkClass} to="/signup">SignUp</Link>
                            </>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;