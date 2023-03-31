import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import participantReducer from './reducers/participantReducer';
import screenReducer from './reducers/screenReducer';
import tapReducer from './reducers/tapReducer';
import testReducer from './reducers/testReducer';

const store = configureStore({
  reducer: {
    participant: participantReducer,
    screen: screenReducer,
    test: testReducer,
    tap: tapReducer, 
  },
  middleware: [thunkMiddleware],
});

export default store;