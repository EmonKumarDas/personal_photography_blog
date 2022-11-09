import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../context/ContextProvider';

const Navbar = ({ children }) => {
  const { user, logout } = useContext(userContext);
  const handlelogout = () => {
    logout().then(() => {

    })
  }
  const menubar = <>
    <div className='flex space-x-5 font-bold'>
      <Link to="/home"><li>Home</li></Link>
      <Link to=""><li>About</li></Link>
      <Link to="/"><li>Services</li></Link>
      <Link to=""><li>Blog</li></Link>
      <Link to=""><li>Contact</li></Link>
      {
        user?<Link to="/review"><li>My Review</li></Link>:""
      }
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
      {
        user?.email ?
          <div className="navbar-end">
            <button onClick={handlelogout} className="btn mr-1">LogOut</button>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-wrap gap-x-2 gap-y-2">
                <div className="relative flex-shrink-0">
                  <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
                  <img src={user?.photoURL} alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                
                </div>
              </div>
            </div>
          </div>
          :
          <div className="navbar-end">
            <Link to='login'><button className="btn mr-1">lOGIN</button></Link>
            <Link to="/register"><button className="btn">Register</button></Link>
          </div>
      }



    </div>
  );
};

export default Navbar;