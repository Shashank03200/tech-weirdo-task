import React from "react";

import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.Header__Wrapper}>
      <h1 className={classes.Header__primaryHeading}>Github User Finder</h1>
    </div>
  );
}

export default Header;
