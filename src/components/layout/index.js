"use client"
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, Suspense } from "react";
import Loader from "../Loader";


const Layout = ({ children, header,footer }) => {
  useEffect(() => {
    // Get the Navbar element by its id
    const navbar = document.getElementById("navbar");
    const navbarHeight = navbar ? navbar.clientHeight : 0;
    const main = document.querySelector("main");
    if (main) {
      main.style.marginTop = `${navbarHeight}px`;
    }
  }, []);

  return (
    <>
    <Suspense fallback={<Loader/>}>
      <Navbar data={header} />
      <main className="flex min-h-screen flex-col items-center justify-between relative" >
          {children}
      </main>
      <Footer data={footer} />
    </Suspense>
     
    </>
  );
};

export default Layout;
