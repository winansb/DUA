import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import participantReducer from './redux/reducers/participantReducer';
import screenReducer from './redux/reducers/screenReducer';
import tapReducer from './redux/reducers/tapReducer';
import testReducer from './redux/reducers/testReducer';

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