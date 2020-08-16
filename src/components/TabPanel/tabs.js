import React from "react";
import * as Tabs from "./Tabs";

export const tabs = [
  { name: "Data Loading", render: <Tabs.DataLoading /> },
  { name: "Visualization", render: <Tabs.Visualization /> },
  { name: "Train Model", render: <Tabs.TrainModel /> },
  { name: "Prediction", render: <Tabs.Prediction /> }
];
