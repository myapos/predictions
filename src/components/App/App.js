import React from "react";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { styles } from "../../styles";

import "../../css/css.styl";

const useStyles = createUseStyles(styles);

const App = () => {
  const genericClasses = useStyles();

  const classes = classNames("app", {
    [genericClasses.horizontalCenter]: true,
    [genericClasses.halfWidth]: true
  });
  return <div className={classes}>I am a react component</div>;
};

export default App;
