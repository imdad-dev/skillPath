import "./SearchBar.css";
const SearchBar = () => {
    return (
          <div className="search-box">
  <span className="search-icon">🔍</span>

  <input
    className="search-input"
    type="text"
    placeholder="Search skills, courses & growth paths..."
  />
</div>
    )
}

export default SearchBar;