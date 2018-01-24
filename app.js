var trainingApp = angular.module('trainingApp',['ngRoute','ngMessages']);
trainingApp.controller('playersController',playersController);
trainingApp.controller('playerDetailController',playerDetailController);
trainingApp.controller('tournamentController',tournamentController);
trainingApp.controller('teamsController',teamsController);
trainingApp.service('playersService',playersService); 
trainingApp.service('teamsService',teamsService); 
trainingApp.directive('selectOnClick',selectOnClick);
trainingApp.directive('tournament',tournamentDirective);
