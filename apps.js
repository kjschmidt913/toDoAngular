
  
var app = angular.module('myModule', []);
// This is declaring a module. More on this in a moment

app.controller('myController', function($scope){ 
  $scope.toDo=['laundry', 'dishes', 'change sheets'];
  
  
  $scope.addToDo = function(input){
    $scope.toDo.push(input);
  };
});