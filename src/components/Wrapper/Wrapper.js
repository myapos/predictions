import React from "react";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { genericStyles } from "../../genericStyles";
import { styles } from "./styles";

import * as utils from "../../utils";
import App from "../App/App";
import Footer from "../Footer/Footer";

const useStyles = createUseStyles({ ...genericStyles, ...styles });

const Wrapper = () => {
  const loadClasses = useStyles();
  // const { values, columnNames, numOfFeatures } = utils.loadData();

  console.log("loadClasses", loadClasses);
  const classes = classNames({
    [loadClasses.wrapper]: true,
    [loadClasses.totalCenter]: true
  });
  return (
    <div className={classes}>
      <App />
      <Footer />
    </div>
  );
};

export default Wrapper;
