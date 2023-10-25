"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ImagePlaceHolder } from "../Loaders/ImagePlaceHolder";
import CardLoader from "../Loaders/CardLoader";
import { useSelector } from "react-redux";

const Grid = ({ data , locale}) => {
  const [loading, setLoading] = useState(false);

  console.log(locale,"locale")
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="xl:container lg:container my-12 mx-auto py-4 px-5 lg:px-2 z-[-1]">
      <div className="flex flex-wrap sm-mx-1  relative m-0">
        {data.properties.length > 0 &&
          data.properties.map((val) => (
            <div
              key={val.propertyName}
              id={val.propertyName.split(" ").join("-")}
              className="my-1 px-1 w-full sm:w-1/2 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 xxl:w-1/4"
            >
              <Link href={`${locale}/rent/${val.propertyName.split(" ").join("-").toLowerCase()}`}>
                <article
                  className={`overflow-hidden rounded-lg shadow-lg bg-white relative  bg-cover bg-no-repeat`}
                >
                  {loading ? (
                    <ImagePlaceHolder />
                  ) : (
                    <div className="image-box relative overflow-hidden md:w-full">
                      <img
                        alt="Placeholder"
                        className="h-[240px] w-full block transition duration-500 scale-100 hover:scale-110"
                        src={val.image}
                      />
                    </div>
                  )}
                  <div className="card-content relative  xl:p-3 lg:p-2.5 md:p-4 sm:p-4 p-4">
                    {loading ? (
                      <CardLoader />
                    ) : (
                      <React.Fragment>
                        <div className="wishlist">
                          <div className="w-12 h-12 rounded-full bg-transparent border border-neutral-400 flex items-center justify-center absolute top-5 right-5 hover:bg-primary-color hover:text-white transition duration-300 ease-in-out">
                            <i className="ri-heart-line text-primary-color text-lg hover:text-white w-full h-full flex items-center justify-center"></i>
                          </div>
                        </div>
                        <h1 className="text-lg text-primary-color font-medium">
                          {val.additionalDetails.price}{" "}
                          <span className="text-neutral-400 text-sm">
                            /month
                          </span>
                        </h1>
                        <div className="flex items-center justify-between leading-tight mb-2">
                          <h1 className="text-lg text-black font-medium">
                            {val.propertyName}
                          </h1>
                        </div>
                        <div className="description mb-2">
                          <p className="text-slate-500 text-sm">
                            {val.location}
                          </p>
                        </div>

                        <div className="w-full flex items-center justify-between leading-none py-2 md:py-4 border-t border-gray-500">
                          <div className="w-full flex items-center justify-between  text-black space-x-4 lg:space-x-2 w-100 font-medium">
                            <p className="md:ml-2 lg:ml-1  text-xs capitalize">
                              <i className="ri-hotel-bed-line text-primary-color xl:text-lg"></i>{" "}
                              Beds {val.additionalDetails.bedrooms}
                            </p>
                            <p className="md:ml-2 lg:ml-1 text-xs capitalize">
                              <i className="ri-home-line text-primary-color"></i>{" "}
                              bathrooms {val.additionalDetails.bathrooms}
                            </p>
                            <p className="md:ml-2 lg:ml-1 text-xs capitalize">
                              <i className="ri-home-line text-primary-color"></i>{" "}
                              Area {val.additionalDetails.area}
                            </p>
                          </div>
                        </div>
                      </React.Fragment>
                    )}
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
