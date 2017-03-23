app.controller('MoviesCtrl', ['$scope', 'movies', function($scope, movies) {
  $scope.isDeleting = false;
  $scope.movies = movies.getMovies();

  $scope.movie1 = $scope.movies[1];
  $scope.movie2 = $scope.movies[2];
  $scope.addMovie = function(){
    alert("This functionality will be available soon!");
  };

  $scope.deleteMovies = function(){
    $scope.isDeleting = true;
  };

  $scope.doneDeleteMovies = function(){
    $scope.isDeleting = false;
  };

  $scope.deleteMovie = function(movie){
    alert("delete")
    // delete the movie only if the app is in "delete mode"
    movies.removeMovie(movie.id);
  };
 }]);
