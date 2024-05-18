import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { markCompleteAsync } from "../../store/enrolledSlice";
import NavBar from "../Navbar";

const StudentDashboard = () => {
  const enrolledCourses = useSelector((state) => state.enrolled.enrolledCourses)
  const dispatch = useDispatch();

  const handleMarkComplete = (courseId) => {
    dispatch(markCompleteAsync(courseId));
  };

  return (
    <>
    <NavBar />
    <div className="bg-gray-100 min-h-screen p-8 mt-10">
      <Dashboard
        enrolledCourses={enrolledCourses}
        onMarkComplete={handleMarkComplete}
      />
    </div>
    </>
    
  );
};

export default StudentDashboard;