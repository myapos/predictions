import React from "react";
import "../../css/css.styl";
import * as utils from "../../utils";
import App from "../App/App";
import Footer from "../Footer/Footer";

const Wrapper = () => {
  // Similar to componentDidMount and componentDidUpdate:
  // const { values, columnNames, numOfFeatures } = utils.loadData();

  return (
    <div className="wrapper totalCenter">
      <App />
      <Footer />
    </div>
  );
};

export default Wrapper;
