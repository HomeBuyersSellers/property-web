import React from "react";
import Link from "next-intl/link";
const Grid = ({ data }) => {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {data.properties.length > 0 &&
          data.properties.map((val) => (
            <div
              key={val.propertyName}
              id={val.propertyName.split(" ").join("-")}
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 "
            >
              <Link href="#">
                <article
                  className={`overflow-hidden rounded-lg shadow-lg bg-white relative  bg-cover bg-no-repeat`}
                >
                  <div className="image-box relative overflow-hidden md:w-full">
                    <img
                      alt="Placeholder"
                      className="h-[240px] w-full block transition duration-500 scale-100 hover:scale-110"
                      src={val.image}
                    />
                  </div>
                  <div className="card-content relative  p-2 md:p-4">
                    <div className="wishlist">
                    <div className="w-12 h-12 rounded-full bg-transparent border border-neutral-400 flex items-center justify-center absolute top-5 right-5 hover:bg-primary-color hover:text-white transition duration-300 ease-in-out">
                    <i className="ri-heart-line text-primary-color text-lg hover:text-white"></i>
                  </div>
                  
                  
                    </div>
                    <h1 className="text-lg text-primary-color font-medium">
                      {val.additionalDetails.price}{" "}
                      <span className="text-neutral-400 text-sm">/month</span>
                    </h1>
                    <div className="flex items-center justify-between leading-tight mb-2">
                      <h1 className="text-lg text-black font-medium">
                        {val.propertyName}
                      </h1>
                    </div>
                    <div className="description mb-2">
                      <p className="text-slate-500 text-sm">{val.location}</p>
                    </div>

                    <div className="flex items-center justify-between leading-none py-2 md:py-4 border-t border-gray-500">
                      <div className="flex items-center  text-black space-x-4 w-100 font-medium">
                        <p className="ml-2 text-xs capitalize">
                          <i className="ri-hotel-bed-line text-primary-color text-lg"></i> Beds {val.additionalDetails.bedrooms}
                        </p>
                        <p className="ml-2 text-xs capitalize">
                           <i className="ri-home-line"></i> bathrooms {val.additionalDetails.bathrooms}
                        </p>
                        <p className="ml-2 text-xs capitalize">
                           <i className="ri-home-line"></i> Area {val.additionalDetails.area}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Grid;
