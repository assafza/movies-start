var app = angular.module('movieLibrary', [])

app.directive("myRepeat" , function(){
  return{
    templateUrl : 'app/movies/movie.html',
    scope : {
      movie : "=specMovie"
    },
    controller : function ($scope , $element){
      $scope.onMovieClicked = function(){
        alert($scope.movie.name)
      }
    }
  }
});
