import Link from "next/link";
import React from "react";

const ListView = ({ propertiesData }) => {
  return (
    <Link
      href={`${propertiesData.propertyName.split(" ").join("-").toLowerCase()}`}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full my-4"
    >
      <img
        className="object-cover w-full xxl:w-72 lg:w-72 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={propertiesData.image}
        height="100"
        width="100"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal relative w-full">
        <div className="wishlist">
          <div className="w-12 h-12 rounded-full bg-transparent border border-neutral-400 flex items-center justify-center absolute top-5 right-5 hover:bg-primary-color hover:text-white transition duration-300 ease-in-out">
            <i className="ri-heart-line text-primary-color text-lg hover:text-white w-full h-full flex items-center justify-center"></i>
          </div>
        </div>
        <h1 className="text-lg text-primary-color font-medium">
          {propertiesData.additionalDetails.price}
          <span className="text-neutral-400 text-sm">/month</span>
        </h1>
        <h5 className="mb-2 text-xl font-bold black-light-color capitalize w-3/4">
          {propertiesData.propertyName}
        </h5>
        <p className="mb-3 font-normal text-gray-600 dark:text-gray-400 text-sm">
          {propertiesData.location}
        </p>
        <div className="w-full flex items-center  leading-none xxl:py-0 lg:py-0 py-2 md:py-4 border-t border-gray-300">
          <div className="w-full flex items-center   text-black space-x-4 xxl:space-x-10 lg:space-x-2 w-100 font-medium">
            <p className="md:ml-2 lg:ml-1  text-xs capitalize">
              <i className="ri-hotel-bed-line text-primary-color font-medium text-xl"></i>
              {propertiesData.additionalDetails.bedrooms}
            </p>
            <p className="md:ml-2 lg:ml-1 text-xs capitalize">
              <i className="ri-home-line text-primary-color font-medium text-xl"></i>
              {propertiesData.additionalDetails.bathrooms}
            </p>
            <p className="md:ml-2 lg:ml-1 text-xs capitalize">
              <i className="ri-home-line text-primary-color font-medium text-xl"></i>
              {propertiesData.additionalDetails.area}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListView;
