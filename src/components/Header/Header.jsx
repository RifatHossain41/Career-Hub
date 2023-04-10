import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <nav className='lg:flex justify-between mt-5 mx-2'>
        <h2 className="text-4xl font-bold">ProfessionHub</h2>
        <div className="">
          <Link className="mx-3" to="/">Home</Link>
          <Link className="mx-3" to="/statistics">Statistics</Link>
          <Link className="mx-3" to="/jobs">Applied Jobs</Link>
          <Link className="mx-3" to="/blog">Blog</Link>
        </div>
        <div>
          <button className="bg-indigo-500 px-3 py-2 rounded">Star Applying</button>
        </div>
      </nav>
  );
};

export default Header;