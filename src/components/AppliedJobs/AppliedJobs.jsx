import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
  

  // const [cart, setCart] = useState(savedCart);

  const applied = useLoaderData();
 
  const [jobs, setJobs] = useState([])

  const apply = JSON.parse(localStorage.getItem('shopping-cart'))
  // console.log(jobs);

  useEffect(() => {
    fetch("/featureds.json")
      .then(res => res.json())
      .then(data => setJobs(data))
  }, [apply])

  const storedItem = jobs.filter(job => job.id === job.id)

  return (
    <div>
      {
        storedItem.map(item => <p>{item.title}</p>)
      }
    </div>
  );
};


export default AppliedJobs;