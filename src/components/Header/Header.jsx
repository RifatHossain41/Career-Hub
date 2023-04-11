import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mx-8">
      <div className="lg:flex items-center sm:justify-center gap-14 mt-5 mr-0 mb-32">
        <div className="w-4/12">
          <h1 className="text-6xl font-semibold mb-4">
            One Step<br/>
             Closer To Your<br/> <span className="text-7xl font-semibold text-indigo-500">Dream Job</span>
          </h1>
          <p className="mb-4">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className="bg-indigo-500 text-white px-3 py-2 rounded">
             Get Started
          </button>
        </div>
        <div className="w-6/12 m-0">
        <img className="mr-0" src="images/hardy.png" alt="" />
        </div>
      </div>

      
    </div>
  );
};

export default Header;
