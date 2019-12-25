
let movies = [
  {
    id: 0,
    name: "star Wars - The new one",
    score: 10,
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 8,
  },
  {
    id: 2,
    name: "The Godfather",
    score: 99,
  },
  {
    id: 3,
    name: "Logan",
    score: 2,
  },
];


// 영화리스트(Movies) 전체를 가져옴 
export const getMovies = () => {
  return movies;
}

// 영화리스트(Movies)에서 인수로 전달받은 id 값에 해당하는 항목을 가져옴
export const getById = id => {
  const filteredMovies = movies.filter( movie => id === movie.id );
  return filteredMovies[0];
}

// 영화리스트에서 id 값에 해당하는 항목만 필터로 걸러내고 Movies 를 갱신함
export const deleteMovie = id => {
  const cleanedMovie = movies.filter(movie => movie.id !== id);
  console.log('movies',movies);
  if( movies.length > cleanedMovie.length ){
    movies = cleanedMovie;
    return true;
  }else{
    return false;
  }
}

export const addMovie = (name,score)=>{
  const newMovie = {
    id: `${movies.length}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
}