import { Link, NavLink } from 'react-router';
import Logo from '../../assets/fragrance_fusion.png';
import Profile from '../../assets/profile.png';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar w-[98%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li>
                                <NavLink>Perfumes</NavLink>
                                <ul className="p-2">
                                    <li><NavLink to='/mens'>Mens</NavLink></li>
                                    <li><NavLink to='/womens'>Womens</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to='/brands'>Brands</NavLink></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl">
                        <img src={Logo} alt="Fragrance_Fusion_Logo" className='w-28' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li>
                            <details>
                                <summary>Perfumes</summary>
                                <ul className="p-2">
                                    <li><NavLink to='/mens'>Mens</NavLink></li>
                                    <li><NavLink to='/womens'>Womens</NavLink></li>
                                </ul>
                            </details>
                        </li>
                        <li><NavLink to='/brands'>Brands</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul>
                        <li>
                            <NavLink to='/mycart'><FaShoppingCart className='text-2xl mr-3 cursor-pointer relative' /></NavLink>
                            {/* <span className='absolute -top-1 -right-2 bg-amber-400 w-5 h-5 flex justify-center items-center rounded-full'>2</span> */}
                        </li>
                    </ul>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Default Profile Icon"
                                    src={Profile} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink className="justify-between">
                                    Profile
                                </NavLink>
                            </li>
                            <li><NavLink to='/mycart'>My Cart</NavLink></li>
                            <li><NavLink>Logout</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;