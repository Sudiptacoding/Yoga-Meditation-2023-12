import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserProvider } from '../context/Usercontext';
import swal from 'sweetalert';

const Header = () => {

    const { currentUser, firstShow, logOut } = useContext(UserProvider)
    console.log(firstShow)

    const handelLogOut = () => {
        logOut()
            .then(() => {
                swal("Good job!", "Signout sucessfully!", "success");
            }).catch(() => {
                swal("Opps!", "Somethings rong!", "error");
            });
    }


    const navLink = <>
        <NavLink to='/'
            className={({ isActive, isPending }) =>
                isActive
                    ? "text-[#61ff18] font-normal text-lg underline underline-offset-2 px-3"
                    : isPending
                        ? "pending"
                        : "text-white text-lg font-normal px-3 "
            }
        >Home</NavLink>


        <NavLink to='/about'
            className={({ isActive, isPending }) =>
                isActive
                    ? "text-[#61ff18] font-normal lg:text-lg underline px-3 underline-offset-2"
                    : isPending
                        ? "pending"
                        : "px-3 text-white text-lg font-normal"
            }
        >About </NavLink>


        <NavLink to='/blog'
            className={({ isActive, isPending }) =>
                isActive
                    ? "text-[#61ff18] font-normal lg:text-lg underline underline-offset-2 px-3"
                    : isPending
                        ? "pending"
                        : "text-white text-lg font-normal px-3"
            }
        >Blogs</NavLink>
    </>
    return (
        <div>
            <div className="bg-transparent navbar">
                <div className="navbar-start">
                    <div className="dropdown text-white">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#000000ab] rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Link to='/' className="text-xl text-white normal-case btn btn-ghost">WellnessFest</Link>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        {navLink}
                    </ul>
                </div>


                <div className="navbar-end">

                    {
                        currentUser ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={currentUser.photoURL || firstShow} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Email
                                        <span className="p-3 text-white rounded-full badge bg-primary">{currentUser.emailVerified ? 'valid' : 'invalid'}</span>
                                    </a>
                                </li>
                                <li><a>{currentUser.displayName}</a></li>
                                <li onClick={handelLogOut}><a>Logout</a></li>
                            </ul>
                        </div> :
                            <Link to='/login'> <a className="text-black btn">Login</a></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;