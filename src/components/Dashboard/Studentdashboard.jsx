import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { MarkComplete } from "../../store/enrolledSlice";

const StudentDashboard = () => {
  const enrolledCourses = useSelector((state) => state.enrolled.enrolledCourses)
  const dispatch = useDispatch();

  const handleMarkComplete = (courseId) => {
    dispatch(MarkComplete(courseId));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <Dashboard
        enrolledCourses={enrolledCourses}
        onMarkComplete={handleMarkComplete}
      />
    </div>
  );
};

export default StudentDashboard;