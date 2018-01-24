var trainingApp = angular.module('trainingApp',['ngMessages']);

trainingApp.controller('playersController',function($scope){
    
    var playerTemplate = {
        name:null,
        nickname:null,
        email :null,
        team:null
    } 

    $scope.newPlayer={};

    $scope.players=[
        {name:'Sachin Ramesh Tendulkar',nickname:'Master',email:'isachin@gmail.com',team:'India'},
        {name:'Viraat Kohli',nickname:'Kohli',email:'kohli@gmail.com',team:'India'},
        {name:'Harbhajan',nickname:'BHajji',email:'bhajji@gmail.com',team:'India'},
        {name:'Bhuvneshwar Kumar',nickname:'Bhuvi',email:'bhuvi@gmail.com',team:'India'},
        {name:'Inzemam ul Haq',nickname:'Aloo',email:'inzm@gmail.com',team:'Pakistaan'}
    ];

    function addPlayer(player){
        $scope.players.push(player);
    }

    $scope.deletePlayer= function(player){
        let indx= $scope.players.indexOf(player);
        if(indx !=-1){
            $scope.palyers.splice(player);
        }
    }

    $scope.submitForm = function(isFormValid,player) {
        // check to make sure the form is completely valid
        if(isFormValid){
            if (isPlayerInfoValid(player)) {
                console.log('we are good to go');
                addPlayer(player);
              }
        }
        
    };

    $scope.search = function(inputVal){
    }

    $scope.add = function(player){
    }

    function isPlayerInfoValid(player){
        return true;
    }

});

trainingApp.controller('teamsController',function($scope){
     
});

trainingApp.controller('tournamentController',function($scope){
     
});


app.service('playersService', function () {
    this.getPlayers = function () {
        return players;
    };

    this.insertPlayer = function (player) {
        var topID = players.length + 1;
        player.id = topID;
        players.push(players);
    };

    this.deletePlayer = function (player) {
        
    };

    this.getCustomer = function (id) {         
        
    };

    var players = [
        {name:'Sachin Ramesh Tendulkar',nickname:'Master',email:'isachin@gmail.com',team:'India'},
        {name:'Viraat Kohli',nickname:'Kohli',email:'kohli@gmail.com',team:'India'},
        {name:'Harbhajan',nickname:'BHajji',email:'bhajji@gmail.com',team:'India'},
        {name:'Bhuvneshwar Kumar',nickname:'Bhuvi',email:'bhuvi@gmail.com',team:'India'},
        {name:'Inzemam ul Haq',nickname:'Aloo',email:'inzm@gmail.com',team:'Pakistaan'}
    ];

});
