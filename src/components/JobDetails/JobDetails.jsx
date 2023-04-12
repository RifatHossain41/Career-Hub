import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollar,
  faCalendarDays,
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const JobDetails = (props) => {
  const [applied, setApplied] = useState([]);
  const [cart, setCart] = useState([]);

  const details = useLoaderData();


  const { id } = useParams();
  const [jobs, setJobs] = useState([]);
  console.log(id)

  useEffect(() => {
    fetch("featureds.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const storedData = details.find((detail) => detail.id === id);
  console.log(storedData);
  const {
    email,
    phone,
    experiences,
    requirements,
    responsibility,
    description,
    title,
    salary,
    address,
  } = storedData;

  
   const handleAddToCart = (id) => {
    addToDb(id)
    console.log(id)
  } 
  
  return (
    <div className="lg:grid grid-cols-3 gap-6 mt-8 mx-2">
      <div className="col-span-2">
        <h4 className="mb-6">
          <span className="font-bold">Job Description: </span>
          {description}
        </h4>
        <h4 className="mb-6">
          <span className="font-bold">Job Responsibility: </span>
          {responsibility}
        </h4>
        <h4 className="mb-6">
          <span className="font-bold ">Educational Requirements: </span>
          {requirements}
        </h4>
        <h4>
          <span className="font-bold ">Experiences: </span>
          {experiences}
        </h4>
      </div>
      <div className="p-7 bg-indigo-100 rounded">
        <h2 className="mb-6 font-bold">Job Details</h2>
        <hr className="border-indigo-200 mb-6" />
        <p className="mb-4">
          <FontAwesomeIcon className="mr-2 text-indigo-400" icon={faDollar} />
          <span className="font-bold">Salary: </span>
          {salary}
        </p>
        <p className="mb-8">
          <FontAwesomeIcon
            className="mr-2 text-indigo-400"
            icon={faCalendarDays}
          />
          <span className="font-bold">Job Title: </span>
          {title}
        </p>
        <h2 className="font-bold mb-6">Contact Information</h2>
        <hr className="border-indigo-200 mb-6" />
        <p className="mb-4">
          <FontAwesomeIcon className="mr-2 text-indigo-400" icon={faPhone} />
          <span className="font-bold">Phone: </span>
          {phone}
        </p>
        <p className="mb-4">
          <FontAwesomeIcon className="mr-2 text-indigo-400" icon={faEnvelope} />
          <span className="font-bold">Email: </span>
          {email}
        </p>
        <p className="mb-7">
          <FontAwesomeIcon
            className="mr-2 text-indigo-400"
            icon={faLocationDot}
          />
          <span className="font-bold">Address: </span>
          {address}
        </p>
        <button onClick={()=> handleAddToCart(id)}  className=" w-full border border-slate-400 px-5 py-2 rounded text-white bg-indigo-400" >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
