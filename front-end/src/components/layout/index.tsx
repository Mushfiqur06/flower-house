import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      <div>Footer</div>
    </React.Fragment>
  );
}
