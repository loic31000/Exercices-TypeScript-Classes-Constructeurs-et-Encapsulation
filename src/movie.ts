// Exercises 7 fini.

class movie {
  public titre: string;
  public year: number;

  constructor(titre: string, year: number) {
    this.titre = titre;
    this.year = year;
  }

  getInfo() {
    console.log(
      "Le nom du film est",
      this.titre,
      "son année de sortie est",
      this.year
    );
  }
}

const detailsFilm = new movie("Matrix", 1999);
detailsFilm.getInfo();