export const TRAIN_MODEL = "TRAIN_MODEL";
export const SAGAS_TRAIN_MODEL = "SAGAS_TRAIN_MODEL";
export const SAGAS_EPOCH_LOSS = "SAGAS_EPOCH_LOSS";

export const trainModel = (fn) => ({
  type: TRAIN_MODEL,
  fn
});

export const getEpochAndLoss = (epoch, loss) => ({
  type: SAGAS_EPOCH_LOSS,
  epoch,
  loss
});
