import React from "react";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { genericStyles } from "../../genericStyles";
import { styles } from "./styles";

const useStyles = createUseStyles({ ...genericStyles, ...styles });

const App = () => {
  const genericClasses = useStyles();

  const classes = classNames({
    [genericClasses.app]: true,
    [genericClasses.horizontalCenter]: true,
    [genericClasses.halfWidth]: true
  });
  return <div className={classes}>I am a react component</div>;
};

export default App;
