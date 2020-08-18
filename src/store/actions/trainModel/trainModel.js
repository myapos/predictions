export const TRAIN_MODEL = "TRAIN_MODEL";
export const SAGAS_TRAIN_MODEL = "SAGAS_TRAIN_MODEL";
export const SAGAS_EPOCH_LOSS = "SAGAS_EPOCH_LOSS";

export const RESET_TRAIN_MODEL = "RESET_TRAIN_MODEL";

export const trainModel = (fn) => ({
  type: TRAIN_MODEL,
  fn
});

export const getEpochAndLoss = (epochValue, lossValue) => ({
  type: SAGAS_EPOCH_LOSS,
  epochValue,
  lossValue
});
