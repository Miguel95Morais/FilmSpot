pool = require('./connection');

module.exports.getAllMovies = async function () {
    try {
        const sql = 'SELECT * FROM movie;';
        let movie = await pool.query(sql);
        console.log(sql);
        return { status: 200, data: movie };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}
module.exports.getMovie = async function (movie_id) {
    try {
        let sql = "SELECT * FROM movie WHERE movie_id = ?";
        let movie = await pool.query(sql, [movie_id]);
        return { status: 200, data: movie[0] };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
};