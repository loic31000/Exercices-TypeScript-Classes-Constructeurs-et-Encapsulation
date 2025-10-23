// Exercises 7 fini.
var movie = /** @class */ (function () {
    function movie(titre, year) {
        this.titre = titre;
        this.year = year;
    }
    movie.prototype.getInfo = function () {
        console.log("Le nom du film est", this.titre, "son année de sortie est", this.year);
    };
    return movie;
}());
var detailsFilm = new movie("Matrix", 1999);
detailsFilm.getInfo();
