// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './courseSlice';
import enrolledReducer from './enrolledSlice';
const store = configureStore({
  reducer: {
    course: courseReducer,
    enrolled: enrolledReducer,
  },
});

export default store;
