import { Link } from 'react-router-dom';
import { Course } from '../../data/courses';
import { levels } from '../../data/levels';
import './CourseCard.css';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const level = levels.find(l => l.id === course.level);

  return (
    <Link to={`/kurse/${course.id}`} className="course-card">
      <div className="course-header">
        <div 
          className="course-level-badge"
          style={{ backgroundColor: level?.color || '#gray' }}
        >
          {level?.name}
        </div>
        <div className="course-grade">
          {level?.gradeRange}
        </div>
      </div>
      <h3 className="course-title">{course.title}</h3>
      <p className="course-description">{course.description}</p>
      <div className="course-footer">
        <span className="course-arrow">Shiko më shumë →</span>
      </div>
    </Link>
  );
}

