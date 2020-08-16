import React from "react";
import classNames from "classnames";

import "../../css/css.styl";
import * as utils from "../../utils";
import App from "../App/App";
import Footer from "../Footer/Footer";

const Wrapper = () => {
  // Similar to componentDidMount and componentDidUpdate:
  // const { values, columnNames, numOfFeatures } = utils.loadData();

  const classes = classNames("wrapper totalCenter");
  return (
    <div className={classes}>
      <App />
      <Footer />
    </div>
  );
};

export default Wrapper;
