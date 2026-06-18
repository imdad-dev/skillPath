 import "./CourseCard.css";
import thumbnail from "../../assets/images/hero-banner.webp";
const CourseCard = () => {
  return (
<div className="course-container">
  <div className="course-card">
    <div className="course-thumbnail"><img src={thumbnail} alt="Course Thumbnail" /></div>
    <div className="course-content">
      <div className="course-header">
        <span className="course-category">JavaScript</span>
        <span className="course-difficulty">Beginner</span>
      </div>
      <h3 className="course-title">Learn JavaScript</h3>
      <p className="course-description">
        Learn the fundamentals of JavaScript, the most popular programming language for web development.
      </p>
      <a href="#" className="course-link">View Course →</a>
    </div>
  </div>
</div>

  );
};

export default CourseCard;