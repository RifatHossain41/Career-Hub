import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryList from "../CategoryList/CategoryList";

const Home = () => {
  const categorys = useLoaderData();

  return (
    <div>
      <section>
        <div className="text-center">
          <h2 className="text-5xl font-semibold mb-4">Job Category List</h2>
          <p className="mb-8">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
      </section>
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
    </div>
  );
};

export default Home;
