import React from "react";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { styles } from "../../styles";

import "../../css/css.styl";
import * as utils from "../../utils";
import App from "../App/App";
import Footer from "../Footer/Footer";

const useStyles = createUseStyles(styles);

const Wrapper = () => {
  const genericClasses = useStyles();
  // const { values, columnNames, numOfFeatures } = utils.loadData();

  console.log("genericClasses", genericClasses);
  const classes = classNames("wrapper", {
    [genericClasses.totalCenter]: true
  });
  return (
    <div className={classes}>
      <App />
      <Footer />
    </div>
  );
};

export default Wrapper;
