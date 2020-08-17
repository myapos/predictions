import * as tf from "@tensorflow/tfjs";
import get from "../utils/get";

export default async (url) => {
  try {
    // return await get({ url });
    const csvDataset = tf.data.csv(url, {
      columnConfigs: {
        "Monthly beer production": {
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
