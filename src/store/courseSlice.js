import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  courses: [],
  status: 'idle',
  error: null,
};

export const fetchCourses = createAsyncThunk('course/fetchCourses', async () => {
  const response = await axios.get('https://alemeno-api.onrender.com/courses');
  return response.data;
});

export const likeCourseAsync = createAsyncThunk('course/likeCourse', async (courseId) => {
  await axios.patch(`https://alemeno-api.onrender.com/courses/${courseId}`, { likes: 1 });
  return courseId;
});

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(likeCourseAsync.fulfilled, (state, action) => {
        state.courses = state.courses.map((course) =>
          course.id === action.payload ? { ...course, likes: course.likes + 1 } : course
        );
      });
  },
});

export default courseSlice.reducer;

