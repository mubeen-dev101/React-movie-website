// import { createContext, useState, useContext, useEffect, Children } from "react";

// const MovieContext = createContext()

// export const useMovieContext = () => useContext(MovieContext)
// export const MovieProvider = () => ({ Children }) => {
//     const { favorites, setfavorites} = useState([])

//     useEffect(() => {
//         const storedFavs = localStorage.getItem("favorites")
//         if (storedFavs) setfavorites(JSON.parse(storedFavs))
//     }, [])

//     useEffect(() => {
//         localStorage.setItem('favorites', JSON.stringify(favorites))

//     }, [favorites])

//     const addtofavorites = (movie) => {

//         setfavorites(prev => [...prev, movie])
//     }

//     const removeFromFavorites = (movieId) => {
//         setfavorites(prev.filter(movie => movie.Id !== movieId))
//     }
//     const isFavorites = (movieId) => {
//         return favorites.some(movie => movie.Id === movieId)
//     }



//     return (
//         <MovieContext.Provider value={{
//             movie,
//             favorites,
//             addtofavorites,
//             removeFromFavorites,
//             isFavorites
//         }}>

//             {Children}
//         </MovieContext.Provider>

//     );
// }

import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");
        if (storedFavs) setFavorites(JSON.parse(storedFavs));
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movie) => {
        setFavorites((prev) => [...prev, movie]);
    };

    const removeFromFavorites = (movieId) => {
        setFavorites((prev) => prev.filter((movie) => movie.Id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favorites.some((movie) => movie.Id === movieId);
    };

    return (
        <MovieContext.Provider
            value={{
                favorites,
                addToFavorites,
                removeFromFavorites,
                isFavorite,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};


