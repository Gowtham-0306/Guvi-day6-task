class Movie {

  // Constructor to initialize the movie class with title , studio, rating
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    // get method to get the movies that have rating PG by using filter .
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  // Creating an instance/object of the Movie class
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  
  const moviesArray = [
     new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG-13"),
    new Movie("Movie3", "Studio3", "R"),
    new Movie("Movie4", "Studio4"), // this is for Default rating "PG"
  ];
  
  const pgMovies = Movie.getPG(moviesArray);
  console.log(pgMovies);
  
  // o/p
  // [
  //   Movie { title: 'Movie1', studio: 'Studio1', rating: 'PG' },
  //   Movie { title: 'Movie4', studio: 'Studio4', rating: 'PG' }
  // ]