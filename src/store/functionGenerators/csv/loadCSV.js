import { call, select, put } from "redux-saga/effects";
import * as api from "../../../api";
import * as actions from "../..";
// import findStateProperty from "../../../helpers/findStateProperty";

function* loadCSV(action) {
  const state = yield select();
  // const {
  //   loginResponse: { token },
  //   username
  // } = findStateProperty(state, "authentication");

  // const { errorStack } = findStateProperty(state, "errors");

  // const cred = {
  //   token,
  //   username
  // };

  // const { credentials } = action; // extract cluster ID

  // const data = {
  //   cred,
  //   credentials
  // };

  // const res = yield call(api.changeCredentials, data);

  // if (res && res.status > 400) {
  //   const errorMsg = `(${res.errorCode}) ${res.errorMessage}`;

  //   errorStack.push(errorMsg.toString());

  //   yield put({
  //     type: actions.GOT_ERROR,
  //     errorStack: [...errorStack]
  //   });
  // } else {
  //   yield put({
  //     type: actions.SAGAS_CHANGE_CREDENTIALS,
  //     ...res,
  //     isFetching: false
  //   });

  //   // yield put(push('/logout')); // logout

  //   yield put({
  //     type: actions.LOGOUT
  //   });
  // }
}

export default loadCSV;
