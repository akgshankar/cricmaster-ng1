Controllers
Views
including existing html (ng-include)

novalidate
<!-- novalidate prevents HTML5 validation since we will be validating ourselves -->

$valid	    ng-valid	 item is currently valid based on the rules you placed.
$invalid	ng-invalid	 item is currently invalid based on the rules you placed.
$pristine	ng-pristine	 the form/input has not been used yet.
$dirty	    ng-dirty	 the form/input has been used.
$touched	ng-touched	 the input has been blurred.


$scope.submitted = true;
'has-danger' : userForm.name.$invalid && !userForm.name.$pristine && submitted }"