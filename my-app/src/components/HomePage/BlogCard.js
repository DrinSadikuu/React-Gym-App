import React from "react";

function BlogCard({ image, title, items }) {
  return (
    <div className="flex flex-row  w-[95%] ml-[40px] rounded-lg shadow-lg justify-around bg-gray-800 gap-14">
      <div className="w-[40%]">
        <img
          src={image}
          alt="Blog"
          className="w-full h-full object-cover rounded-[30px] py-[25px]"
        />
      </div>
      <div className="w-[40%] p-4">
        <h2 className="text-xl font-semibold  text-white border-b-[1px] pt-[20px] mb-[25px]">
          {title}
        </h2>
        <ul className="list-disc pl-5">
          {items.map((item, index) => (
            <li key={index} className="text-white leading-9 p-[4px]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlogCard;
