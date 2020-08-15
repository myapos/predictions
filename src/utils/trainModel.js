import * as tf from "@tensorflow/tfjs";
const trainModel = async ({
  values,
  columnNames,
  numOfFeatures,
  csvDataset,
}) => {
  console.log(
    "trainModel",
    values,
    columnNames,
    numOfFeatures,
    "csvDataset",
    csvDataset
  );

  // Prepare the Dataset for training.
  const flattenedDataset = csvDataset
    .map(({ xs, ys }) => {
      // Convert xs(features) and ys(labels) from object form (keyed by
      // column name) to array form.

      console.log("xs", xs, " ys", ys);
      return { xs: Object.values(xs), ys: Object.values(ys) };
    })
    .batch(10);

  // Define the model.
  const model = tf.sequential();
  model.add(
    tf.layers.dense({
      inputShape: [numOfFeatures],
      units: 1,
    })
  );
  model.compile({
    optimizer: tf.train.sgd(0.000001),
    loss: "meanSquaredError",
  });

  console.log("flattenedDataset", flattenedDataset);
  // Fit the model using the prepared Dataset
  return model.fitDataset(flattenedDataset, {
    epochs: 10,
    callbacks: {
      onEpochEnd: async (epoch, logs) => {
        console.log("epoch" + epoch + ":" + logs.loss);
      },
    },
  });

  return {};
};

export default trainModel;
