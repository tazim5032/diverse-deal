import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const Navbar = () => {

    const { logout, user } = useAuth();

    return (
        <div className="navbar fixed top-0 left-0 w-full bg-gray-600 shadow-md z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" style={{ zIndex: 10 }}>

                        <li>

                            <NavLink className={({ isActive }) => isActive ? 'text-red-500 font-bold border border-yellow-500 p-2 sm:mr-2' : 'font-bold p-2 sm:mr-2 text-black'} to="/"><a>Home</a></NavLink>
                           

                        </li>
                        {
                            user ?

                                <li>

                                    <NavLink className={({ isActive }) => isActive ? 'text-red-500 font-bold border border-yellow-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded text-black'} to="/user-profile"><a>Profile</a></NavLink>
                                </li>


                                : <div>
                                    
                                </div>
                        }
                    </ul>
                </div>
                <div className='flex-1'>
                    <Link to='/' className='flex gap-2 items-center'>
                        <img className='w-auto h-7 rounded-2xl' src='https://i.ibb.co/1JLyW2S/logo1.png' alt='' />
                        <p className='sm:text-2xl font-bold text-white'>Edu
                                <span className="text-red-600 sm:text-2xl">Flow</span>
                        </p>
                    </Link>
                </div>


            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1" style={{ zIndex: 10 }}>

                    <div>
                        <NavLink className={({ isActive }) => isActive ? 
                        'text-red-500 font-bold border border-yellow-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded text-black'} to="/"><a>Home</a></NavLink>

                    </div>
                    {
                        user ?

                            <div>

                                <NavLink className={({ isActive }) => isActive ? 'text-red-500 font-bold border border-yellow-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded text-black'} to="/user-profile"><a>Profile</a></NavLink>
                            </div>


                            : <div>
                            </div>
                    }

                </ul>
            </div>


            <div className="navbar-end gap-1 text-center" style={{ zIndex: 10 }}>
            <div>
                        <NavLink className={({ isActive }) => isActive ? 'text-red-500 font-bold border border-yellow-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded text-black'} to="/"><a>Home</a></NavLink>
                    </div>

                {
                    user ? <div className="dropdown dropdown-end">
                        <label tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                            title={user?.displayName}
                        >

                            <div className="tool w-10 rounded-full" >
                                <img className="idd"
                                    src={user?.photoURL ||
                                        "https://i.ibb.co/sjymvr8/Capture4.png"} />
                            </div>


                        </label>


                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3
                        z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {/* <li>
                                <button className="btn btn-sm btn-ghost bg-cyan-200">
                                    {user ? user.displayName : 'User name not found'}
                                </button>
                            </li> */}
                            <li className="">
                                {/* <Link to="/my-submission">
                                    <button className="btn btn-medium btn-ghost bg-red-700 text-white">
                                        My Attempted Assignments
                                    </button>
                                </Link> */}

                            </li>

                            <li>
                                <button
                                    onClick={logout}
                                    className="btn text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 shadow-lg transform hover:scale-105 transition-transform duration-300">Logout</button>
                            </li>
                        </ul>
                    </div>
                        :

                        <div>
                            <Link to="/login">
                                <button className="btn text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 shadow-lg transform hover:scale-105 transition-transform duration-300">Login</button>
                            </Link>
                            <Link to="/register">
                                <button className="btn text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 shadow-lg transform hover:scale-105 transition-transform duration-300">Register</button>
                            </Link>
                        </div>
                }
                {
                    user ? <button
                        onClick={logout}
                        className="btn btn-medium btn-ghost bg-red-700 text-white mt-2">Logout</button>
                        : <a></a>
                }



            </div>

        </div>
    );
};

export default Navbar;