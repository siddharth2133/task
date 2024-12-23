import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-2 border-b border-gray-200 mx-12 max-w-7xl">
     
      <div className="flex items-center space-x-2 pl-4">
        <div className=" flex items-center justify-center">
          <img
            src="/images/1kibbi.png"
            alt="Logo"
            className="w-40 h-12 pl-4"
          />
        </div>
       
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="sm:flex hidden items-center space-x-1 text-gray-700 text-sm">
          <span><img src="/images/image 414.png"/></span>
          <select
            className="focus:outline-none bg-transparent"
            name="language"
            id="language"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>

        {/* Sign Up / Log In Button */}
        <button
          className="px-6 py-3 border border-[#262626] rounded hover:bg-gray-100"
        >
          Sign Up/Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
