import React from "react";
import { connect } from "react-redux";
import { createUseStyles } from "react-jss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Cell
} from "recharts";

import { styles } from "./styles";

import * as actions from "../../../../store";
import findStateProperty from "../../../../helpers/findStateProperty";

const useStyles = createUseStyles({ ...styles });

const GRAPH_WIDTH = 800;

/* It will load a bunch of graphs. Linecharts, barcharts from raw data and SMA using tensorflowJS  */
const Visualization = (props) => {
  const loadClasses = useStyles();
  const { plotSMAValues, processed } = findStateProperty(props, "sma");

  return (
    <div className={loadClasses.wrapper}>
      <LineChart
        width={GRAPH_WIDTH}
        height={300}
        data={plotSMAValues}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="xs" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="ys" stroke="#82ca9d" />
        <Line
          type="monotone"
          dataKey="sma"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>

      <BarChart
        width={GRAPH_WIDTH}
        height={300}
        data={processed}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ys" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default connect((state) => state, actions)(Visualization);
