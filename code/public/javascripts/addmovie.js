//upload image
window.onload = function () {
    var fileupload = document.getElementById("FileUpload1");
    var filePath = document.getElementById("spnFilePath");
    var image = document.getElementById("imgFileUpload");
    image.onclick = function () {
        fileupload.click();
    };
    fileupload.onchange = function () {
        var fileName = fileupload.value.split('\\')[fileupload.value.split('\\').length - 1];
        filePath.innerHTML = "<b>Selected File: </b>" + fileName;
    };
};

window.onload = async function () {
    try {
        let movies = await $.ajax({
            url: "/api/movies",
            method: "get",
            dataType: "json"
        });
        let html = "";
        for (let movie of movies) {
            html += "<option value=" + movie.MovieId + ">" + movie.Name +
                "</option>";
        }
        document.getElementById("movie").innerHTML = html;
    } catch (err) {
        console.log(err);
        // mensagem de erro para o utilizador      
    }

}


async function addMovie() {
    try {
        let movie = {
            Title: document.getElementById("title").value,
            Category: document.getElementById("category").value,
            Actors: document.getElementById("actors").value,
            Producers: document.getElementById("producers").value,
            Description: document.getElementById("description").value,
            Cinema: document.getElementById("cinema").value,
            MovieId: parseInt(document.getElementById("movie").value)
        }
        alert(JSON.stringify(movie));
        let result = await $.ajax({
            url: "/api/movies",
            method: "post",
            dataType: "json",
            data: JSON.stringify(movie),
            contentType: "application/json"
        });
        alert(JSON.stringify(result));
    } catch (err) {
        console.log(err);
        // mensagem para o utilizador
    }
}