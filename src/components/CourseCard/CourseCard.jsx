 import "./CourseCard.css";
import thumbnail from "../../assets/images/hero-banner.webp";
const CourseCard = (props) => {
  return (

  <div className="course-card">
    <div className="course-thumbnail"><img src={thumbnail} alt="Course Thumbnail" /></div>
    <div className="course-content">
      <div className="course-header">
        <span className="course-category">{props.category}</span>
        <span className="course-difficulty">{props.difficulty}</span>
      </div>
      <h3 className="course-title">{props.title}</h3>
      <p className="course-description">
        {props.description}
      </p>
      <a href={props.link} className="course-link">View Course →</a>
    </div>
  </div>


  );
};

export default CourseCard;