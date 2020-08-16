import React from "react";
import Tabs from "react-responsive-tabs";
// IMPORTANT you need to include the default styles
import "react-responsive-tabs/styles.css";
import { tabs } from "./tabs";

function getTabs(tabs) {
  console.log("tabs", tabs);
  return tabs.map((tab, index) => ({
    title: tab.name,
    getContent: () => tab.render,
    /* Optional parameters */
    key: index,
    tabClassName: "tab",
    panelClassName: "panel"
  }));
}

const TabPanel = () => {
  return <Tabs items={getTabs(tabs)} />;
};

export default TabPanel;
