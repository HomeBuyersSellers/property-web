"use client";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, Suspense } from "react";
import Loader from "../Loader";

const Layout = ({ children, header, footer }) => {
  useEffect(() => {
    // Get the Navbar element by its id
    const navbar = document.getElementById("navbar");
    const footer = document.getElementById("footer");

    const navbarHeight = navbar ? navbar.clientHeight : 0;
    const footerHeight = footer ? footer.clientHeight : 0;
    const main = document.querySelector("main");
    if (main) {
      main.style.marginTop = `${navbarHeight}px`;
      main.style.marginBottom=`${footerHeight}px`
      main.style.zIndex = 2;
    }
  }, []);

  return (
    <>
      <Suspense fallback={<Loader />}>
      <div className="web-layout flex flex-col min-h-full">
        <Navbar data={header} />
        <main className="content relative flex flex-col flex-1">
          <div className="page-content flex-1">
          {children}
          </div>
        </main>
        <Footer data={footer} />
        </div>
      </Suspense>
    </>
  );
};

export default Layout;
