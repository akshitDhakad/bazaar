import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Topbanner from "./Topbanner";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
    <Topbanner/>
      <Navbar />
      <Header/>
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
