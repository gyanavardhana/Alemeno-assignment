import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { enrolled } from "../../store/data";

const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState(enrolled);

  const handleMarkComplete = (courseId) => {
    setEnrolledCourses((courses) =>
      courses.map((course) =>
        course.id === courseId
          ? { ...course, status: course.status === "Completed" ? "In Progress" : "Completed" }
          : course
      )
    );
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