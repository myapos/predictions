import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createUseStyles } from "react-jss";
import * as actions from "../../../../store";
import * as utils from "../../../../utils";
import { styles } from "./styles";
import findStateProperty from "../../../../helpers/findStateProperty";

const useStyles = createUseStyles({ ...styles });

const TrainModel = (props) => {
  useEffect(() => {
    props.trainModel();
  }, []);
  const loadClasses = useStyles();
  return <div>TrainModel</div>;
};

export default connect((state) => state, actions)(TrainModel);
