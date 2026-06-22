import React, { useState } from "react";
import Hero from "../../components/Hero/Hero.jsx";
import CourseCard from "../../components/CourseCard/CourseCard.jsx"
import resources from "../../data/resources.js";

const HomePage =()=>{

const [completedList , setCompletedList] = useState(
   new Array(resources.length).fill(false)
);

const handleToggle =(index)=>{
setCompletedList( completedList.map((item , i) => index ===i ? !item : item));

}

const completedCount =completedList.filter (item=>item).length;

    return (
        <div>
            <Hero />
 <div className="progress-bar"> 
  <p>{completedCount} of {resources.length} completed</p>
 </div>

 <div className="course-container">
  {resources.map((resource , index) => (
        <CourseCard
               key={resource.id}
            {...resource}
            completed={completedList[index]}
            onToggle={() => handleToggle(index)}
        />
      ))}
      </div>
        </div>
    )
}

export default HomePage;