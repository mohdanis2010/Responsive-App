
var app = angular.module('app', ['ngRoute','ngAnimate']);

app.config(function($routeProvider) {
  $routeProvider.
    when("/", {
      templateUrl: "../pages/dashboard.html",
      controller: "dashboardCtrl",
      animate: "slideRight"
    }).
    when("/page1", {
      templateUrl: "../pages/list_views.html",
      controller: "listViewCtrl",
      animate: "slideLeft"
    })
    
});



app.directive('animClass',function($route){
  return {
    link: function(scope, elm, attrs){
      var enterClass = $route.current.animate;
      elm.addClass(enterClass)
      scope.$on('$destroy',function(){
        elm.removeClass(enterClass)
        elm.addClass($route.current.animate)
      })
    }
  }
});

// I did't seperate controller and services bcoz these are only two 

app.controller("listViewCtrl", function($scope, DataService) {
 $scope.cols = DataService.getCols();
});


app.controller('dashboardCtrl', ['$scope', 'DataService', function($scope, DataService) {

  $scope.data = DataService.getData();

  

}]);

