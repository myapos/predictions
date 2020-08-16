import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";
import DataSourceEntry from "./DataSourceEntry";

import { styles } from "./styles";
const useStyles = createUseStyles({ ...styles });

const DataLoading = () => {
  const loadClasses = useStyles();

  const classes = classNames({
    [loadClasses.wrapper]: true
  });

  return (
    <div className={classes}>
      <DataSourceEntry />
    </div>
  );
};

export default DataLoading;
