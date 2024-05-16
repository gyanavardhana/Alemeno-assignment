import React, { useState } from "react";
import { courses } from "../../store/data";
import { useNavigate } from "react-router-dom";

const Course = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (id) => {
    navigate(`/courses/${id}`);
  };

  return (
    <div className="max-h-96 overflow-y-scroll">
      <input
        type="text"
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
        placeholder="Search by course name or instructor"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="list-none p-0">
        {filteredCourses.map((course, index) => (
          <li
            key={course.id}
            className="border border-gray-300 rounded-md p-4 cursor-pointer hover:bg-gray-100 mb-2"
          >
            <h3 className="font-bold">{course.name}</h3>
            <p>Instructor: {course.instructor}</p>
            <p>Description: {course.description}</p>
            <button onClick={() => handleClick(course.id)}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CourseList = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <Course courses={courses} />
    </div>
  );
};

export default CourseList;
