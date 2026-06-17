import "./Hero.css";
import heroImg from "../../assets/images/hero-banner.webp";

const Hero = () => {
    return (
        <section className="hero" aria-label="Hero Section">
            <div className="hero-content">
                <h1>
                    Structured Learning
                    <br />
                    <span className="highlight-heading">Without Distractions</span>
                </h1>

               <p>
  <span className="highlight">SkillPath AI</span> organizes free coding courses and tutorials into clear roadmaps.
  <br />
  Stay focused, track progress, and grow your skills faster.
</p>

                <div className="hero-buttons">
                    <button className="btn btn-primary">Get Started</button>
                    <button className="btn btn-secondary">Explore Roadmaps</button>
                </div>
            </div>

            <div className="hero-image-wrapper">
                <img
                    src={heroImg}
                    alt="Illustration of a learner following a structured roadmap"
                    className="hero-image"
                />
            </div>
        </section>
    );
};

export default Hero;