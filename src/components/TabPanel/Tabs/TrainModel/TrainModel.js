import React from "react";
import { connect } from "react-redux";
import { createUseStyles } from "react-jss";
import * as actions from "../../../../store";
import * as utils from "../../../../utils";
import { styles } from "./styles";
import findStateProperty from "../../../../helpers/findStateProperty";

const useStyles = createUseStyles({ ...styles });
const callback = (epoch, log) => {
  console.log(`epoch:${epoch}, log:${log}`);
};

const TrainModel = (props) => {
  console.log("props", props);
  const loadClasses = useStyles();
  const { sma, processed } = findStateProperty(props, "sma");

  var inputs = sma.map(function (inp_f) {
    return inp_f["set"].map(function (val) {
      return val["ys"];
    });
  });

  var outputs = sma.map(function (outp_f) {
    return outp_f["sma"];
  });
  utils.trainModel({
    inputs,
    outputs,
    callback
  });
  return <div>TrainModel</div>;
};

export default connect((state) => state, actions)(TrainModel);
