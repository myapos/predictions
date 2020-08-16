import React from "react";
import "../../css/css.styl";
import * as utils from "../../utils";

const Wrapper = () => {
  // Similar to componentDidMount and componentDidUpdate:
  const { values, columnNames, numOfFeatures } = utils.loadData();
  // useEffect(() => {
  //   // utils.trainModel({ values, columnNames, numOfFeatures });
  // }, []);

  return <div className="app">I am a react component</div>;
};

export default Wrapper;
