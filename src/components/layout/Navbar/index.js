import Button from "@/components/common/Button";
import Link from "next-intl/link";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = ({ data }) => {
  const locale = useSelector((state) => state.lang);
  const brandLogoTitle = data && data.brandLogo && data.brandLogo.title;
  const brandLogoImage = data && data.brandLogo && data.brandLogo.logo;
  const primaryNavigation = data && data.primary_navigation;
  const secondaryNavigation = data && data.secondary_navigation;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-20">
      <nav className="container mx-auto py-4" id="navbar">
        <div className="flex items-center justify-between px-5">
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className="text-gray-700 hover:text-primary-color font-semibold capitalize"
            >
              {!brandLogoImage ? 
                <Image src={brandLogoImage.image} alt={brandLogoImage.alt}/> :
                <>
                <i class="ri-community-line flex items-center text-xl text-primary-color mx-2"></i> 
                {brandLogoTitle}
                 </>
              }
            </a>

            {/* Menu button for mobile */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 cursor-pointer md:hidden ${
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

          {/* Primary navigation in center */}
          <div className="flex-1 flex justify-center">
            <ul className="pt-4 text-base text-gray-700 md:flex md:pt-0 mx-auto">
              {primaryNavigation.length > 0 &&
                primaryNavigation.map((val, i) => (
                  <li key={i}>
                    <Link
                      className="text-gray-700 font-medium block py-2 md:p-4 hover:text-primary-color capitalize"
                      locale={locale}
                      href={val.Hyperlink.url}
                      target={val.Hyperlink.target}
                    >
                      {val['Link Title']}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

            <div className="button-group flex space-x-4">
              {secondaryNavigation.length > 0 &&
                secondaryNavigation.map((val, i) => (
                  <Button variant={`${
                    i === 0 ? 'border border-primary-color text-primary-color hover:bg-primary-color hover:text-white' : 'bg-primary-color hover:bg-transparent hover:text-primary-color hover:border hover:border-primary-color'
                  }`} key={i}>
                    {val['Link Title']}
                  </Button>
                ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
