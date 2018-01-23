var trainingApp = angular.module('trainingApp',['ngMessages']);

trainingApp.controller('playerController',function($scope){
    var playerTemplate = {
        name:null,
        nickname:null,
        email :null,
        team:null
    } 

    $scope.player={};

    $scope.submitForm = function(isValid) {
        // check to make sure the form is completely valid
        if (isValid) {
          console.log('we are good to go');
        }
      };
});

trainingApp.controller('teamsController',function($scope){
     
});

trainingApp.controller('tournamentController',function($scope){
     
});