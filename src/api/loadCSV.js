import * as tf from "@tensorflow/tfjs";
import get from "../utils/get";

export default async (url, csvProperty) => {
  try {
    const csvDataset = tf.data.csv(url, {
      columnConfigs: {
        [csvProperty]: {
          isLabel: true
        }
      }
    });
    console.log("csvDataset", csvDataset);
    return await csvDataset.toArray();
  } catch (e) {
    console.error(e);
  }
};
