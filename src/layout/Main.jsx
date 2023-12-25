import { useState, useEffect, createContext } from "react"
import Movies from "../components/Movies.jsx"
import Preloader from "../components/Preloader.jsx"
import Search from "../components/Search.jsx"

const API_KEY = process.env.REACT_APP_API_KEY

export const searchMoviesContext = createContext()

const Main = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=Matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const searchMovies = (str, type = "all") => {
    setLoading(true)
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }

  return (
    <main className="container content">
      <searchMoviesContext.Provider value={{ searchMovies }}>
        <Search />
      </searchMoviesContext.Provider>
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  )
}

export default Main
