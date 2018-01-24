var addTournamentDirective =  function(){
    var addTournamentDDO = {
        restrict:'E',
        template:` <form name="addTournamentForm">
                    <div class="form-group" ng-class="{ 'has-danger' : addTournamentForm.name.$invalid 
                        && !addTournamentForm.name.$pristine }">
                    <label>Name</label>
                    <input type="text" name="tounamentName" class="form-control" ng-model="tounamentName" 
                    required>        
                    <p ng-show="addTournamentForm.tounamentName.$invalid && !addTournamentForm.name.$pristine" 
                            class="help-block" ng-show="addTournamentForm.name.$touched">Tournament name is required.
                    </p>        
                    </div><form>`
    }
    return addTournamentDDO;
}