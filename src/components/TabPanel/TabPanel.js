import React from "react";
import Tabs from "react-responsive-tabs";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

import { tabPanelStyles } from "./tabPanelStyles";
// IMPORTANT you need to include the default styles
import "react-responsive-tabs/styles.css";
import { tabs } from "./tabs";

const useStyles = createUseStyles({ ...tabPanelStyles });

function getTabs(tabs) {
  console.log("tabs", tabs);
  const loadClasses = useStyles();

  const classes = classNames("tab", {
    [loadClasses.equalItems]: true
  });

  return tabs.map((tab, index) => ({
    title: tab.name,
    getContent: () => tab.render,
    /* Optional parameters */
    key: index,
    tabClassName: classes,
    panelClassName: "panel"
  }));
}

const TabPanel = () => {
  const loadClasses = useStyles();

  return (
    <Tabs items={getTabs(tabs)} tabsWrapperClass={loadClasses.equalTabs} />
  );
};

export default TabPanel;
