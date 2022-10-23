//const movies = require("./data.js");
//require("./data.js").movies;
//console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    
    //inline:
    //return moviesArray.map(element => element.director);
    const allDiretors = moviesArray.map((films) => {
        return films.director;
    });

    return allDiretors;
   
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const steven = moviesArray.filter((films) => {
        return films.genre.includes('Drama') && films.director == 'Steven Spielberg';
    });
    
    return steven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;
    
    const scores = moviesArray.reduce((contador, films) => {
        if (!films.score) return contador;
        return contador + films.score; 
    },0);
    
    return Number((scores / moviesArray.length).toFixed(2));
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const mediaDrama = scoresAverage(
        moviesArray.filter((films) => {
        return films.genre.includes('Drama');
    }));
    return mediaDrama;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const filmesOrdenados = moviesArray.sort((a, b) => {
        if (a.year - b.year > 0) return 1; //b vem antes de a
        if (a.year - b.year < 0) return -1; //a vem antes de b
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
    });
    return [...filmesOrdenados];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const filmesOrdemAlpha = moviesArray.map((films) => {
        return films.title;
    });
    return filmesOrdemAlpha.sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesMinutes = moviesArray.map((films) => {
        let minutos = 0;
        let horas = 0;
        duracao = films.duration.match(/(\d+)/g);

        if (duracao.length > 1) minutos = duracao[1];
        horas =  duracao[0] * 60;
            
        let novoFilms = {...films};
        novoFilms.duration = Number(horas) + Number(minutos);
        return novoFilms;        
    });

    return [...moviesMinutes];
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
