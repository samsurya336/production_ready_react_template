import { all, put, takeEvery } from "@redux-saga/core/effects";
import store from "../store/store";

const actionTypes = {
  PUT_TEMPLATE_DATA: "PUT_TEMPLATE_DATA",
  REMOVE_TEMPLATE_DATA: "REMOVE_TEMPLATE_DATA"
};

export const templateActions = {
  putTemplateData: (data) => {
    store.dispatch({
      type: actionTypes.PUT_TEMPLATE_DATA,
      payload: {
        data: data
      }
    });
  },
  removeTemplateData: () => {
    store.dispatch({
      type: actionTypes.REMOVE_TEMPLATE_DATA
    });
  }
};

function* putTemplateDataWorker(action) {
  try {
    yield put({
      type: "SET_TEMPLATE_LOADING",
      payload: {
        loading: true
      }
    });

    yield put({
      type: "SET_TEMPLATE_DATA",
      payload: {
        data: action.payload.data
      }
    });

    yield put({
      type: "SET_TEMPLATE_LOADING",
      payload: {
        loading: false
      }
    });
  } catch (error) {
    console.log("Error");
    yield put({
      type: "SET_TEMPLATE_LOADING",
      payload: {
        loading: false
      }
    });
  }
}

function* removeTemplateDataWorker() {
  try {
    yield put({
      type: "SET_TEMPLATE_LOADING",
      payload: {
        loading: true
      }
    });

    yield put({
      type: "SET_TEMPLATE_DATA",
      payload: {
        data: null
      }
    });

    yield put({
      type: "SET_TEMPLATE_LOADING",
      payload: {
        loading: false
      }
    });
  } catch (error) {
    console.log("Error");
    yield put({
      type: "SET_TEMPLATE_LOADING",
      payload: {
        loading: false
      }
    });
  }
}

export default function* templateWatcher() {
  yield all([
    takeEvery("PUT_TEMPLATE_DATA", putTemplateDataWorker),
    takeEvery("REMOVE_TEMPLATE_DATA", removeTemplateDataWorker)
  ]);
}
