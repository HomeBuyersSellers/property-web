import Button from "@/components/common/Button";
import LoginModal from "@/components/common/Modals/LoginModal";
import Link from "next-intl/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = ({ data, locale }) => {
  const brandLogoTitle = data && data.brandLogo && data.brandLogo.title;
  const brandLogoImage = data && data.brandLogo && data.brandLogo.logo;
  const primaryNavigation = data && data.primary_navigation;
  const secondaryNavigation = data && data.secondary_navigation;
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal,setModal]=useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`sticky shadow-md top-0 bg-white z-20 ${menuOpen ? 'h-screen':''}`}>
    <nav className="container mx-auto py-7 px-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" locale={locale} className="text-gray-700 hover:text-primary-color font-semibold capitalize flex items-center">
           
              {brandLogoImage ? (
                <>
                  <i className="ri-community-line text-xl text-primary-color mx-1"></i>
                  {brandLogoTitle}
                </>
              ) : (
                brandLogoTitle
              )}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <ul className="text-base text-gray-700 md:flex">
            {primaryNavigation.length > 0 &&
              primaryNavigation.map((val, i) => (
                <li key={i}>
                  <Link
                    className="text-gray-700 font-medium py-2 md:p-4 hover:text-primary-color capitalize text-sm"
                    locale={locale}
                    href={val.Hyperlink.url}
                    target={val.Hyperlink.target}
                  >
                    {val["Link Title"]}
                  </Link>
                </li>
              ))}
          </ul>
          <div className="button-group flex space-x-4">
            {secondaryNavigation.length > 0 &&
              secondaryNavigation.map((val, i) => (
                <Button
                  variant="bg-primary-color hover:bg-transparent hover:text-primary-color hover:border hover:border-primary-color text-white text-sm rounded"
                  key={i}
                  onClick={()=>setModal(true)}
                >
                  {val["Link Title"]}
                </Button>
              ))}
          </div>
        </div>

        {/* Mobile menu toggler */}
        <div className="md:hidden">
        <div className="flex items-center space-x-4">
        <div className="button-group flex space-x-4">
        {secondaryNavigation.length > 0 &&
          secondaryNavigation.map((val, i) => (
            <Button
                  variant="bg-primary-color hover:bg-transparent hover:text-primary-color hover:border hover:border-primary-color text-white"
                  key={i}
                  onClick={()=>setModal(true)}
                >
                  {val["Link Title"]}
                </Button>
          ))}
      </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 cursor-pointer ${
            menuOpen ? "open" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="#000"
          onClick={toggleMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <ul className="pt-4 text-base text-gray-700">
            {primaryNavigation.length > 0 &&
              primaryNavigation.map((val, i) => (
                <li key={i}>
                  <Link
                    className="block py-2 md:p-4 hover:text-primary-color capitalize font-medium"
                    locale={locale}
                    href={val.Hyperlink.url}
                    target={val.Hyperlink.target}
                  >
                    {val["Link Title"]}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </nav>
    {modal && <LoginModal closeModal={()=> setModal(false)}/>}
  </div>
  );
};

export default Navbar;