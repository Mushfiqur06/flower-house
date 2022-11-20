import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
