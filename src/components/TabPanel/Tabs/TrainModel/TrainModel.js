import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createUseStyles } from "react-jss";
import * as actions from "../../../../store";
import * as utils from "../../../../utils";
import { styles } from "./styles";
import findStateProperty from "../../../../helpers/findStateProperty";

const useStyles = createUseStyles({ ...styles });

const TrainModel = (props) => {
  const { getEpochAndLoss } = props;

  useEffect(() => {
    props.trainModel(getEpochAndLoss);
  }, []);

  const { epoch, loss } = findStateProperty(props, "trainModel");

  const loadClasses = useStyles();
  return (
    <div>
      Epoch: {epoch} Loss: {loss}
    </div>
  );
};

export default connect((state) => state, actions)(TrainModel);
