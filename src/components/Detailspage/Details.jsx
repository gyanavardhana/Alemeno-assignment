// src/components/Details.js
import React, { useState } from 'react';

const Details = ({ course }) => {
  const [expandedWeeks, setExpandedWeeks] = useState({});

  const toggleWeek = (week) => {
    setExpandedWeeks((prevState) => ({
      ...prevState,
      [week]: !prevState[week],
    }));
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 border border-gray-300 rounded-lg bg-white shadow-xl">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">{course.name}</h2>
      <p className="mb-2 text-gray-700">
        <strong>Instructor:</strong> {course.instructor}
      </p>
      <p className="mb-2 text-gray-700">
        <strong>Description:</strong> {course.description}
      </p>
      <p className="mb-2 text-gray-700">
        <strong>Enrollment Status:</strong> {course.enrollmentStatus}
      </p>
      <p className="mb-2 text-gray-700">
        <strong>Duration:</strong> {course.duration}
      </p>
      <p className="mb-2 text-gray-700">
        <strong>Schedule:</strong> {course.schedule}
      </p>
      <p className="mb-2 text-gray-700">
        <strong>Location:</strong> {course.location}
      </p>
      <div className="mb-4">
        <h3
          className="text-2xl font-semibold mb-2 cursor-pointer text-blue-600 hover:text-blue-800 transition-colors duration-300"
          onClick={() => toggleWeek("syllabus")}
        >
          Syllabus
        </h3>
        {expandedWeeks["syllabus"] && (
          <ul className="pl-4">
            {course.syllabus.map((item, index) => (
              <div key={index} className="mb-4">
                <h3
                  className="text-xl font-semibold mb-2 cursor-pointer text-blue-500 hover:text-blue-700 transition-colors duration-300"
                  onClick={() => toggleWeek(item.week)}
                >
                  Week {item.week}
                </h3>
                {expandedWeeks[item.week] && (
                  <ul className="pl-4 border-l-2 border-blue-500">
                    <li className="ml-4 text-gray-700">
                      <strong>{item.topic}:</strong> {item.content}
                    </li>
                  </ul>
                )}
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Details;
