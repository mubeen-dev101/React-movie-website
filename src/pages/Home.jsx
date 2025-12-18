import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react";
import { SearchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"


function Home() {


    const [searchQuery, setsearchQuer] = useState("");
    const [movies, setmovies] = useState([])
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setmovies(popularMovies)
            } catch (err) {
                console.log(err)
                seterror("failed to load movies...")
            } finally {
                setloading(false)
            }
        }

        loadPopularMovies();
    }, [])




    const handlesearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return

        setloading(true)
        try {
            const searchResults = await SearchMovies(searchQuery)
            setmovies(searchResults)
            seterror(null)
        } catch (err) {
            seterror("fail to search movies...")
        } finally {
            setloading(false)
        }


    }

    return <div className="home">
        <form onSubmit={handlesearch} className="search-form">
            <input type="text"
                placeholder="search movies"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setsearchQuer(e.target.value)}
            />
            <button type="submit"
                className="search-button">
                search
            </button>
        </form>

        {error && <div className="error message">{error}</div>}
        {loading ? (<div className="loading">Loading...</div>) :
            (
                <div className="movies-grid">
                    {movies.map((movie => (
                        < MovieCard movie={movie} key={movie.id} />
                    )))
                    }

                </div>
            )}
    </div>
}

export default Home;