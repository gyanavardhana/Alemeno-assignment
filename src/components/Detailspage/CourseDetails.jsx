import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import Details from './Details';


const CourseDetails = () => {
  const { id } = useParams();
  const course = useSelector((state) =>
    state.course.courses.find((course) => course.id === parseInt(id))
  );

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex items-center justify-center">
      <Details course={course} />
    </div>
  );
};

export default CourseDetails;
