import './Navbar.css';
import SearchBar from '../SearchBar/SearchBar.jsx';

const Navbar = ()=>{
    return (
        <nav className="navbar">
    <div className="logo">
  🚀 SkillPath <span>AI</span>
</div>

  <SearchBar  />

    <ul className="nav-links">
        {/* Explore Learn Progress More */}
        <li><a href="/explore">Explore</a></li>
        <li><a href="/learn">Learn</a></li>
        <li><a href="/progress">Progress</a></li>

        {/* more is dropdown section of More ▼
├── AI Tutor
├── Mock Interview
├── ATS Checker
├── Resume Builder
├── Job Search
├── Notes
└── Community */}

     <li className="dropdown">
          <span>More ▼</span>

          <ul className="dropdown-content">
              {/* items */}
                <li><a href="/ai-tutor">AI Tutor</a></li>   
                <li><a href="/mock-interview">Mock Interview</a></li>
                <li><a href="/ats-checker">ATS Checker</a></li>
                <li><a href="/resume-builder">Resume Builder</a></li>
                <li><a href="/job-search">Job Search</a></li>
                <li><a href="/notes">Notes</a></li>
                <li><a href="/community">Community</a></li>
          </ul>
      </li>
       
    </ul>

    <div className="nav-actions">
        {/* Theme button + Get Started */}
        
         <button className="theme-toggle">🌙</button>
        <button className="get-started">Get Started</button>
    </div>
</nav>
    );
}

export default Navbar;