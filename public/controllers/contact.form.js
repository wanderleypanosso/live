angular.module('contactListApp')
.controller('ContactFormController', function(contactsStore, $routeParams, $scope, $location){
  var contactId = $routeParams.id;

  $scope.newContact = contactsStore.getById(contactId);
  $scope.isEditing = true;
  if(!$scope.newContact){
    $scope.newContact = {};
    $scope.isEditing = false;
  }

  $scope.doSave = function(){
    contactsStore.save($scope.newContact);
    $scope.newContact = {};
    $location.path('/');
  }
  $scope.canSave = function(){
    return $scope.contactForm.$valid;
  }

});
