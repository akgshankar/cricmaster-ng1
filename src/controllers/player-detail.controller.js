 
 var playerDetailController = ['$scope','playersService',function($scope,playersService){
 
    $scope.player={};

    $scope.players=playersService.getPlayers();

    function addPlayer(player){
        playersService.addPlayer(player);
    }

    $scope.deletePlayer= function(player){
        playersService.deletePlayer(player);
    }

    $scope.submitForm = function(isFormValid,player) {
        // check to make sure the form is completely valid
        if(isFormValid){
            if (isPlayerInfoValid(player)) {
                console.log('we are good to go');
                addPlayer(player);
              }
        }
        else{
            return false;
        }
        
    };

    $scope.search = function(inputVal){
    }

    $scope.add = function(player){
    }

    function isPlayerInfoValid(player){
        return true;
    }

    /*
    $scope.playersList=[
        {name:'Sachin Ramesh Tendulkar',nickname:'Master',email:'isachin@gmail.com',team:'India'},
        {name:'Viraat Kohli',nickname:'Kohli',email:'kohli@gmail.com',team:'India'},
        {name:'Harbhajan',nickname:'BHajji',email:'bhajji@gmail.com',team:'India'},
        {name:'Bhuvneshwar Kumar',nickname:'Bhuvi',email:'bhuvi@gmail.com',team:'India'},
        {name:'Inzemam ul Haq',nickname:'Aloo',email:'inzm@gmail.com',team:'Pakistaan'}
    ];  
    */  

    

 }];
 