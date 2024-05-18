import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetails from "./components/Detailspage/CourseDetails";
import StudentDashboard from "./components/Dashboard/Studentdashboard";
import CourseList from "./components/Listspage/Listspage";
import { fetchCourses } from "./store/courseSlice";
import { fetchEnrolledCourses } from "./store/enrolledSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(fetchEnrolledCourses());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
      </Routes>
    </div>
  );
}
