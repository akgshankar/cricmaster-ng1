 
 var playersController = ['$scope','playersService',function($scope,playersService){

    $scope.players=playersService.getPlayers();
    /*
    $scope.players=[
        {name:'Sachin Ramesh Tendulkar',nickname:'Master',email:'isachin@gmail.com',team:'India'},
        {name:'Viraat Kohli',nickname:'Kohli',email:'kohli@gmail.com',team:'India'},
        {name:'Harbhajan',nickname:'BHajji',email:'bhajji@gmail.com',team:'India'},
        {name:'Bhuvneshwar Kumar',nickname:'Bhuvi',email:'bhuvi@gmail.com',team:'India'},
        {name:'Inzemam ul Haq',nickname:'Aloo',email:'inzm@gmail.com',team:'Pakistaan'}
    ]; 
    */  
 }];
 