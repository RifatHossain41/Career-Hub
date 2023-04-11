import React from 'react';

const CategoryList = ({category}) => {
  const {id, name, img, description} = category;
  return (
    <div className="bg-slate-200 rounded p-6">
      <img className="w-10 mb-8" src={img} alt="" />
      <h2 className="text-3xl font-semibold mb-2">{name}</h2>
      <p className="text-slate-500">{description}</p>

    </div>
  );
};

export default CategoryList;