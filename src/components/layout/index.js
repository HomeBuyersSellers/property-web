// components/Layout.js
"use client"
import Navbar from "./Navbar";
import Footer from "./Footer";


const Layout = ({ children }) => {
 


  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="layout">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
