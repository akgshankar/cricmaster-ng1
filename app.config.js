
var trainingApp = angular.module('trainingApp');
//This configures the routes and associates each route with a view and a controller
trainingApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/teams',
        {
            controller: 'teamsController',
            templateUrl: '/src/views/teams.html'
        })

        //Define a route that has a route parameter in it (:customerID)
        .when('/players',
        {
            controller: 'playersController',
            templateUrl: '/src/views/players.html'
        })
        .when('/playerdetails/:playerId',
        {
            controller: 'playerDetailsController',
            templateUrl: '/src/views/player-detail.html'
        })
        .when('/tournament',{
            controller: 'tournamentController',
            templateUrl: '/src/views/tournament.html'
        })
        .when('/',{           
            templateUrl: '/src/views/dashboard.html'
        })
        .otherwise({ redirectTo: '/' });

    //$locationProvider.html5Mode(true);
});

