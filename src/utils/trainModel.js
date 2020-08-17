import * as tf from "@tensorflow/tfjs";
import * as CONSTANTS from "../constants/constants";

function* trainModel({
  inputs,
  outputs,
  size = CONSTANTS.N_ITEMS,
  window_size = CONSTANTS.WINDOW_SIZE,
  n_epochs = CONSTANTS.N_EPOCHS,
  learning_rate = CONSTANTS.LR_RATE,
  n_layers = CONSTANTS.N_HL,
  callback
}) {
  // console.log("Before: inputs", inputs, " outputs", outputs);
  const input_layer_shape = window_size;
  const input_layer_neurons = 100;
  const rnn_input_layer_features = 10;
  const rnn_input_layer_timesteps =
    input_layer_neurons / rnn_input_layer_features;
  const rnn_input_shape = [rnn_input_layer_features, rnn_input_layer_timesteps];
  const rnn_output_neurons = 20;
  const rnn_batch_size = window_size;
  const output_layer_shape = rnn_output_neurons;
  const output_layer_neurons = 1;
  const model = tf.sequential();

  inputs = inputs.slice(0, Math.floor((size / 100) * inputs.length));
  outputs = outputs.slice(0, Math.floor((size / 100) * outputs.length));
  // console.log("After: inputs", inputs, " outputs", outputs);
  const xs = tf
    .tensor2d(inputs, [inputs.length, inputs[0].length])
    .div(tf.scalar(10));
  const ys = tf
    .tensor2d(outputs, [outputs.length, 1])
    .reshape([outputs.length, 1])
    .div(tf.scalar(10));
  // console.log("created xs and ys tensors");

  // xs.print();
  // ys.print();
  model.add(
    tf.layers.dense({
      units: input_layer_neurons,
      inputShape: [input_layer_shape]
    })
  );
  model.add(tf.layers.reshape({ targetShape: rnn_input_shape }));
  const lstm_cells = [];
  for (let index = 0; index < n_layers; index++) {
    lstm_cells.push(tf.layers.lstmCell({ units: rnn_output_neurons }));
  }
  // console.log("lstm_cells", lstm_cells);
  model.add(
    tf.layers.rnn({
      cell: lstm_cells,
      inputShape: rnn_input_shape,
      returnSequences: false
    })
  );
  model.add(
    tf.layers.dense({
      units: output_layer_neurons,
      inputShape: [output_layer_shape]
    })
  );
  const opt_adam = tf.train.adam(learning_rate);
  model.compile({ optimizer: opt_adam, loss: "meanSquaredError" });

  const hist = yield model.fit(xs, ys, {
    batchSize: rnn_batch_size,
    epochs: n_epochs,
    callbacks: {
      onEpochEnd: (epoch, log) => {
        callback(epoch, log);
      }
    }
  });
  return { model, stats: hist };
}

export default trainModel;
