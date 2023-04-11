import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className="lg:flex justify-between mt-5 mx-4 ">
        <h2 className="text-4xl font-semibold">ProfessionHub</h2>
        <div className="">
          <Link className="mx-3" to="/">
            Home
          </Link>
          <Link className="mx-3" to="/statistics">
            Statistics
          </Link>
          <Link className="mx-3" to="/appliedJobs">
            Applied Jobs
          </Link>
          <Link className="mx-3" to="/blog">
            Blog
          </Link>
        </div>
        <div>
          <button className="bg-indigo-500 text-white px-3 py-2 rounded">
            Star Applying
          </button>
        </div>
      </nav>
  );
};

export default Navbar;