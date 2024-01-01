import { configureStore } from '@reduxjs/toolkit';
import formReducer from './Slice';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;