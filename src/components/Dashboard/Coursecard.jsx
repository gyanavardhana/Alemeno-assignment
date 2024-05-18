import React from "react";

const CourseCard = ({ course, onMarkComplete }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md mb-4">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.name}</h3>
        <p className="text-sm text-gray-600 mb-2">Instructor: {course.instructorName}</p>
        <img src={course.thumbnail} alt="Course Thumbnail" className="w-full h-auto mb-2 rounded-md shadow" />
        <p className="text-sm text-gray-600 mb-2">Due Date: {course.dueDate}</p>
        <div className="bg-gray-200 h-4 rounded-md overflow-hidden mb-2">
          { course.status === "Completed" ? (
            <div className="bg-green-500 h-full"></div>
          ) : (
            <div className="bg-blue-500 h-full" style={{ width: `${course.progress}%` }}></div>
          )}
        </div>
        <button
          onClick={() => onMarkComplete(course.id)}
          className={`text-sm font-semibold ${
            course.status === "Completed" ? "text-gray-500 cursor-default" : "text-blue-500 hover:text-blue-700 cursor-pointer"
          }`}
          disabled={course.status === "Completed"}
        >
          {course.status === "Completed" ? "Completed" : "Mark as Completed"}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
