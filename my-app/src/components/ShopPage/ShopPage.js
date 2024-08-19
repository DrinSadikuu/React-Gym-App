import React, { useState } from "react";
import supplements from "./Product";
import ShopCard from "./ShopCard";

const categories = [
  "All",
  "Proteins",
  "Creatines",
  "BCAAs",
  "Vitamins",
  "Others",
];

const ShopPage = () => {
  const [filteredSupplements, setFilteredSupplements] = useState(supplements);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterSupplements = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredSupplements(supplements);
    } else {
      const filtered = supplements.filter(
        (supplement) => supplement.category === category
      );
      setFilteredSupplements(filtered);
    }
  };

  return (
    <div className="bg-zinc-700 p-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Shop Supplements</h1>
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => filterSupplements(category)}
            className={`px-4 py-2 rounded-lg text-white ${
              selectedCategory === category
                ? "bg-blue-600"
                : "bg-blue-400 hover:bg-blue-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="supplements-list flex flex-wrap justify-around">
        {filteredSupplements.map((supplement, index) => (
          <ShopCard
            name={supplement.name}
            description={supplement.description}
            image={supplement.image_url}
            supplement={supplement.supplement} 
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
