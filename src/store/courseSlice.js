import { createSlice } from '@reduxjs/toolkit';
import {courses} from './data';
const initialState = {
  courses: courses, 
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    LikeCourse(state, action) {
        state.courses = state.courses.map((course) =>
            course.id === action.payload ? { ...course, like: course.like + 1 } : course
        );
    },
  },
});

export const { LikeCourse } = courseSlice.actions;

export default courseSlice.reducer;
