"use client"
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";


const Layout = ({ children, header }) => {
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
      <Navbar data={header} />
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <div className="layout">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;