import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menubar = <>
    <div className='flex space-x-5 font-bold'>
      <Link to="/home"><li>Home</li></Link>
      <Link to=""><li>About</li></Link>
      <Link to="/"><li>Services</li></Link>
      <Link to=""><li>Blog</li></Link>
      <Link to=""><li>Contact</li></Link>
      <Link to="/cartDetails"><li>Cart</li></Link>
    </div>
  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menubar}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case font-bold text-xl">PhotoGraphy</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menubar}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn mr-1">lOGIN</button>
        <button className="btn">Register</button>
      </div>
    </div>
  );
};

export default Navbar;