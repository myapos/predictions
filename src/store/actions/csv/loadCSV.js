/*  Load csv data actions */

export const GET_URL = "GET_URL";
export const SAGAS_LOAD_CSV = "SAGAS_LOAD_CSV";
export const SAGAS_SMA = "SAGAS_SMA";
export const SAGAS_PLOT_SMA_VALUES = "SAGAS_PLOT_SMA_VALUES";

export const getURl = (url) => ({
  type: GET_URL,
  url
});
