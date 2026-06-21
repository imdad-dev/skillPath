 import "./CourseCard.css";
 import {useState } from "react";
 import Button from "../Button/Button";
import thumbnail from "../../assets/images/hero-banner.webp";
const CourseCard = (props) => {

const [completed , setCompleted] = useState (false);

const getDifficultyClass = (difficulty) => { 
  if(difficulty === "Beginner") return "badge-beginner";
  else if(difficulty ==="Intermediate") return "badge-intermediate";
  else if(difficulty === "Advanced") return "badge-advanced";
  else return "not-specified";
}

  return (

  <div className="course-card">
    <div className="course-thumbnail"><img src={thumbnail} alt="Course Thumbnail" /></div>
    <div className="course-content">
      <div className="course-header">
        <span className="course-category">{props.category}</span>
        <span className={`course-difficulty ${getDifficultyClass(props.difficulty)}`}>{props.difficulty || "Not specified"}</span>
      </div>
      <h3 className={`course-title ${completed ? "completed-title" : ""}`}>{props.title}</h3>
      <p className="course-description">
        {props.description}
      </p>
   <div className="course-footer">
  <a href={props.link} className="course-link">View Course →</a>
  <Button variant={completed ? "success" : "primary"} size="small" onClick={() => setCompleted(!completed)}>
    {completed ? "Completed ✅" : "Mark as Complete"}
  </Button>
</div>

    </div>
  </div>


  );
};

export default CourseCard;