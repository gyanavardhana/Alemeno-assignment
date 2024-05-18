import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-tr from-gray-900 to-black p-4 shadow-lg fixed w-full top-0 z-10">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-white text-xl font-bold">Alemeno Courses</div>
        <div className="space-x-4 mt-4 sm:mt-0 sm:flex sm:space-x-8 flex-wrap">
          <Link to="/" className=" text-gray-200 hover:text-white">Courses</Link>
          <Link to="/dashboard" className=" text-gray-200 hover:text-white">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
