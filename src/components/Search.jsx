import { useState, useEffect, useContext } from "react"
import { searchMoviesContext } from "../layout/Main"

const Search = () => {
  const { searchMovies } = useContext(searchMoviesContext)

  const [search, setSearch] = useState("")
  const [type, setType] = useState("all")

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type)
    }
  }

  const handleFilter = (e) => {
    setType(e.target.dataset.type)
  }

  useEffect(() => {
    searchMovies(search, type)
  }, [type])

  return (
    <div className="row">
      <div className="input-field">
        <input
          placeholder="Search"
          type="search"
          className="validate"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="btn search-btn"
          onClick={() => searchMovies(search, type)}
        >
          Search
        </button>
      </div>

      <div>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            onChange={handleFilter}
            checked={type === "all"}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={type === "movie"}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={type === "series"}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  )
}

export default Search
