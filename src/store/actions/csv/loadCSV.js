/*  Load csv data actions */

export const GET_URL = "GET_URL";
export const SAGAS_LOAD_CSV = "SAGAS_LOAD_CSV";

export const getURl = (values) => ({
  type: GET_URL,
  values
});
