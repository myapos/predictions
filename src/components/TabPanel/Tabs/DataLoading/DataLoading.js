import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

import { styles } from "./styles";
const useStyles = createUseStyles({ ...styles });

const DataLoading = () => {
  const loadClasses = useStyles();

  const classes = classNames({
    [loadClasses.wrapper]: true
  });

  return <div className={classes}>Data Loading</div>;
};

export default DataLoading;
