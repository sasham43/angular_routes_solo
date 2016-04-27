var app = angular.module('candidateApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/bernie', {
      templateUrl: 'views/bernie.html',
      controller: 'BernieController',
      controllerAs: 'bernie'
    })
    .when('/hillary', {
      templateUrl: 'views/hillary.html',
      controller: 'HillaryController',
      controllerAs: 'hillary'
    })
    .when('/trump', {
      templateUrl: 'views/trump.html',
      controller: 'TrumpController',
      controllerAs: 'trump'
    })
    .when('/cruz', {
      templateUrl: 'views/cruz.html',
      controller: 'CruzController',
      controllerAs: 'cruz'
    })
    .when('/kasich', {
      templateUrl: 'views/kasich.html',
      controller: 'KasichController',
      controllerAs: 'kasich'
    })

  $locationProvider.html5Mode(true);
}]);

app.controller('BernieController', function(){
  var bernie = this;
  bernie.message = 'Feel the Bern!'
});
app.controller('HillaryController', function(){
  var hillary = this;
  hillary.message = 'I\'m going to email the country to greatness';
});
app.controller('TrumpController', function(){
  var trump = this;
  trump.message = 'Make Angular Great Again';
});
app.controller('CruzController', function(){
  var cruz = this;
  cruz.message = 'Don\'t look into San Francisco is the seventies, I promise I wasn\'t there.';
});
app.controller('KasichController', function(){
  var kasich = this;
  kasich.message = 'I don\'t stand for much, I just know I hate the Roots!';
});
