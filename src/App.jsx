import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetails from "./components/Detailspage/CourseDetails";
import StudentDashboard from "./components/Dashboard/Studentdashboard";
import CourseList from "./components/Listspage/Listspage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
      </Routes>
    </div>
  )
}