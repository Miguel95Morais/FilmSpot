window.onload = function () {
    loadMovies();
    loadMovieTheaters();
}
async function loadMovies() {
    try {
        let movies = await $.ajax({
            url: "/api/movies",
            method: "get",
            dataType: "json"
        });
        showMovies(movies);

    } catch (err) {
        let elemMain = document.getElementById("main");
        console.log(err);
        elemMain.innerHTML = "<h1> Página não está disponível</h1>" +
            "<h2> Por favor tente mais tarde</h2>";
    }
}
function showMovies(movies) {
    let elemMain = document.getElementById("main");
    let html = "";
    for (let movie of movies) {
        html += "<section onclick='showMovie(" + movie.MovieId + ")'>" +
            "<h3>" + movie.Name + "</h3>" +
            "<p> Category: " + movie.Category + "</p></section>";
    }
    elemMain.innerHTML = html;
}


function showMovie(movieId) {
    sessionStorage.setItem("movieId", movieId);
    window.location = "index.html";
}
async function loadMovieTheaters() {
    try {
        let movies = await $.ajax({
            url: "/api/movietheaters",
            method: "get",
            dataType: "json"
        });
        showMovieTheaters(movietheaters);

    } catch (err) {
        let elemMain = document.getElementById("main");
        console.log(err);
        elemMain.innerHTML = "<h1> Página não está disponível</h1>" +
            "<h2> Por favor tente mais tarde</h2>";
    }
}
function showMovieTheaters(movietheaters) {
    let elemMain = document.getElementById("main");
    let html = "";
    for (let movietheater of movietheaters) {
        html += "<section onclick='showMovieTheater(" + movietheater.MovieTheaterId + ")'>" +
            "<h3>" + movietheater.Name + "</h3>" +
            "<p> State: " + movietheater.State + "</p></section>";
    }
    elemMain.innerHTML = html;
}


function showMovieTheater(movietheaterId) {
    sessionStorage.setItem("movietheaterId", movietheaterId);
    window.location = "index.html";
}
async function filtermostseen() {
    try {
        let mostseen = document.getElementById("mostseen").value;

        let movies = await $.ajax({
            url: "/api/movies?mostseen=" + mostseen,
            method: "get",
            dataType: "json"
        });
        showMovies(movies);
    } catch (err) {
        let elemMain = document.getElementById("main");
        console.log(err);
        elemMain.innerHTML = "<h1> Página não está disponível</h1>" +
            "<h2> Por favor tente mais tarde</h2>";
    }
}
async function filterbetterclassified() {
    try {
        let betterclassified = document.getElementById("betterclassified").value;

        let movies = await $.ajax({
            url: "/api/movies?betterclassified=" + betterclassified,
            method: "get",
            dataType: "json"
        });
        showMovies(movies);
    } catch (err) {
        let elemMain = document.getElementById("main");
        console.log(err);
        elemMain.innerHTML = "<h1> Página não está disponível</h1>" +
            "<h2> Por favor tente mais tarde</h2>";
    }
}