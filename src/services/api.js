// const API_KEY = "8c4c27787b6841df24e81d05630624cc"
// const BASE_URL = "https://api.themoviedb.org/3/"
// export const getPopularMovies = async () => {
//     const response = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=8c4c27787b6841df24e81d05630624cc`);
//     const data = await response.json()
//     return data.result;
// }



// export const SearchMovies = async (query) => {
//     const response = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=8c4c27787b6841df24e81d05630624cc
//          &query=${encodeURIComponent(query)}`);
//     const data = await response.json()
//     return data.result
// }



const API_KEY = "8c4c27787b6841df24e81d05630624cc";
const BASE_URL = "https://api.themoviedb.org/3";

// Get Popular Movies
export const getPopularMovies = async () => {
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );

    const data = await response.json();
    return data.results; // TMDB returns an array in "results"
};

// Search Movies
export const SearchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );

    const data = await response.json();
    return data.results;
};
