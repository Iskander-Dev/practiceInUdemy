const numberOfMovies = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

const a = prompt("Один из последних фильмов вы смотрели?", ""),
    b = prompt("Насколько оцените его?"),
    c = prompt("Один из последних фильмов вы смотрели?", ""),
    d = prompt("Насколько оцените его?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
