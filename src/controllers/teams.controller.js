 
 var teamsController = ['$scope','teamsService',function($scope,teamsService){     
    $scope.teams= teamsService.getTeams();
 }];
 