import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createUseStyles } from "react-jss";
import * as actions from "../../../../store";
import { styles } from "./styles";
import findStateProperty from "../../../../helpers/findStateProperty";

const useStyles = createUseStyles({ ...styles });

const Prediction = (props) => {
  useEffect(() => {
    props.prediction();
  }, []);

  const loadClasses = useStyles();

  return <div>Prediction</div>;
};

export default connect((state) => state, actions)(Prediction);
