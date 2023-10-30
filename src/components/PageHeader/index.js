"use client";

import Button from "../common/Button";

export const DetailedPageHeader = ({propertyName,location}) => {
  return (
    <div className="page-header flex justify-between w-full xxl:flex-row xxl:items-end  md:flex-col md:w-full md:items-start items-end">
      <div className="page-title">
        <div className="back-btn mb-2">
          <h2
            className="text-primary-color text-sm font-medium cursor-pointer"
            onClick={() => window.history.go(-1)}
          >
            <i className="ri-arrow-left-s-line"></i> Back to map
          </h2>
        </div>
        <h1 className="font-medium text-3xl text-black-light-color">
          {propertyName}
        </h1>
        <p className="font-normal text-sm text-gray-400">{location}</p>
      </div>
      <div className="button-group flex space-x-3">
        <Button variant="bg-light-gray-color text-primary-color font-medium rounded border-light-gray">
          <i className="ri-share-fill me-1"></i>Share
        </Button>
        <Button variant="bg-light-gray-color text-primary-color font-medium rounded border-light-gray">
          <i className="ri-heart-line me-1"></i>Favorite
        </Button>
        <Button variant="bg-light-gray-color text-primary-color font-medium rounded border-light-gray">
          <i className="ri-search-line me-1"></i>Browse nearby listings
        </Button>
      </div>
    </div>
  );
};
