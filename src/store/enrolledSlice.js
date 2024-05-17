import { createSlice } from "@reduxjs/toolkit";
import { enrolled } from "./data";

const initialState = {
    enrolledCourses: enrolled,
};

const enrolledSlice = createSlice({
    name: "enrolled",
    initialState,
    reducers: {
        MarkComplete(state, action) {
            state.enrolledCourses = state.enrolledCourses.map((course) =>
                course.id === action.payload ? { ...course, status: course.status === "Completed" ? "In Progress" : "Completed" } : course
            );
        },
    },
});


export const { MarkComplete } = enrolledSlice.actions;

export default enrolledSlice.reducer;