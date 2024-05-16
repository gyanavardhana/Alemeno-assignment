import React from "react";

const CourseCard = ({ course, onMarkComplete }) => {
  return (
    <div  className="bg-white rounded-lg p-4 shadow-md mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{course.name}</h3>
        <button
          onClick={() => onMarkComplete(course.id)}
          className="text-sm text-gray-500"
        >
          {course.status === "Completed" ? "Completed" : "Mark as Completed"}
        </button>
      </div>
      <p className="text-gray-600 mb-2">Instructor: {course.instructorName}</p>
      <img src={course.thumbnail} alt="Course Thumbnail" className="w-full h-auto mb-2" />
      <p className="text-gray-600 mb-2">Due Date: {course.dueDate}</p>
      <div className="bg-gray-200 h-4 rounded-md overflow-hidden">
        { course.status === "Completed" ? (
          <div>Completed</div>
        ) : (
          <div className="bg-blue-500 h-full" style={{ width: `${course.progress}%` }}></div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
