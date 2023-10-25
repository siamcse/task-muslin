import { Link } from 'react-router-dom';

const Navbar = () => {
    const linkClass = `transition hover:text-orange-600 duration-300 text-gray-700`;
    return (
        <nav className='w-full py-3'>
            <div className="container mx-auto flex justify-between items-center">
                <Link to='/' className="text-2xl  text-gray-700 font-bold font-['Chivo_Mono']">Task<span className="text-primary">Muslin</span></Link>
                <div className="md:flex hidden gap-3 text-white">
                    <Link className={linkClass} to="/">Home </Link>
                    <Link className={linkClass} to="/books">Products</Link>
                    <Link className={linkClass} to="/about">About</Link>
                    <Link className={linkClass} to="/login">Login</Link>
                    <Link className={linkClass} to="/signup">SignUp</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;