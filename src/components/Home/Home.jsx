import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CategoryList from "../CategoryList/CategoryList";
import Header from "../Header/Header";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobDetails from "../JobDetails/JobDetails";

const Home = () => {

  const [categorys, setCategorys] = useState([]);
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch("/categorys.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);

  useEffect(() => {
    fetch("/featureds.json")
      .then(res => res.json())
      .then(data => setJobs(data))
  }, [])

  

  return (
    <div>
      <Header></Header>
      <section>
        <div className="text-center">
          <h2 className="text-5xl font-semibold mb-4">Job Category List</h2>
          <p className="mb-8">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="lg:grid grid-cols-4 gap-6 mx-4 mb-32">
          {
            categorys.map((category) => (
              <CategoryList 
               key={category.id}
               category={category}
               ></CategoryList>
            ))
          }
        </div>
      </section>

      <section>
        <div className="text-center">
          <h2 className="text-5xl font-semibold mb-4">Featured Jobs</h2>
          <p className="mb-8">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="lg:grid grid-cols-2">
          {
            jobs.map((job) => (
              <FeaturedJobs 
                key={job.id} 
                job={job} 
              ></FeaturedJobs>
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default Home;
