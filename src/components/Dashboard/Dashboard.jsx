import React from "react";
import CourseCard from "./Coursecard";

const Dashboard = ({ enrolledCourses, onMarkComplete }) => {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Enrolled Courses</h2>
      {enrolledCourses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          onMarkComplete={onMarkComplete}
        />
      ))}
    </div>
  );
};

export default Dashboard;
