import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

import participantReducer from "./redux/reducers/participantReducer";
import screenReducer from "./redux/reducers/screenReducer";
import tapReducer from "./redux/reducers/tapReducer";
import testReducer from "./redux/reducers/testReducer";
import { trialReducer } from "./redux/reducers/trialReducer";

import { getAllParticipants } from "./redux/actions/participantActions";

export async function loadData() {
  const participants = await getAllParticipants();
  store.dispatch({ type: "LOAD_DATA", payload: { participants } });
}

const rootReducer = {
  participant: participantReducer,
  screen: screenReducer,
  test: testReducer,
  tap: tapReducer,
  trial: trialReducer,
};

const middleware = [thunkMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
