angular.module('contactListApp')
.controller('ContactListController', function(contactsStore, $scope){

  $scope.contacts = contactsStore.getAll();

  $scope.doRemove = function(contact){
    contactsStore.remove(contact._id);
  }

});
