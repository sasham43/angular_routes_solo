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

app.controller('BernieController', ['$http',function($http){
  var bernie = this;
  bernie.url = '';

  $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=bernie+sanders').then(function(response){
    console.log(response);
    bernie.url = response.data.data.image_url;
  });
}]);
app.controller('HillaryController', ['$http',function($http){
  var hillary = this;
  hillary.url = '';

  $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=hillary+clinton').then(function(response){
    console.log(response);
    hillary.url = response.data.data.image_url;
  });
}]);
app.controller('TrumpController', ['$http',function($http){
  var trump = this;
  trump.url = '';

  $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=donald+trump').then(function(response){
    console.log(response);
    trump.url = response.data.data.image_url;
  });
}]);
app.controller('CruzController', ['$http',function($http){
  var cruz = this;
  cruz.url = '';

  $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=ted+cruz').then(function(response){
    console.log(response);
    cruz.url = response.data.data.image_url;
  });
}]);
app.controller('KasichController', ['$http',function($http){
  var kasich = this;
  kasich.url = '';

  $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=john+kasich').then(function(response){
    console.log(response);
    kasich.url = response.data.data.image_url;
  });
}]);
