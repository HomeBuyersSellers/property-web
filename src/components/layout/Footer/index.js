import React from "react";
import Link from "next-intl/link";

const Footer = ({ data ,locale }) => {
  const sellHome = data && data.sellHome;
  const buyRent = data && data.buyRent;
  const buyHome = data && data.buyHome;
  const termsAndPolicy = data && data.termsAndPolicy;
  const about = data && data.about;
  const quickLinks = data && data.quickLinks;
  const brandLogoTitle = data && data.brandLogo && data.brandLogo.title;
  const brandLogoImage = data && data.brandLogo && data.brandLogo.logo;
  return (
    <footer className="bg-gray-50 text-gray-700 py-6 px-5 shadow-lg  w-full" id="footer">
    <div className="container mx-auto flex flex-wrap space-y-4 md:space-y-0">
    <div className="w-full md:w-2/5 flex lg:items-end">
      <Link href="/" className="flex">
        {brandLogoImage ? (
          <>
            <i className="ri-community-line text-xl text-primary-color mx-1"></i>
            <h1 className="text-xl font-semibold">
              {brandLogoTitle}
            </h1>
          </>
        ) : (
          <h1 className="text-2xl font-semibold">{brandLogoTitle}</h1>
        )}
      </Link>
    </div>
    <div className="w-full md:w-3/5 flex flex-wrap mt-4 ">
      <div className="w-full md:w-1/2 lg:w-1/3 mt-4 ">
        <h2 className="text-lg font-medium mb-2 uppercase">
          {sellHome.title}
        </h2>
        <ul className="capitalize">
          {sellHome.links && sellHome.links.length > 0 &&
            sellHome.links.map((val, i) => {
              const link = val && val.Hyperlink && val.Hyperlink.url;
              const target = val && val.HyperLink && val.HyperLink.target;
              return (
                <li key={i}>
                  <Link locale={locale}
                    href={link}
                    target={target}
                    className="text-gray-500  text-sm hover:text-primary-color"
                  >
                    {val["Link Title"]}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
  
      <div className="w-full md:w-full lg:w-1/3 mt-4 ">
        <h2 className="text-lg font-medium mb-2 uppercase">
          {buyRent.title}
        </h2>
        <ul className="capitalize">
          {buyRent.links && buyRent.links.length > 0 &&
            buyRent.links.map((val, i) => {
              const link = val && val.Hyperlink && val.Hyperlink.url;
              const target = val && val.HyperLink && val.HyperLink.target;
              return (
                <li key={i}>
                  <Link
                    locale={locale}
                    href={link}
                    target={target}
                    className="text-gray-500 text-sm hover:text-primary-color"
                  >
                    {val["Link Title"]}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
  
      <div className="w-full md:w-1/2 lg:w-1/3 mt-4 ">
        <h2 className="text-lg font-medium mb-2 uppercase">
          {about.title}
        </h2>
        <ul className="capitalize">
          {about.links && about.links.length > 0 &&
            about.links.map((val, i) => {
              const link = val && val.Hyperlink && val.Hyperlink.url;
              const target = val && val.HyperLink && val.HyperLink.target;
              return (
                <li key={i}>
                  <Link
                    href={link}
                    target={target}
                    className="text-gray-500  text-sm hover:text-primary-color"
                  >
                    {val["Link Title"]}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
    <div className="w-full md:w-2/5 sm:none"></div>
    <div className="w-full md:w-3/5 flex flex-wrap mt-4 md:mt-2">
      <div className="w-full md:w-1/2 lg:w-1/3 mt-4 lg:mb-4">
        <h2 className="text-lg font-medium mb-2 uppercase">
          {buyHome.title}
        </h2>
        <ul className="capitalize">
          {buyHome.links && buyHome.links.length > 0 &&
            buyHome.links.map((val, i) => {
              const link = val && val.Hyperlink && val.Hyperlink.url;
              const target = val && val.HyperLink && val.HyperLink.target;
              return (
                <li key={i}>
                  <Link
                    href={link}
                    target={target}
                    className="text-gray-500  text-sm hover:text-primary-color"
                  >
                    {val["Link Title"]}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
  
      <div className="w-full md:w-1/2 lg:w-1/3 mt-4 lg:mb-4">
        <h2 className="text-lg font-medium mb-2 uppercase">
          {termsAndPolicy.title}
        </h2>
        <ul className="capitalize">
          {termsAndPolicy.links && termsAndPolicy.links.length > 0 &&
            termsAndPolicy.links.map((val, i) => {
              const link = val && val.Hyperlink && val.Hyperlink.url;
              const target = val && val.HyperLink && val.HyperLink.target;
              return (
                <li key={i}>
                  <Link
                    href={link}
                    target={target}
                    className="text-gray-500  text-sm hover:text-primary-color"
                  >
                    {val["Link Title"]}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
  
      <div className="w-full md:w-1/2 lg:w-1/3 mt-4 lg:mb-4 ">
        <h2 className="text-lg font-medium mb-2 uppercase">
          {quickLinks.title}
        </h2>
        <ul className="capitalize">
          {quickLinks.links && quickLinks.links.length > 0 &&
            quickLinks.links.map((val, i) => {
              const link = val && val.Hyperlink && val.Hyperlink.url;
              const target = val && val.HyperLink && val.HyperLink.target;
              return (
                <li key={i}>
                  <Link
                    href={link}
                    target={target}
                    className="text-gray-500  text-sm hover:text-primary-color"
                  >
                    {val["Link Title"]}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  <hr className="border-t-2 border-gray-300 my-4 w-full"/>
    <div className="w-full flex items-center justify-between bottom-footer ">
      <div className="copyrights flex items-center justify-between w-full mt-5">
        <p className="capitalize">
          &copy; 2023 Property Web. All rights reserved.
        </p>
        <div className="social-links">
          <ul className="flex space-x-3">
            <li className="facebook">
              <Link href="https://facebook.com" target="_blank">
                <i className="ri-facebook-fill text-xl text-gray-700 hover:text-primary-color"></i>
              </Link>
            </li>
            <li className="instagram">
              <Link href="https://instagram.com" target="_blank">
                <i className="ri-instagram-line text-xl text-gray-700 hover:text-primary-color"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
    </footer>
  );
};

export default Footer;
