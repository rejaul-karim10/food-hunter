import React from "react";
import { categories } from "../data/data.js";

function Category() {
  console.log(categories);

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Category</h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((category, index) => (
          <div key={index} className='bg-gray-100 rounded-lg flex justify-between items-center p-4'>
            <h2 className="font-bold sm:text-xl">{category.name}</h2>
            <img className="w-20" src={category.image} alt={category.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
