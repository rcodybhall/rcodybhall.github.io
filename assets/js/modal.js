var myApp = angular.module('myApp',['ngDialog']);

//myApp.directive('myDirective', function() {});
//myApp.factory('myService', function() {});

function MyCtrl($scope, ngDialog) {

    $scope.clickToOpen = function () {
        ngDialog.open({ template: 'templateId' });
    };

}
function tt($scope)
{
    $scope.test = function()
    {
        console.log("AaA");
    }
}
