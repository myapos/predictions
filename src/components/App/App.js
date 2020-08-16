import React from "react";
import classNames from "classnames";

import "../../css/css.styl";
import * as utils from "../../utils";

const App = () => {
  const classes = classNames("app horizontalCenter halfWidth");
  return <div className={classes}>I am a react component</div>;
};

export default App;
