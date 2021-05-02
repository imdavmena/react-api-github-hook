import React, { Fragment } from "react";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <footer>by David Medina Mena</footer>
    </Fragment>
  );
};

export default Layout;
