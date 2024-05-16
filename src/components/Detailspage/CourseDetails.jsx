import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../../store/data";
const Details = ({ course }) => {
  const [expandedWeeks, setExpandedWeeks] = useState({});

  const toggleWeek = (week) => {
    setExpandedWeeks((prevState) => ({
      ...prevState,
      [week]: !prevState[week],
    }));
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 border border-gray-300 rounded-md bg-white shadow-md">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">
        {course.name}
      </h2>
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
          className="text-xl font-semibold mb-2 cursor-pointer text-gray-800"
          onClick={() => toggleWeek("syllabus")}
        >
          Syllabus
        </h3>
        {expandedWeeks["syllabus"] && (
          <ul>
            {course.syllabus.map((item, index) => (
              <div key={index} className="mb-4">
                <h3
                  className="text-lg font-semibold mb-2 cursor-pointer text-gray-800"
                  onClick={() => toggleWeek(item.week)}
                >
                  Week {item.week}
                </h3>
                {expandedWeeks[item.week] && (
                  <ul>
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

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  return (
    <div className="container mx-auto p-4">
      <Details course={course} />
    </div>
  );
}


export default CourseDetails;
