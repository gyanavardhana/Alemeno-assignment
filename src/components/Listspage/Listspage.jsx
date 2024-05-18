import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa"; // Importing the heart icon from react-icons
import NavBar from "../Navbar";
import { likeCourseAsync } from "../../store/courseSlice";

const Course = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLikeClick = (courseId) => {
    dispatch(likeCourseAsync(courseId));
  }

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (id) => {
    navigate(`/courses/${id}`);
  };

  return (
    <div className="max-h-96 mt-10">
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
            className={`relative border-l-4 p-4 mb-4 rounded-md cursor-pointer transition-all duration-200 hover:shadow-lg
              ${index % 2 === 0 ? 'border-blue-500 bg-blue-100 hover:bg-blue-200' : 'border-green-500 bg-green-100 hover:bg-green-200'}`}
          >
            <h3 className="font-bold text-lg text-gray-800">{course.name}</h3>
            <p className="text-gray-600">Instructor: {course.instructor}</p>
            <p className="text-gray-600">Description: {course.description}</p>
            <p className="text-gray-600">Number of Likes: {course.likes}</p>
            <button
              onClick={() => handleClick(course.id)}
              className="mt-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
            >
              View Details
            </button>
            <button
              onClick={() => handleLikeClick(course.id)}
              className="mt-2 ml-2 px-4 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
            >
              <FaHeart className="text-red-500"/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CourseList = () => {
  const courses = useSelector((state) => state.course.courses);
  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Courses</h1>
        <Course courses={courses} />
      </div>
    </>
  );
};

export default CourseList;
