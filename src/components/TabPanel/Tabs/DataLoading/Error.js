import React from "react";
import { createUseStyles } from "react-jss";
import { stylesForm } from "./stylesForm";
const useStyles = createUseStyles({ ...stylesForm });

const Error = (props) => {
  const { meta } = props;
  const loadClasses = useStyles();

  if (meta.error && meta.touched) {
    return <span className={loadClasses.rowError}>{meta.error}</span>;
  }
  return null;
};

export default Error;
