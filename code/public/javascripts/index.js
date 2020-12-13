window.onload = function () {
    loadMovies();
}
async function loadMovies() {
    try {
        let albuns = await $.ajax({
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
    for (let album of albuns) {
        html += "<section onclick='showAlbum(" + album.AlbumId + ")'>" +
            "<h3>" + album.Title + "</h3>" +
            "<p> Artista: " + album.Name + "</p></section>";
    }
    elemMain.innerHTML = html;
}


function showAlbum(albumId) {
    sessionStorage.setItem("albumId", albumId);
    window.location = "album.html";
}

async function filtrarmostseen() {
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
async function filtrarbetterclassified() {
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