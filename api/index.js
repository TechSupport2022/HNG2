import { data } from 'autoprefixer';
import axios from 'axios';

export const fetchMovies = async (page) => {
  const options = {
    method: 'GET',
    //  url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    url: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTRlOTRjNGZiMTlkMjE1NmQ4NGQ0MjZmMWZmNzE4ZSIsInN1YiI6IjY0ZmYxYmU4NmEyMjI3MDExYTc5ZmUzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HMCdt0K9QNL6LrN24wHfb3aVgcmgN6ud3iHUPV3WGX0'
    }
  };

  const result = await axios
    .request(options)
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return result;
};

export const fetchMovie = async (movieId) => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTRlOTRjNGZiMTlkMjE1NmQ4NGQ0MjZmMWZmNzE4ZSIsInN1YiI6IjY0ZmYxYmU4NmEyMjI3MDExYTc5ZmUzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HMCdt0K9QNL6LrN24wHfb3aVgcmgN6ud3iHUPV3WGX0'
    }
  };

  const result = axios
    .request(options)
    .then(function (response) {
      // console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return result;
};

export const fetchGenres = (genreIds) => {
  const genres = [
    {
      id: 28,
      name: 'Action'
    },
    {
      id: 12,
      name: 'Adventure'
    },
    {
      id: 16,
      name: 'Animation'
    },
    {
      id: 35,
      name: 'Comedy'
    },
    {
      id: 80,
      name: 'Crime'
    },
    {
      id: 99,
      name: 'Documentary'
    },
    {
      id: 18,
      name: 'Drama'
    },
    {
      id: 10751,
      name: 'Family'
    },
    {
      id: 14,
      name: 'Fantasy'
    },
    {
      id: 36,
      name: 'History'
    },
    {
      id: 27,
      name: 'Horror'
    },
    {
      id: 10402,
      name: 'Music'
    },
    {
      id: 9648,
      name: 'Mystery'
    },
    {
      id: 10749,
      name: 'Romance'
    },
    {
      id: 878,
      name: 'Science Fiction'
    },
    {
      id: 10770,
      name: 'TV Movie'
    },
    {
      id: 53,
      name: 'Thriller'
    },
    {
      id: 10752,
      name: 'War'
    },
    {
      id: 37,
      name: 'Western'
    }
  ];

  const genreMap = {};
  genres.forEach((genre) => {
    genreMap[genre.id] = genre.name;
  });

  // arr = [18, 28, 20]

  const genreNames = genreIds.map((genreId) => {
    return genreMap[genreId] || 'Unknown';
  });

  return genreNames;
};

export const fetchCrew = async (movieId) => {
  // Replace 'YOUR_API_KEY' and 'MOVIE_ID' with your TMDb API key and the movie's ID.
  const apiKey = '1a4e94c4fb19d2156d84d426f1ff718e';

  const result = await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
    )
    .then((response) => {
      if (response.status === 200) {
        const movieDetails = response.data;

        // Extract the crew information
        const crew = movieDetails.crew;

        // Filter for directors and producers
        const directors = crew.filter((member) => member.job === 'Director');
        //   const producers = crew.filter((member) => member.job === 'Producer');
        const writers = crew.filter((member) => member.job === 'Writer');
        const cast = movieDetails.cast.slice(0, 4);
        //   console.log('Directors:', directors);
        //   console.log('Producers:', producers);
        return { directors: directors, writers: writers, stars: cast };
      } else {
        console.error('Error fetching movie details.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  //  console.log(result)
  return result;
};

export const searchMovie = async (query) => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTRlOTRjNGZiMTlkMjE1NmQ4NGQ0MjZmMWZmNzE4ZSIsInN1YiI6IjY0ZmYxYmU4NmEyMjI3MDExYTc5ZmUzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HMCdt0K9QNL6LrN24wHfb3aVgcmgN6ud3iHUPV3WGX0'
    }
  };

  let result = await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return result;
};

// const genre = await fetchGenres([18, 28, 20]);
// console.log(genre)
