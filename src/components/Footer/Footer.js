import React from "react";
import classNames from "classnames";

import { createUseStyles } from "react-jss";
import { styles } from "./styles";

import * as utils from "../../utils";
const useStyles = createUseStyles({ ...styles });

const Footer = () => {
  const loadClasses = useStyles();

  const classes = classNames({
    [loadClasses.footer]: true
  });
  return (
    <div className={classes}>
      Developed by{" "}
      <a href="https://github.com/myapos" target="_blank">
        Myron Apostolakis
      </a>{" "}
      @2020
    </div>
  );
};

export default Footer;
