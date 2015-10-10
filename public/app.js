angular.module('contactListApp', [
  'ui.mask',
  'ngRoute',
  'customFilters'
])
.config(function($routeProvider){
  $routeProvider
    .when('/contacts', {
      templateUrl: 'views/contact-list.html',
      controller: 'ContactListController'
    })
    .when('/contacts/new', {
      templateUrl: 'views/contact-form.html',
      controller: 'ContactFormController'
    })
    .when('/contacts/edit/:id', {
      templateUrl: 'views/contact-form.html',
      controller: 'ContactFormController'
    })
    .otherwise({ redirectTo: '/contacts' });
})
.run(function(){

});
