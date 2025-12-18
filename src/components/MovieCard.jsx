// import "../css/MovieCard.css"
// import { useMovieContext } from "../context/MovieContext"

// function MovieCard({ movie }) {
//     const { isFavorites, addtoFavorites, removeFromFavorites } = useMovieContext()
//     const favorites = isFavorites(movie.id)

//     function onlike(e) {
//         e.preventDefault()
//         if (favorites) removeFromFavorites(movie.id)

//         else addtoFavorites(movie)


//     }
//     return (
//         <div className="movie-card">
//             <div className="movie-poster">
//                 <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
//                 <div className="movie-overlay">
//                     <button className={` favorites-btn ${favorites ? "active" : ""}`} onClick={onlike}>
//                         fav
//                     </button>
//                 </div>
//             </div>
//             <div className="movie-info">
//                 <h3>{movie.title}</h3>
//                 <p>{movie.release_date?.split("-")[0]}</p>
//             </div>
//         </div>

//     )
// }
// export default MovieCard

import "../css/MovieCard.css";
import { useMovieContext } from "../context/MovieContext";

function MovieCard({ movie }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

    // Check if this movie is in favorites
    const isFav = isFavorite(movie.id);

    const onLike = (e) => {
        e.preventDefault();
        if (isFav) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    };

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                />
                <div className="movie-overlay">
                    <button
                        className={`favorites-btn ${isFav ? "active" : ""}`}
                        onClick={onLike}
                    >
                        fav
                    </button>
                </div>
            </div>

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    );
}

export default MovieCard;




