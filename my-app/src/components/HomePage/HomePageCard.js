import React from "react";

const HomePageCard = ({ img, title, link }) => {
  return (
    <div className="card w-[350px] h-[450px] bg-transparent m-4  rounded-3xl flex flex-col hover:w-[370px] hover:h-[470px]  duration-500">
      <img
        src={img}
        alt={title}
        className="w-full h-[350px] object-cover rounded-3xl cursor-pointer"
      />
      <h2 className="text-xl font-bold mt-2 text-center text-white">{title}</h2>
      <button className="border border-blue-100 transition-colors duration-200 ease-in hover:text-white-700 hover:bg-black bg-white mt-[20px] rounded-[30px]">
        <a
          href={link}
          className="text-black-500 mt-2 inline-block text-center pb-[10px]"
        >
          Go to Link
        </a>
      </button>
    </div>
  );
};

export default HomePageCard;
