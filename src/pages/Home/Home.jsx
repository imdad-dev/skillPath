import Hero from "../../components/Hero/Hero.jsx";
import CourseCard from "../../components/CourseCard/CourseCard.jsx"
import resources from "../../data/resources.js";

const HomePage =()=>{
    return (
        <div>
            <Hero />
 <div className="course-container">
 
  {resources.map((resource) => (
        <CourseCard
          key={resource.id}
          title={resource.title}
          category={resource.category}
          difficulty={resource.difficulty}
          description={resource.description}
          link={resource.link}
        />
      ))}
      </div>
        </div>
    )
}

export default HomePage;