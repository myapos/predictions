import React from "react";
import classNames from "classnames";

import { createUseStyles } from "react-jss";
import { styles } from "./styles";

import * as utils from "../../utils";
const useStyles = createUseStyles({ ...styles });

const Footer = () => {
  const genericClasses = useStyles();

  const classes = classNames({
    [genericClasses.footer]: true
  });
  return <div className={classes}>Footer</div>;
};

export default Footer;
