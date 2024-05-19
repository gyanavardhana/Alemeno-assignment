import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  enrolledCourses: [],
  status: 'idle',
  error: null,
};

export const fetchEnrolledCourses = createAsyncThunk('enrolled/fetchEnrolledCourses', async () => {
  const response = await axios.get('https://alemenoapi-mbbnl6nt.b4a.run/enrolledcourses');
  return response.data;
});

export const markCompleteAsync = createAsyncThunk('enrolled/markComplete', async (courseId) => {
  await axios.patch(`https://alemenoapi-mbbnl6nt.b4a.run/enrolledcourses/${courseId}`, { status: 'Completed' });
  return courseId;
});

const enrolledSlice = createSlice({
  name: 'enrolled',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEnrolledCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEnrolledCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.enrolledCourses = action.payload;
      })
      .addCase(fetchEnrolledCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(markCompleteAsync.fulfilled, (state, action) => {
        state.enrolledCourses = state.enrolledCourses.map((course) =>
          course.id === action.payload ? { ...course, status: 'Completed' } : course
        );
      });
  },
});

export default enrolledSlice.reducer;
