import React from "react";
import classNames from "classnames";

import TabPanel from "../TabPanel/TabPanel";
import { createUseStyles } from "react-jss";
import { genericStyles } from "../../genericStyles";
import { styles } from "./styles";

const useStyles = createUseStyles({ ...genericStyles, ...styles });

const App = () => {
  const loadClasses = useStyles();

  const classes = classNames({
    [loadClasses.app]: true,
    [loadClasses.horizontalCenter]: false,
    [loadClasses.nearTotalWidth]: true
  });
  return (
    <div className={classes}>
      <TabPanel />
    </div>
  );
};

export default App;
