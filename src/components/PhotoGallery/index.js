"use client";
import React, { useState } from "react";
import Button from "../common/Button";

const PhotoGallery = ({ defaultImage, images }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex flex-wrap -mx-4 my-5">
      <div className="hidden md:block md:w-2/3 px-4 lg:w-2/3 xxl:w-2/3">
        <div style={{backgroundImage:`url(${defaultImage})`}} alt="property" className="h-full w-full bg-cover rounded shadow-md" />
      </div>
      <div className="md:w-1/3 h-auto px-4 lg:w-1/3 xxl:w-1/3 flex flex-col space-y-3 relative">
          {images.slice(1, 3).map((image, index) => (
            <div className="mb-2">
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full rounded shadow-md"
              />
            </div>
          ))}
          <Button variant="absolute bottom-[1rem] right-[2rem] bg-white text-back-700 font-medium rounded-md border-light-gray max-w-xs"><i className="ri-image-line text-primary-color me-2"></i> View all photos</Button>
      </div>
    </div>
  );
};

export default PhotoGallery;
