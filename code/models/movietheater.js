pool = require('./connection');

module.exports.getAllMovieTheaters = async function () {
    try {
        const sql = 'SELECT * FROM cinema;';
        let cinema = await pool.query(sql);
        console.log(sql);
        return { status: 200, data: cinema };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getMovieTheaters = async function (cinema_id) {
    try {
        let sql = "SELECT * FROM cinema WHERE cinema_id = ?";
        let cinema = await pool.query(sql, [cinema_id]);
        return { status: 200, data: cinema[0] };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
};