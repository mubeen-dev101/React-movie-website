import "../css/Favorites.css"
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";


function Favorites() {
    const { Favorites } = useMovieContext();

    if (Favorites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>

                <div className="movies-grid">
                    {Favorites.map((movie) => (
                        < MovieCard movie={movie} key={movie.id} />
                    ))
                    }

                </div>
            </div>
        )
    }
    return <div className="favorites-empty">
        <h2>No Favorites Movies Yet </h2>
        <p>Start Adding Movies To Your Favorites And They Will Apper Here</p>
    </div>
}



export default Favorites;
