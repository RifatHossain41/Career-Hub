import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faDollar } from '@fortawesome/free-solid-svg-icons';



const FeaturedJobs = ({job}) => {
  const {id, company_logo, duty, duty_time, title, address, company_name, salary} = job;
  return (
    <div className="border m-6 p-10 rounded">
      <img className="w-60 h-14 mb-8" src={company_logo} alt="" />
      <h4 className="text-3xl font-semibold mb-2">{title}</h4>
      <p className='text-2xl mb-4'>{company_name}</p>
      <div className="flex gap-4 mb-4">
        <h5 className="border border-slate-400 px-4 text-indigo-600 rounded">{duty}</h5>
        <h5 className="border border-slate-400 px-4 text-indigo-600 rounded">{duty_time}</h5>
      </div>
      <div className='flex gap-6 mb-6'>
        <p className='ml-3'><FontAwesomeIcon icon={faLocationDot} /> {address}</p>
        <p className='ml-6'><FontAwesomeIcon icon={faDollar} /> Salary: {salary}</p>
      </div>
      <button className="border border-slate-400 px-5 py-2 rounded text-white bg-indigo-400">View Details</button>

    </div>
  );
};

export default FeaturedJobs;