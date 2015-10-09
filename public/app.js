var app = angular.module('contactListApp', [])
app.controller('ContactListController', function($scope){
  $scope.names = ['Wanderley', 'Murilo', 'Pedro'];

  $scope.newName = '';

  $scope.add = function(){
    $scope.names.push($scope.newName);
    $scope.newName = '';
  }
  
  $scope.remove = function(name){
    $scope.names.splice($scope.names.indexOf(name), 1);
  }

});
