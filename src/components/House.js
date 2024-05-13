import React from "react";
import { BiArea, BiBath, BiBed } from "react-icons/bi";

function House({ house }) {
  const { price, address, bedrooms, bathrooms, surface, image, type, country } =
    house;
  return (
    <div className="bg-white py-5 shadow-1 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition ">
      <img className="mb-8 ml-5" src={image} />
      <div className="mb-4 flex gap-x-2 text-sm ">
        <div className="bg-green-500 rounded-full text-white px-3 ml-5 ">{type}</div>
        <div className="bg-violet-500 rounded-full text-white px-3 ">
          {country}{" "}
        </div>
      </div>
      <div className="text-lg font-semibold max-w-[260px] ml-5 ">{address} </div>
      <div className="flex gap-x-4 my-4 ml-5 ">
      <div className="flex items-center text-gray-600 gap-1  ">
        <div className="text-[20px] ">
          <BiBed />
        </div>
        <div>{bedrooms}</div>
      </div>

      <div className="flex items-center text-gray-600 gap-1 ">
        <div className="text-[20px] ">
          <BiBath />
        </div>
        <div>{bathrooms}</div>
      </div>

      <div className="flex items-center text-gray-600 gap-1 ">
        <div className="text-[20px] ">
          <BiArea />
        </div>
        <div>{surface}</div>
      </div>
      </div>
      

      <div className="text-lg font-semibold bg-violet-600 mb-4 ml-5 mr-5 ">{price} </div>
    </div>
  );
}

export default House;
