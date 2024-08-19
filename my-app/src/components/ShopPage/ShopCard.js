import React from "react";

const ShopCard = (props) => {
  return (
    <div className="flex flex-col items-center border border-gray-300 rounded-lg shadow-xl p-6 w-80 h-auto mb-6 bg-gradient-to-r from-gray-100 to-gray-200 transform transition-transform hover:scale-105 hover:shadow-2xl">
      <img
        src={props.image}
        alt={props.name}
        className="h-48 object-cover rounded-md mb-4 bg-cover bg-center shadow-md"
      />
      <div className="flex flex-col items-start w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {props.name}
        </h2>
        <p className="text-sm text-gray-700 mb-4">{props.description}</p>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
