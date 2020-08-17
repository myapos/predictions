import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store";

const TrainModel = (props) => {
  console.log("props", props);
  return <div>TrainModel</div>;
};

export default connect((state) => state, actions)(TrainModel);
