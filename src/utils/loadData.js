import * as tf from "@tensorflow/tfjs";

import trainModel from "./trainModel";
const loadData = async () => {
  console.log("Loading csv data");
  // const csvUrl =
  //   "https://storage.googleapis.com/tfjs-examples/multivariate-linear-regression/data/boston-housing-train.csv";

  // // We want to predict the column "medv", which represents a median value of
  // // a home (in $1000s), so we mark it as a label.
  // const csvDataset = tf.data.csv(csvUrl, {
  //   columnConfigs: {
  //     medv: {
  //       isLabel: true,
  //     },
  //   },
  // });
    const csvUrl =
      "http://localhost:1234/src/data/datasets_56102_107707_monthly-beer-production-in-austr.csv";

    const csvDataset = tf.data.csv(csvUrl, {
      columnConfigs: {
        "Monthly beer production": {
          isLabel: true,
        },
      },
    });

  //   const csvDataset = tf.data.csv(csvUrl);

  //   const tenValues = await csvDataset.take(10).toArray();

  const values = await csvDataset.toArray();
  //   console.log("all values", values);

  // Number of features is the number of column names minus one for the label
  // column.
  const columnNames = await csvDataset.columnNames();
  const numOfFeatures = columnNames.length - 1;
  //   console.log("numOfFeatures", numOfFeatures, " columnNames", columnNames[0]);

  trainModel({
    values,
    columnNames,
    numOfFeatures,
    csvDataset,
  });
  return {
    values,
    columnNames,
    numOfFeatures,
    csvDataset,
  };
};

export default loadData;
